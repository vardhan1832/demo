const path = require('path')
const rootDir = require('../util/path')

exports.getAddProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','addprod.html'));
}
exports.postAddProducts = (req,res,next)=>{
    console.log(req.body.title)
    console.log(req.body.size)
    res.redirect('/shop')
}
exports.getShop = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
}
