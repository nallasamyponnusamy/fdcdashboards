
$('#embedContainer').height($(window).height()*.87)
//$('#embedContainer').height($('#embedContainer').width()*.475)



var models = window['powerbi-client'].models;
var permissions = models.Permissions.All;

var intervalId;

function createConfig(embedToken,reportId,groupId) {

  var embedUrl = 'https://app.powerbi.com/reportEmbed?reportId='+reportId+'&groupId='+groupId;  
  
  var embedConfiguration = {
    type: 'report',
    id: reportId,
    embedUrl: embedUrl,
    tokenType: models.TokenType.Embed,
    permissions:permissions,
    settings: {
          filterPaneEnabled: false,
          navContentPaneEnabled: false,
          extensions: [
            {
                command: {
                    name: "copy",
                    title: "copy",
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEU...AAABJRU5ErkJggg==",
                    extend:
                    {
                        visualContextMenu: {
                            title: "Copy Key Value",
                        }
                    }
                }
            }
        ]
      },
    accessToken: embedToken
  };

  return embedConfiguration;

}


function embedReportAndSetTokenListener(reportId,groupId) {
    // Generate embed token
  //  generateEmbedToken(reportId, groupId)

  var embedContainer = $('#embedContainer')[0];
 
    $.get( "/api/token/group/"+groupId+"/report/"+reportId).then(function( Token ) {

        var embedToken = JSON.parse(Token).token;
        
        // set config for embedding report
        var config = createConfig(embedToken,reportId,groupId);
        
      //  console.log(config);
        // Get a reference to the embedded report HTML element
        
        
        // Embed the report and display it within the div container.
        var report = powerbi.embed(embedContainer, config);
        
        // Report.off removes a given event handler if it exists.        
        report.off("loaded");


        // Report.on will add an event handler which prints to Log window.
        report.on("loaded", function() {
           // console.log("Clearning interval"+intervalId);
            clearInterval(intervalId);
            //console.log("Setting new interval");
            intervalId=setInterval(function(){ report.refresh() }, 60000);  
            
            setTokenExpirationListener(JSON.parse(Token).expiration,
            2 /*minutes before expiration*/, 
            reportId, 
            groupId);
        });

        report.on("commandTriggered", function(command) {
            try {
           // console.log(command.detail.dataPoints[0].identity[0].equals);
              var dummy = document.createElement("input");
              // Add it to the document
              document.body.appendChild(dummy);
              // Set its ID
              dummy.setAttribute("id", "dummy_id");
              // Output the array into it  
              document.getElementById("dummy_id").value=command.detail.dataPoints[0].identity[0].equals;  
              // Select it
              dummy.select();
              // Copy its contents
              document.execCommand("copy");
              // Remove it as its not needed anymore
              document.body.removeChild(dummy);
          }
          catch(err) {}
        });

    });
}

function setTokenExpirationListener(tokenExpiration, 
    minutesToRefresh = 2, 
    reportId, 
    groupId){
    
    // get current time
    var currentTime = Date.now();
    var expiration = Date.parse(tokenExpiration);
    var safetyInterval = minutesToRefresh* 60 * 1000;

    // time until token refresh in milliseconds
    var timeout = expiration - currentTime - safetyInterval;
    

    // if token already expired, generate new token and set the access token
    if (timeout<=0)
    {
        console.log("Updating Report Embed Token" + reportId);
        updateToken(reportId, groupId);
    }
    // set timeout so minutesToRefresh minutes before token expires, token will be updated
    else 
    {
        console.log("Report Embed Token will be updated in " + timeout + " milliseconds.");
        setTimeout(function() {
        updateToken(reportId, groupId);
        }, timeout);
    }
}

function updateToken(reportId, groupId) {
    // Generate new EmbedToken
    $.get( "/api/token/group/"+groupId+"/report/"+reportId)
    .then(function( Token ) {
        // Get a reference to the embedded report HTML element
        var embedContainer = $('#embedContainer')[0];
        // Get a reference to the embedded report.
        var report = powerbi.get(embedContainer);

        // Set AccessToken
        report.setAccessToken(JSON.parse(Token).token)
        .then(function() {
        // Set token expiration listener
        // result.expiration is in ISO format
        setTokenExpirationListener(JSON.parse(Token).expiration,2,reportId,groupId /*minutes before expiration*/);
        });
    });
}

function embedReport(reportId,gid){
 embedReportAndSetTokenListener(reportId,gid) 
}

function fullscreen(){
  var element = $('#embedContainer')[0];
  var report = powerbi.get(element);

  report.fullscreen();
}