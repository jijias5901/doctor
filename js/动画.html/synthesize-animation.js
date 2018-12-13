function animate(obj,options,isLinear,fnEnd){
	clearInterval(obj.Timer);
	iSpeed = 0;
	obj.Timer = setInterval(function(){
		var isStopAll = true;
		for(var attr in options){
			var whether = false;//是否关闭定时器
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current = Math.round(current * 100);
			}
			if(isLinear){
				//匀速
				if(current > options[attr]){	
					iSpeed = -10;
				}else{
					iSpeed = 10;
				}
				if(Math.abs(options[attr] - current) < Math.abs(iSpeed)){
					if(attr == 'opacity'){
						obj.style.opacity = options[attr] / 100;
					}else{
						obj.style[attr] = options[attr] + 'px';
					}
					whether = true;
				}else{
					isStopAll = false;
				}
			}else{
				//减速
				iSpeed = (options[attr] - current)/10;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(!iSpeed){
					whether = true;
				}else{
					isStopAll = false;
				}
			}
			if(!whether){
				if(attr == 'opacity'){
					obj.style.opacity = (current + iSpeed)/100;	
				}else{
					obj.style[attr] = current + iSpeed +'px';
				}
			}
		}
		if(isStopAll){
			clearInterval(obj.Timer);
			typeof fnEnd == 'function' && fnEnd();
		}
	},30)
}




function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}