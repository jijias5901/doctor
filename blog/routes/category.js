const express = require("express");
const CategoryModel = require('../models/Category.js');
const pagination = require('../util/pagination.js');

const router = express.Router();

//权限验证
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请用管理员账号登录</h1>');
	}
})

//显示分类列表
router.get('/',(req,res)=>{
	const options = {
		page:req.query.page,
		model:CategoryModel,
		query:{},
		projection:'-__v',
		sort:{order:1}
	};
	pagination(options)
	.then(data=>{
		res.render('admin/category_list',{
			userInfo:req.userInfo,
			categories:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/category'
		})
	})
})

//显示添加分类页面
router.get('/add',(req,res)=>{
	res.render('admin/category_add',{
		userInfo:req.userInfo
	});
})

//处理添加分类
router.post('/add',(req,res)=>{

	const { name,order } = req.body;
	CategoryModel.findOne({name})
	.then(category=>{
		if(category){//有同名的存在
			res.render("admin/error",{
				userInfo:req.userInfo,
				message:'添加分类失败,分类已存在'
			})
		}else{
			CategoryModel.insertMany({name,order})
			.then(category=>{
				res.render('admin/success',{
					userInfo:req.userInfo,
					message:'添加分类成功',
					url:'/category'
				})
			})
			.catch(err=>{
				throw err;
			})			
		}
	})
	.catch(err=>{
		res.render("admin/error",{
			userInfo:req.userInfo,
			message:'数据库错误,请稍后再试'
		})
	})
		
})

//显示编辑页面
router.get('/edit/:id',(req,res)=>{
	const { id } = req.params
	CategoryModel.findById(id)
	.then(category=>{
		res.render("admin/category_edit",{
			userInfo:req.userInfo,
			category
		})
	})
})

//处理编辑
router.post('/edit',(req,res)=>{
	const { id,name,order } = req.body;
	
	CategoryModel.findById(id)
	.then(category=>{
		if(category.name == name && category.order == order){
			res.render("admin/error",{
				userInfo:req.userInfo,
				message:'请修改后在提交'
			})
		}else{
			CategoryModel.findOne({name:name,_id:{$ne:id}})
			.then(newCategory=>{
				if(newCategory){
					res.render("admin/error",{
						userInfo:req.userInfo,
						message:'修改分类失败,分类已存在'
					})
				}else{
					CategoryModel.update({_id:id},{name,order})
					.then(result=>{
						res.render('admin/success',{
							userInfo:req.userInfo,
							message:'修改分类成功',
							url:'/category'
						})
					})
					.catch(err=>{
						throw err;
					})					
				}
			})
			.catch(err=>{
				throw err;
			})
		}
	})
	.catch(err=>{
		res.render("admin/error",{
			userInfo:req.userInfo,
			message:'修改分类失败,数据库错误,请稍后再试'
		})
	})
})


module.exports = router;