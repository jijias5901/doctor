const EventEmitter = require("events");

class Emitter extends EventEmitter{

}

let emitter = new Emitter();
emitter.setMaxListeners(11);
emitter.on("test",()=>{
	console.log("1::hello");
})

emitter.on("test",()=>{
	console.log("2::hello");
})
emitter.on("test",()=>{
	console.log("3::hello");
})
emitter.on("test",()=>{
	console.log("4::hello");
})
emitter.on("test",()=>{
	console.log("5::hello");
})
emitter.on("test",()=>{
	console.log("6::hello");
})
emitter.on("test",()=>{
	console.log("7::hello");
})
emitter.on("test",()=>{
	console.log("8::hello");
})
emitter.on("test",()=>{
	console.log("9::hello");
})
emitter.on("test",()=>{
	console.log("10::hello");
})

emitter.on("test",()=>{
	console.log("11::hello");
})


emitter.emit("test")