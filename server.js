const express = require('express');
const server = express();

const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({extended: false}));

server.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add product</button></form>');
  
})
server.post('/product',(req,res,next)=>{
    console.log(req.body.title)
    console.log(req.body.size)
    res.redirect('/')
})
server.use('/',(req,res,next)=>{
    res.send('<h1>Home page</h1>')
})
server.listen(4001);
