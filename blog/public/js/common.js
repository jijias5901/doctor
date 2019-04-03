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
		var errMsg = '';
		var $err = $register.find('.err');
		if(!/^[a-z][0-9a-z_]{2,9}$/i.test(username)){
			errMsg = '用户名以字母开头,包含数字下划线的3-10位字符';
		}
		else if(!/^\w{3,8}$/.test(password)){
			errMsg = '密码3-6位字符';
		}
		else if(password != repassword){
			errMsg = '两次密码输入不一致';
		}
		
		if(errMsg){
			$err.html(errMsg);
			return;
		}else{//3.向服务器发送数据
			$err.html('');
			$.ajax({
				url:'/user/register',
				type:"post",
				dataType:"json",
				data:{
					username:username,
					password:password
				}
			})
			.done(function(rusult){
				console.log(rusult);
			})
			.fail(function(err){
				$err.html('请求失败,请稍后再试');
			})
		}		
	})
})(jQuery);