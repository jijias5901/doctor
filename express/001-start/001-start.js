const express = require('express');

const app = express();

app.use("/static",express,static("pubic"));
// app.get('/', (req, res) => res.send('Hello World!'));


app.get("",(req,res)=>{

})

app.listen(3000, () => console.log('app listening on port 3000!'));
