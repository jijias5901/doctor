//获取购物车
var oShop = document.getElementById('nav-right-shop');
var oShoping = document.querySelector('.nav-right');
var oLoader = document.querySelector('.loader');
var oEmptyCart = document.querySelector('.empty-cart');
var oNavRightShoping = document.querySelector('.nav-right-shoping');
//获取导航下拉菜单
var aHeadNavLi = document.querySelectorAll('.header-nav li');
var oNavMenu = document.querySelector('.header-nav-menu');
var aNavMenuLi = document.querySelectorAll('.header-nav-menu li');




//购物车显示和隐藏
oShoping.onmouseenter = function(){
	oNavRightShoping.style.backgroundColor = '#fff';
	oLoader.style.display = 'block';
	animate(oShop,{height:100},false,function(){
		oLoader.style.display = 'none';
		oEmptyCart.style.display = 'block';
	});
}
oShoping.onmouseleave = function(){
	oNavRightShoping.style.backgroundColor = '#424242';
	animate(oShop,{height:0},false,function(){
		oLoader.style.display = 'none';
		oEmptyCart.style.display = 'none';
	});
	
}
//导航下拉菜单



