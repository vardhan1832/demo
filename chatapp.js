const express = require('express');
const app = express();
const fs = require('fs')
const bodyParser = require('body-parser');
const data = []
let arr;
app.use(bodyParser.urlencoded({extended: false}))

app.use('/login',(req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)"  action="/" method="GET">

	<input id="username" type="text" name="title">

	<button type="submit">add</button>

</form>`);
})
app.get('/',(req,res,next)=>{
    fs.readFile('ex.txt', (err,data)=>{
        if(err) throw err;
        arr =JSON.parse(data)
        res.send(`${arr}<form onsubmit="document.getElementById('user').value=localStorage.getItem('username')" action="/" method="POST">
        <input type="text" id="message" name="message">
        <input type="hidden" id="user" name="user">
        <button type="submit">send chat</button>`) 
    })  
})

app.post('/',(req,res,next)=>{
   data.push(`{${req.body.user}: ${req.body.message}}`);
   fs.writeFile( 'ex.txt',JSON.stringify(data)  , nxt => {
         res.redirect('/');
   });
})

app.listen(3000);