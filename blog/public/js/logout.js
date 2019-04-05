/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   TomChen
* @Last Modified time: 2019-03-13 18:52:43
*/
;(function($){
	//用户退出
	$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout'
		})
		.done(function(result){
			if(result.status == 0){
				window.location.href = '/';
			}else{
				$err.html(result.message);
			}
		})
		.fail(function(err){
			$err.html('请求失败,请稍后再试');
		})
	})
})(jQuery);