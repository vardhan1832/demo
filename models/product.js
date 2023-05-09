const fs= require('fs')
const path = require('path')
const rootDir = require('../util/path')
const p = path.join(rootDir,'data' , 'products.json')

const readProductsFromFile = (cb)=>{
    fs.readFile(p,(err,filecontect)=>{
        if(err){
          cb([])
        }else{
            cb(JSON.parse(filecontect));
        }   
    })
}
module.exports=class Product{
    constructor(t,a){
        this.title = t;
        this.size = a;
    }
    save(){
        this.id = Math.random().toString();
      readProductsFromFile(arr=>{         
            arr.push(this);
            fs.writeFile(p,JSON.stringify(arr),err=>{
                console.log(err);
            });
      });
    }
    static fetchall(cb){
        readProductsFromFile(cb);
    }
}