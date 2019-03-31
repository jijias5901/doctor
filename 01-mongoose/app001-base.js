const mongoose = require('mongoose');

//1.连接数据库服务
mongoose.connect('mongodb://localhost/doctor', {useNewUrlParser: true});


const db = mongoose.connection;

db.on('error', (err)=>{
	console.log("connection error:");
	throw err;
});

db.once('open', function() {
 	console.log("connection successful");
 	//2.定义Schema
 	const UserSchema = new mongoose.Schema({
		name: String,
		age:Number,
		major:String
	});
	//3.生成模型Model
	//3.1第一个参数是指定集合的名称,mongoose会自动变成复数
	//3.2第二个参数指定Schema
	const UserModel = mongoose.model('user', UserSchema);

	//4.用模型操作数据(CURD)

	//4.1插入数据
	/*
	const user = new UserModel({name:"Leo",age:18,major:"Computer"});
	user.save((err,doc)=>{
		if(err){
			console.log("save err::",err);
		}else{
			console.log(doc);
		}
	})
	*/
	//4.2查找数据
	/*
	UserModel.find({},(err,docs)=>{
		if(err){
			console.log("find err::",err);
		}else{
			console.log(docs);
		}
	})
	*/
	//更新数据 update要被废弃 不推荐使用
	/*
	UserModel.updateOne({name:"Leo"},{$set:{age:98}},(err,result)=>{
		if(err){
			console.log("updateOne	 err::",err);
		}else{
			console.log(result);
		}
	})
	*/
	//删除数据
	UserModel.deleteOne({name:"Tom"},(err,result)=>{
		if(err){
			console.log("deleteOne err::",err);
		}else{
			console.log(result);
		}
	})
});