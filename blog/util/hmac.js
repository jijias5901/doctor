const crypto = require("crypto");

//1.根据算法生成hash对象
// const hash = crypto.createHash('sha256');
//2.添加明文
// hash.update('test1');
//3.生成密文
// console.log(hash.digest('hex'));

//1.根据算法生成hmac对象
// const hmac = crypto.createHmac('sha256','asdfcasdf');//第二个参数是盐
//2.添加明文
// hmac.update('test1');
//3.生成密文
// console.log(hmac.digest('hex'));

module.exports = (str)=>{
	const hmac = crypto.createHmac('sha256','asdfcasdf');
	hmac.update('test1');
	return hmac.digest('hex');
}