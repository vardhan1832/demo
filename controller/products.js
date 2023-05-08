const path = require('path')
const rootDir = require('../util/path')
const Product = require('../models/product')

exports.getAddProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','addprod.html'));
}
exports.postAddProducts = (req,res,next)=>{
    const product = new Product(req.body.title, req.body.size);
    product.save();
    res.redirect('/shop')
}
exports.getShop = (req,res,next)=>{
    Product.fetchall((pro)=>{
        console.log(pro);
    });
    res.sendFile(path.join(rootDir,'views','shop.html'))
}
