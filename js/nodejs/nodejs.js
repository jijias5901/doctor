var http = require('http');
var fs   = require('fs');
// var hostname = '127.0.0.1';
// var port = 3000;

var server = http.createServer(function(req, res){
	var urlStr = req.url;
	if(urlStr == '/favicon.ico'){
		res.end('/favicon.ico');
	}
	var filePath = './' + urlStr;
	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data);
		}else{
			res.statusCode = 404;
			res.end('node found');
		}
	})
});

server.listen(3000,'127.0.0.1',function(){
  console.log('Server running at http://127.0.0.1:3000');
});