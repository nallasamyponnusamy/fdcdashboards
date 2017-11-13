var reportList = 
{
  buffermonitor: {
		    dispatchmonitor:{
		      id: 'dispatchmonitor',
		      rid: 'f837b929-4504-4709-a8ad-c05e05b281a7',
		      name: 'Dispatch Monitor'
		    },
		    throughput:{
		      id: 'throughput',
		      rid: '33e15624-6a78-4f4f-aedc-1814460bc578',
		      name: 'Throughput'
		    },
		    orderqueue:{
		      id: 'orderqueue',
		      rid: '3baf5742-4ccf-48cb-ba22-579733e938d2',
		      name: 'Order Queue'
		    },
		    mailslot:{
		      id: 'mailslot',
		      rid: '91ee18cc-8301-4d93-b801-d0535332c3e9',
		      name: 'Mail Slot'
		    },
		    ambient:{
		      id: 'ambient',
		      rid: 'c7c4974b-eba8-4e8a-9fd1-3dc9bb47c7f3',
		      name: 'Ambient'
		    },
		    fresh:{
		      id: 'fresh',
		      rid: 'b462e136-dc9e-46ba-97ac-194a366cb04a',
		      name: 'Fresh'
		    },
		    chill:{
		      id: 'chill',
		      rid: '86deea9b-138b-41dd-8f69-8c3d1f8543b6',
		      name: 'Chill'
		    },
		    qcmezz:{
		      id: 'qcmezz',
		      rid: '55880244-0603-4759-886b-43522a51c33d',
		      name: 'QC Mezz'
		    },
		    shipfloor:{
		      id: 'shipfloor',
		      rid: 'b2f21019-7dda-4b0e-aed1-16eba6b1b021',
		      name: 'Ship Floor'
		    },
		    dockdoor:{
		      id: 'dockdoor',
		      rid: '4c477360-5366-45a5-b968-feec1ed9a90e',
		      name: 'Dock Door'
		    }
	  },
	shipexceptions: {
	  	shipexceptions:{
	  		id: 'shipexceptions',
	  		rid: 'e6f8ef8a-68e4-404b-a2be-1809e5b05e76',
	  		name: 'Ship Exceptions'
	  	}
	},
	inboundopenpallets: {
	  	inboundopenpallets:{
	  		id: 'inboundopenpallets',
	  		rid: '8716b7ea-4baa-437f-bad3-95d7f8af8fc5',
	  		name: 'Inbound Open Pallets',
	  		refresh: 30
	  	}
	  },
	binfillrate: {
	  	binfillrate:{
	  		id: 'binfillrate',
	  		rid: 'e46b2373-196a-453d-b7bd-8b694beaabb4',
	  		name: 'Bin Fill Rate',
	  		refresh: 30
	  	}
	  },
	openreplentasks: {
	  	openreplentasks:{
	  		id: 'binfillrate',
	  		rid: '1e4874f3-ac81-4f0f-ab78-e5e1097947cb',
	  		name: 'Open Replen Tasks',
	  		refresh: 30
	  	}
	  }
}
				

module.exports = reportList;