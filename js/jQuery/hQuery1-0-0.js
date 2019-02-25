
(function(window){
	function hQuery(selector){
		return new hQuery.fn.init(selector);
	}


	hQuery.fn = hQuery.prototype = {
		constructor:hQuery,
		init:function(selector){
			if(typeof selector == "function" ){
				window.addEventListener = ("DOMContertLoaded",selector);
				this[0] = document;
				this.length = 1;
				return this;
			}
			else if(!selector){
				return this;
			}
			else if(hQuery.isString(str)){
				
			}			
		}
	}
	hQuery.isString = function(str){
		return /<[^<>]>/.test(str);
	}



	hQuery.fn.init.prototype = hQuery.fn;

	window.hQuery = window.$ = hQuery;
})(window);