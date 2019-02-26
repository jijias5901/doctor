
(function(window){
	function hQuery(selector){
		return new hQuery.fn.init(selector);
	}


	hQuery.fn = hQuery.prototype = {
		constructor:hQuery,
		init:function(selector){
			//函数
			if(hQuery.isFunction(selector)){
				window.addEventListener = ("DOMContertLoaded",selector);
				this[0] = document;
				this.length = 1;
			}
			//false
			else if(!selector){
				return this;
			}
			//字符串
			else if(hQuery.isString(selector)){
				//html
				if(hQuery.isHtml(selector)){
					var oDom = document.createElement("div");
					oDom.innerHTML = selector;
					for(var i = 0;i<oDom.children.length;i++){
						this[i] = oDom.children[i];
					}
					this.length = oDom.children.length;
				}
				//选择器
				else{
					var aDom = document.querySelectorAll(selector);
					for(var i = 0;i<aDom.length;i++){
						this[i] = aDom[i];
					}
					this.length = aDom.length;
				}
			}
			//数组
			else if(hQuery.isArray(selector)){
				for(var i = 0;i<selector.length;i++){
					this[i] = selector[i];
				}
				this.length = selector.length;
			}
			//对象
			else{
				this[0] = selector;
				this.length = 1;
			}			
		}
	}
	hQuery.isFunction = function(str){
		return typeof str == "function";
	}
	hQuery.isString = function(str){
		return typeof str == "string" ;
	}
	hQuery.isHtml = function(str){
		return /<[^<>]+>/.test(str);
	}
	hQuery.isArray = function(str){
		return typeof str == "object" && length in str;
	}

	hQuery.fn.init.prototype = hQuery.fn;

	window.hQuery = window.$ = hQuery;
})(window);