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
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/14000000000.png?width=80&height=80',
			name:'米家激光投影电视'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/TV4A-32.png?width=80&height=80',
			name:'小米电视4A 32英寸'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/TV4A-43QC.png?width=80&height=80',
			name:'小米电视4A 43英寸青春版'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/TV4A-50.png?width=80&height=80',
			name:'小米电视4A 50英寸'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/cn-index/55120120.png?width=80&height=80',
			name:'小米电视4A 55英寸'
		},
		{
			src:'https://i1.mifile.cn/f/i/g/2015/TV4A-58-x.png?width=80&height=80',
			name:'小米电视4A 58英寸'
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
	var oFocusTab = document.querySelector('.home-one-left-nav');
	var oConceal = document.querySelector('.conceal');
	for(var i = 0;i<aTab.length;i++){
			aTab[i].index = i;
		aTab[i].onmouseenter = function(){
			oConceal.style.width = 936 + 'px';
			focus(this.index);
		}
	}
	function focus(index){
		var Data = FocusTabData[index];
		var html = '';
		html = '<ul>';
		for(var i = 0;i<Data.length;i++){			
			html +=	'<li>';
			html +=		'<div>'
			html +=			'<a href="">'
			html +=				'<img src="'+Data[i].src+'" alt="">'
			html +=			'</a>'
			html +=		'</div>'
			html +=		'<span>'+Data[i].name+'</span>'
			html +=	'</li>'
		}
		html+='</ul>';
		oConceal.innerHTML = html;
	}
	oFocusTab.onmouseleave = function(){
		oConceal.style.width = 0;
	}
}
//轮播图
function Carousel(opation){
	//1.罗列属性
	this.oBox = document.getElementById(opation.id);
	this.aImg = opation.aImg;
	this.width = opation.width;
	this.height = opation.height;
	this.delayTime = opation.delayTime;
	this.oUl = null;
	this.oLi = null;
	this.oImg = null;
	this.oBottomUl = null;
	this.oBottomLi = null;
	this.now = 0;
	this.timer = 0;
	//ul和li、img的生成，插入
	this.init();
	this.leftRightButton();
	this.bottomButton();
	//绑定事件
	this.bindEvent();
	this.autoRun();
}
Carousel.prototype.init = function(){
	this.oBox.style.width = this.width + 'px';
	this.oBox.style.height = this.height + 'px';
	this.oBox.style.position = 'relative';
	//生成ul
	this.oUl = document.createElement('ul');
	//下面三个按钮盒子
	this.oBottomUl = document.createElement('ul');
	for(var i = 0; i < this.aImg.length;i++){
		//生成li和img
		this.oLi = document.createElement('li');
		this.oImg = document.createElement('img');
		//下面的三个按钮
		this.oBottomLi = document.createElement('li');
		this.oBottomLi.className = 'common';
		this.oBottomUl.appendChild(this.oBottomLi);
		//把img插入到li
		this.oLi.appendChild(this.oImg);
		//把li插入到ul
		this.oUl.appendChild(this.oLi);
		//设置img的属性
		this.oImg.src = this.aImg[i];
		this.oLi.style.width = this.width + 'px';
		this.oLi.style.height = this.height +'px';
		this.oImg.style.width = '100%';
		this.oImg.style.height = '100%';
		this.oLi.style.position = 'absolute';
		this.oLi.style.left = 0;
		this.oLi.style.top = 0;
		//把第一张li的zindex提高
		if(i == 0){
			this.oUl.children[i].style.zIndex = 50;
			this.oBottomUl.children[i].style.borderColor = '#000';	
		}
	}
	//把ul插入的盒子里
	this.oBox.appendChild(this.oUl);
	this.oBox.appendChild(this.oBottomUl);
}
Carousel.prototype.leftRightButton = function(){
	//生成左右按钮
	this.oLeftButton = document.createElement('span');
	this.oRightButton = document.createElement('span');
	//设置按钮属性
	this.oLeftButton.className = 'active';
	this.oLeftButton.style.left = 0;
	this.oRightButton.className = 'active';
	this.oRightButton.style.right = 0;
	this.oLeftButton.innerHTML = '&lt;';
	this.oRightButton.innerHTML = '&gt;';
	//左右按钮插入到盒子
	this.oBox.appendChild(this.oLeftButton);
	this.oBox.appendChild(this.oRightButton);
}
Carousel.prototype.bottomButton = function(){
	this.oBottomUl.style.position = 'absolute';
	this.oBottomUl.style.left = '50%';
	this.oBottomUl.style.marginLeft = -this.oBottomUl.offsetWidth * 0.5 + 'px';
	this.oBottomUl.style.bottom = 10 + 'px';
	this.oBottomUl.style.zIndex = 50;
}
Carousel.prototype.bindEvent = function(){
	var _this = this;
	this.oRightButton.onclick = function(){
		_this.now++;
		if(_this.now >= _this.aImg.length){
			_this.now = 0;
		}
		_this.tab();
	}
	this.oLeftButton.onclick = function(){
		_this.now--;
		if(_this.now < 0){
			_this.now = _this.aImg.length - 1;
		}
		_this.tab();
	}
	for(var i = 0; i<this.oBottomUl.children.length;i++){
		_this.oBottomUl.children[i].index = i;
		this.oBottomUl.children[i].onclick = function(){
			_this.now = this.index;
			_this.tab();
		}			
	}
}
Carousel.prototype.tab = function(){
	for(var i = 0;i<this.aImg.length;i++){
		this.oUl.children[i].style.zIndex = 0;
		this.oUl.children[i].style.opacity = 0.3;
		this.oBottomUl.children[i].style.borderColor = 'rgba(0,0,0,0.5)';
	}
	this.oUl.children[this.now].style.zIndex = 50;
	animate(this.oUl.children[this.now],{opacity:100});
	this.oBottomUl.children[this.now].style.borderColor = '#fff';
}
Carousel.prototype.autoRun = function(){
	var _this = this;
	this.timer = setInterval(this.oRightButton.onclick,this.delayTime);
	this.oBox.onmouseover = function(){
		clearInterval(_this.timer);
	}
	this.oBox.onmouseout = function(){
		_this.timer = setInterval(_this.oRightButton.onclick,_this.delayTime);
	}
}
new Carousel({
	id:"box",
	aImg:["images/big1.jpg","images/big2.jpg","images/big3.jpg"],
	width:1224,
	height:460,
	delayTime:3000
});

