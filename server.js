const express = require('express');
const server = express();

server.use((req,res,next)=>{
    res.send("<h1>'Hello Express'<h1>");
    //res.send({text: '111'})
    next();
})
server.use((req,res,next)=>{
    console.log('hiiii')
})

server.listen(4001);
