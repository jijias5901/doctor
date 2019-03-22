const http = require("http");
const url = require("url");
const querystring = require("querystring");


const server = http.createServer((req,res)=>{


	res.end("kuazhu");
})


server.listen(3000,"127.0.0.1",()=>{
	console.log("server is running at http://127.0.0.1:3000");
})