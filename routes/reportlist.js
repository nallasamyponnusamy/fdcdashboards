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
	  },
	transportationdss: {
	  	lateboxes:{
	  		id: 'lateboxes',
	  		rid: '708f24e6-a672-4de9-a529-9f025dc1ecdb',
	  		name: 'Late Boxes',
	  		refresh: 30
	  	},
	  	plantdispatch:{
	  		id: 'plantdispatch',
	  		rid: 'c89fa47f-5e99-45b8-a608-d0f15583a28e',
	  		name: 'Plant Dispatch',
	  		refresh: 30
	  	},
	  	undeliveredboxes:{
	  		id: 'undeliveredboxes',
	  		rid: 'd64c0d1c-c120-4ffb-a554-805fc22cc878',
	  		name: 'Undelivered Boxes',
	  		refresh: 30
	  	},
	  	opscenter:{
	  		id: 'opscenter',
	  		rid: '7e0d63cb-a498-4ddb-86a9-cf05d7227c25',
	  		name: 'Ops Center',
	  		refresh: 30
	  	},
	  	transportationdispatch:{
	  		id: 'transportationdispatch',
	  		rid: 'd044cceb-5220-40be-b06d-e2d106323ced',
	  		name: 'Transportation Dispatch',
	  		refresh: 30
	  	}
	  },
	  postwavemonitor: {
	  	postwavemonitor:{
	  		id: 'postwavemonitor',
	  		rid: 'bc184bbb-bf69-490a-8b78-82a88a2f3343',
	  		name: 'Post Wave Monitor',
	  		refresh: 30
	  	}
	  },
	  startofproduction: {
	  	startofproduction:{
	  		id: 'startofproduction',
	  		rid: 'ffc4834b-9251-46b0-aa5f-1e9530660070',
	  		name: 'Start Of Production',
	  		refresh: 30
	  	}
	  },
	  pendingpicks: {
	  	pendingpicks:{
	  		id: 'pendingpicks',
	  		rid: '5220edda-128e-44c2-9d6d-6a2012ded56f',
	  		name: 'Pending Picks',
	  		refresh: 30
	  	}
	  },
	  prewavemonitor: {
	  	prewavemonitor:{
	  		id: 'prewavemonitor',
	  		rid: '7bf95e7c-d60d-4022-8962-a81c6e94fc58',
	  		name: 'Pre-wave Monitor',
	  		refresh: 30
	  	}
	  },
	  intradayoperations: {
	  	intradayoperations:{
	  		id: 'intradayoperations',
	  		rid: '7defe7aa-1a2a-405a-bff7-2fb8acf34564',
	  		name: 'Intraday Operations',
	  		refresh: 30
	  	}
	  }
}
				

module.exports = reportList;