
const EventEmitter = require("events");

class Emitter extends EventEmitter{

}

let emitter = new Emitter();

emitter.on("test",()=>{
	console.log("hello");
})

emitter.emit("test")
