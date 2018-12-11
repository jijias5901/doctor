function animate(obj,attr,target){
		clearInterval(obj.Timer);
		iSpeed = 0;
		var 
		obj.Timer = setInterval(function(){
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current = Math.round(current * 100);
			}
			if(current > target){
				iSpeed = -10;
			}else{
				iSpeed = 10;
			}
			if(Math.abs(target - current) < Math.abs(iSpeed)){
				if(attr == 'opacity'){
					obj.style.opacity = target / 100;
				}else{
					obj.style[attr] = target + 'px';
				}
				clearInterval(obj.Timer);
			}else{
				if(attr == 'opacity'){
					obj.style.opacity = (current + iSpeed)/100; 
				}else{
					obj.style[attr] = current + iSpeed + 'px';
				}
			}
		},30)
}


function getScrollTop(){
	return windou.pageYOffset || document.documentElement.scrollTop
}