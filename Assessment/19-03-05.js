var js = {
	set:function($elem,obj){
		$elem.show();
		if(obj){
			setWHB($elem,obj);	
		};
		$elem.on("click",function(){
			
		})
	}
}

function setWHB($elem,obj){
		$elem.css(obj);
}