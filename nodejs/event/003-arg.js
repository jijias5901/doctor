
const EventEmitter = require("events");

class Emitter extends EventEmitter{

}

let emitter = new Emitter();
/*
emitter.on("test",()=>{
	console.log("hello");
})
*/
emitter.on("test",(arg1,arg2)=>{
	console.log(arg1,arg2);
})

emitter.emit("test","hello","world");
