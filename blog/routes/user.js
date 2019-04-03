const express = require("express");
const UserModel = require('../models/users.js');

const router = express.Router();


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
				password
			})
			.then(user=>{
				result.data = user;
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


module.exports = router;