function Tob(){
	var sty = document.getElementById('box');
	sty.style.width = '200px';
	sty.style.height = '200px';
	sty.style.background = 'red';
}
var sty = document.getElementById('box');
sty.onclick = Tob;
function To(){
	var sty = document.getElementById('box');
	sty.style.width = '100px';
	sty.style.height = '100px';
	sty.style.transtion = '';
	sty.style.background = 'skyblue';
}
var sty = document.getElementById('box');
sty.onmouseout = To;