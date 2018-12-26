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
/*
<ul>
	<li>
		<div>
			<a href="">
				<img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix3-80.png?width=80&height=80" alt="">
			</a>
		</div>
		<span>小米MIX 3</span>
	</li>
	<li>
		<div>
			<a href="">
				<img src="https://i1.mifile.cn/f/i/g/2015/cn-index/qingchun-80.png?width=80&height=80" alt="">
			</a>
		</div>
		<span>小米8 青春版</span>									
	</li>
	<li>
		<div>
			<a href="">
				<img src="https://i1.mifile.cn/f/i/g/2015/cn-index/pingmu-80.png?width=80&height=80" alt="">
			</a>
		</div>
		<span>小米8 屏幕指纹版</span>									
	</li>
	<li>
		<div>
			<a href="">
				<img src="https://i1.mifile.cn/f/i/g/2015/cn-index/m8-80.png?width=80&height=80" alt="">
			</a>
		</div>
		<span>小米8</span>									
	</li>
	<li>
		<div>
			<a href="">
				<img src="https://i1.mifile.cn/f/i/g/2015/cn-index/m8se-80.png?width=80&height=80" alt="">
			</a>
		</div>
		<span>小米8 SE</span>
	</li>
	<li>
		<div>
			<a href="">
				<img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix2s80-80white.png?width=80&height=80" alt="">
			</a>
		</div>
		<span>小米MIX 2S</span>
	</li>	
</ul>
*/

//模拟焦点选项卡数据
var FocusTabData = [
	[
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/mix3-80.png?width=80&height=80',
			name:'小米MIX 3'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/qingchun-80.png?width=80&height=80',
			name:'小米8 青春版'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/pingmu-80.png?width=80&height=80',
			name:'小米8 屏幕指纹版'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/m8-80.png?width=80&height=80',
			name:'小米8'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/m8se-80.png?width=80&height=80',
			name:'小米8 SE'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/mix2s80-80white.png?width=80&height=80',
			name:'小米MIX 2S'
		}
	],
	[
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/mix3-80.png?width=80&height=80',
			name:'小米MIX 3'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/qingchun-80.png?width=80&height=80',
			name:'小米8 青春版'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/pingmu-80.png?width=80&height=80',
			name:'小米8 屏幕指纹版'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/m8-80.png?width=80&height=80',
			name:'小米8'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/m8se-80.png?width=80&height=80',
			name:'小米8 SE'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/mix2s80-80white.png?width=80&height=80',
			name:'小米MIX 2S'
		}
	],
]






//调用函数
handleCart();
handleNav();
handleFocusTab();


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
			oBlock();
			//调用模拟数据
			database(this.index);
		}
		aheaderNavLi[i].onmouseleave = function(){
			oNone();	
		}	
	}
	oheaderNavMenu.onmouseenter = function(){
		oBlock();
	}
	oheaderNavMenu.onmouseleave = function(){
		oNone();
	}
	function oBlock(){
		clearInterval(timer);
		oheaderNavMenu.style.borderTop = '1px solid #ddd';
		animate(oheaderNavMenu,{height:200},true,function(){	
			oheaderNavMenu.style.overflow = 'visible';
		});
	}
	function oNone(){
		timer = setInterval(function(){
			oheaderNavMenu.style.overflow = 'hidden';
			animate(oheaderNavMenu,{height:0},true,function(){
				oheaderNavMenu.style.borderTop = 'none';
			});
		},300);
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
//焦点选项卡
function handleFocusTab(){
	var aTab = document.querySelectorAll('.home .home-one-left .home-one-left-nav li');
	
}

