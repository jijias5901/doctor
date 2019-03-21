
const fs = require("fs");

const fd = fs.readFileSync("./01.txt",{flag:"r"});

console.log(fd);