//模拟下拉菜单数据
var objData = [
	[
		{
			src:"images/p1.jpg",
			name:"小米Ms 5",
			price:"2050 元",
			tag:"新品"
		},
		{
			src:"images/p1.jpg",
			name:"小米Ms 5",
			price:"2050 元",
			tag:"新品"
		}
	],
	[
		{
			src:"images/p2.jpg",
			name:"小米Ms 5",
			price:"2050 元",
			tag:"新品"
		},
		{
			src:"images/p2.jpg",
			name:"小米Ms 5",
			price:"2050 元",
			tag:"新品"
		}
	]
]








handleCart();
handleNav();



//获取购物车
function handleCart(){
	var oShop = document.getElementById('nav-right-shop');
	var oShoping = document.querySelector('.nav-right');
	var oLoader = document.querySelector('.loader');
	var oEmptyCart = document.querySelector('.empty-cart');
	var oNavRightShoping = document.querySelector('.nav-right-shoping');
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
}
//导航下拉菜单
function handleNav(){
	var aheaderNavLi = document.querySelectorAll('.header .header-nav li');
	var oheaderNavMenu = document.querySelector('.header .header-nav-menu');
	var aheaderNavMenuLi = document.querySelectorAll('.header .header-nav-menu li');
	var oCenter = document.querySelector('.header-nav-menu .center');
	var timer = 0;
	//显示和隐藏下拉菜单
	for(var i = 0;i < aheaderNavLi.length;i++){
		aheaderNavLi[i].index = i;
		aheaderNavLi[i].onmouseenter = function(){
			oheaderNavMenu.style.borderTop = '1px solid #ddd';
			animate(oheaderNavMenu,{height:200},true,function(){
				oheaderNavMenu.style.overflow = 'visible';
			});
			//调用模拟数据
			database(this.index);
		}
		aheaderNavLi[i].onmouseleave = function(){
			oheaderNavMenu.style.overflow = 'hidden';
			animate(oheaderNavMenu,{height:0},true,function(){
				oheaderNavMenu.style.borderTop = 'none';
			});
		}	
	}
	oheaderNavMenu.onmouseenter = function(){
		oheaderNavMenu.style.overflow = 'visible';
		oheaderNavMenu.style.borderTop = '1px solid #ddd';
	}
	oheaderNavMenu.onmouseleave = function(){
		oheaderNavMenu.style.overflow = 'hidden';
		oheaderNavMenu.style.borderTop = 'none';
	}
	//模拟数据
	function database(index){
		var aData = objData[index];
		var html = '';
		html += '<ul>';
		for(var i = 0;i < aData.length;i++){
			html+='<li>';
			html+=	'<div class="img-box">';
			html+=		'<a href="#">';
			html+=			'<img src="'+aData[i].src+'" alt="">';
			html+=		'</a>';
			html+=	'</div>';
			html+=	'<p class="product-name">'+aData[i].name+'</p>';
			html+=	'<p class="product-price">'+aData[i].price+'</p>';
			html+=	'<span class="tag">'+aData[i].tag+'</span>';
			html+='</li>';
		}
		html += '</ul>'
		oCenter.innerHTML = html;
		console.log(html);
	}
}


