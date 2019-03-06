;(function($){

function DropDown($elem,options){
	this.$elem = $elem;
	this.options = options;
	this.$layer = $elem.find(".dropdown-layer");
	this.activeClass = $elem.data("active")+"-active";
	this.timer = 0;


	this.init();
}

DropDown.prototype = {
	constructor:DropDown,
	init:function(){
		//初始化
		this.$layer.showHide(this.options);
		//锦亭显示隐藏事件
		this.$layer.on("show shown hide hidden",function(ev){
			this.$elem.trigger("dropdown-"+ev.type);
		}.bind(this));
		//绑定事件 判断是click还是hover
		if(this.options.eventName == "click"){
			this.$elem.on("click",function(ev){
				ev.stopPropagation();
				this.show();
			}.bind(this))
			$(document).on("click",$.proxy(this.hide,this));
		}else{
			this.$elem.hover($.proxy(this.show,this),$.proxy(this.hide,this));
		}	
	},
	show:function(){
		//处理快速划过
		if(this.options.delay){
			timer = setTimeout(function(){
				this.$layer.showHide("show");
				this.$elem.addClass(this.activeClass);
			}.bind(this),this.options.delay)
		}else{
			this.$layer.showHide("show");
			this.$elem.addClass(this.activeClass);
		}
		
	},
	hide:function(){
		clearTimeout(this.timer);
		this.$layer.showHide("hide");
		this.$elem.removeClass(this.activeClass);
	}
}



DropDown.DEFAULTS = {
	js:true,
	mode:"slideDownUp",
	delay:0,
	eventName:""
}

$.fn.extend({
	dropdown:function(options){		
		return this.each(function(){
			var $elem = $(this);
			var dropdown = $elem.data("dropdown");
			if(!dropdown){
				options = $.extend({},DropDown.DEFAULTS,options);
				dropdown = new DropDown($elem,options);
				$elem.data("dropdown",dropdown);
			}
			if(typeof dropdown[options] == "function"){
				dropdown[options]();
			}
		})
	}

})

})(jQuery);