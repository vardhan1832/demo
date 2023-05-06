const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add product</button></form>');
  
})
router.post('/product',(req,res,next)=>{
    console.log(req.body.title)
    console.log(req.body.size)
    res.redirect('/shop')
})

module.exports = router;