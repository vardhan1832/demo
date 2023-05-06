const express = require('express');
const server = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({extended: false}));


server.use('/admin',adminRoutes);
server.use('/shop',shopRoutes);

server.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})


server.listen(4001);
