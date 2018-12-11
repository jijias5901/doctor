function animate(obj,attr,target){
		clearInterval(obj.Timer);
		iSpeed = 0;
		obj.Timer = setInterval(function(){
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current = Math.round(current * 100);
			}
			
			iSpeed = (target - current)/10;//减速
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			

			if(!iSpeed){
				clearInterval(obj.Timer);
			}else{
				if(attr == 'opacity'){
					obj.style.opacity = (current + iSpeed)/100;	
				}else{
					obj.style[attr] = current + iSpeed +'px';
				}
			}
		},30)
}