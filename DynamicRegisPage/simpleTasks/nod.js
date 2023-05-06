console.log('a');

console.log('b');
function printc(){
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('c');      
        }, 3000)
    })
}
function printd(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('d');
        },1000)
    })
}
async function x(){
    let c = await printc();
    console.log(c);
    let d = await printd();
    console.log(d);
    console.log('e')
}
x();
