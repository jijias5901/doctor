
const http = require("http");
const url = require("url");
const querystring = require("querystring");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req,res)=>{
	
	let reqUrl = url.parse(req.url,true);
	let pathname = reqUrl.pathname;
	console.log(pathname);
	res.end("ok");
})


server.listen(3000,"127.0.0.2",()=>{
	console.log("server is running at http://127.0.0.2:3000");
})