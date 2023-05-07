const express = require('express');
const router = express.Router();
const path = require('path')
const rootDir = require('../util/path')

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','addprod.html'));
  
})
router.post('/product',(req,res,next)=>{
    console.log(req.body.title)
    console.log(req.body.size)
    res.redirect('/shop')
})

module.exports = router;