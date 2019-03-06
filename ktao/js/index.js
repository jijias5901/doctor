;(function($){
	$(".dropdown").dropdown({
		delay:200,
	});
	$(".dropdown").on("dropdown-show dropdown-shown dropdown-hide dropdown-hidden",function(ev){
		console.log("!::::")
	});
})(jQuery);