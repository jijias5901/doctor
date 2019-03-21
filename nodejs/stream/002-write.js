

const {Writable} = require("stream");

class MyWritable extends Writable{
	_write(chunk, encoding, callback){
		console.log(chunk);
		console.log(encoding);
		callback();
	}
}

const write = new MyWritable();

write.write("hello","utf-8",()=>{
	console.log("hello");
})