
'use strict';


/**
*	Services that persists and retrieves Info from localStorage
*/


window.app.factory('localStorage', function(){
	var APP_ID =  'ams4u-local-storage';

	// api exposure
	return {
		// return item value
		getB: function(item){
			return JSON.parse(localStorage.getItem(item) || 'false');
		},
		// return item value
		getN: function(item){
			return JSON.parse(localStorage.getItem(item) || '0');
		},
		// return item value
		get: function(item){
			return JSON.parse(localStorage.getItem(item) || '[]');
		},
		set: function(item, value){
			// set item value
			localStorage.setItem(item, JSON.stringify(value));
		}

	};

});

