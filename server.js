const express = require('express');
const server = express();
const path = require('path');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contact')

const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname,'public')))


server.use('/admin',adminRoutes);
server.use('/shop',shopRoutes);
server.use(contactRoutes);

server.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


server.listen(4001);
