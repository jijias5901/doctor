/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   TomChen
* @Last Modified time: 2019-03-31 10:23:04
*/
;(function($){
	var $login = $('#login');
	var $register = $('#register');
	//1.登录和注册面板的切换
	//1.1 从登录面板到注册面板
	$('#go-register').on('click',function(){
		$login.hide()
		$register.show()
	})
	//1.2 从注册面板到登录面板
	$('#go-login').on('click',function(){
		$register.hide()
		$login.show()
	})

	//用户注册

	$('#sub-register').on('click',function(){
		//1.获取表单数据
		let username = $register.find('[name="username"]').val();
		let password = $register.find('[name="password"]').val();
		let repassword = $register.find('[name="repassword"]').val();

		//2.验证表单数据
		if(/^[a-z][0-9_]{5,9}$/i)

		
		//3.向服务器发送数据



		$.ajax({
			url:''
		})
	})



})(jQuery);