const express = require("express");
const UserModel = require('../models/users.js');
const hmac = require('../util/hmac.js');

const router = express.Router();

//注册
router.post('/register',(req,res)=>{
	// console.log(req.body)
	const {username,password} = req.body;
	const result = {
		status:0,//成功
		message:''
	}
	//1.检查是否已经注册过、
	UserModel.findOne({username})
	.then(user=>{
		if(user){//用户名已存在
			result.status = 10;
			result.message = '用户名已存在';
			res.json(result);
		}else{//插入成功
			UserModel.insertMany({
				username,
				password:hmac(password),
				// isAdmin:true
			})
			.then(user=>{
				res.json(result);
			})
			.catch(err=>{
				throw err;
			})
		}
	})
	.catch(err=>{//服务器发生错误
		result.status = 10;
		result.message = '服务器端错误,请稍后再试';
		res.json(result);
	})
})

//登录
router.post('/login',(req,res)=>{
	const {username,password} = req.body;
	const result = {
		status:0,//成功
		message:''
	}
	//1.检查用户名和密码是否正确
	UserModel.findOne({username,password:hmac(password)},'-password -__v')
	.then(user=>{
		if(user){//登录成功
			result.data = user;
			// req.cookies.set('userInfo',JSON.stringify(user));
			req.session.userInfo = user;//生成session
			res.json(result);
		}else{//插入成功
			result.status = 10;
			result.message = '用户名或密码错误';
			res.json(result);
		}
	})
	.catch(err=>{//服务器发生错误
		result.status = 10;
		result.message = '服务器端错误,请稍后再试';
		res.json(result);
	})
})

//退出登录
router.get('/logout',(req,res)=>{
	const result = {
		status:0,
		message:''
	}
	req.session.destroy();//销毁session
	res.json(result);
})
module.exports = router;