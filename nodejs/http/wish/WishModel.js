const fs = require('fs');
const util = require('util');

const filePath = './data/data.json';
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const arrColor = ["#472","#fa2","#f0a","#a80","#e0f","#d96","#fcb","#f23"];

const getRandom = (min,max)=> {	
	return Math.round(min + (max-min)*Math.random());
}

async function add(options){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	//2.添加数据到原有的数据中
	options.id = Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0');
	options.color = arrColor[getRandom(0,arrColor.length-1)];
	arr.push(options);
	let strArr = JSON.stringify(arr);
	//3.保存
	await writeFile(filePath,strArr);

	return options;
	
}
async function getAll(){
	let data = await readFile(filePath);
	let arr = JSON.parse(data);	
	return arr;
}

async function remove(id){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	//2.过滤
	let newArr = arr.filter(val=>{
		return val['id'] != id;
	})	
	let strArr = JSON.stringify(newArr);
	//3.保存
	await writeFile(filePath,strArr);
	return newArr;	
}

module.exports = {
	add,
	getAll,
	remove
}