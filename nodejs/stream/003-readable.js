
const {Readable} = require("stream");

class MyReadable extends Readable{
	constructor(){
		super();
		this.index = 0;
	}

	_read(){
		
	}
}