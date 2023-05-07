const express = require('express');
const server = express();
const path = require('path');

const errorRoute = require('./controller/error');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contact')

const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname,'public')))


server.use('/admin',adminRoutes);
server.use('/shop',shopRoutes);
server.use(contactRoutes);
server.use(errorRoute.err)


server.listen(4001);
