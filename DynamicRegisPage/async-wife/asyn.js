
console.log('person1 : shows ticket')
console.log('person2 : shows ticket')

const preMovie = async ()=>{
    let wifeBringsTicket = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)    
    })
   
    let wifeIsHungry = new Promise((resolve,reject)=> resolve('wife: I am hungry'))

    let getPopcorn = new Promise((resolve,reject)=>resolve('husband gets popcorn'))
    

    let getButter = new Promise((resolve,reject)=>resolve('husband adds butter'))

    let getColddrinks = new Promise((resolve,reject)=> resolve('husband gets sprite'))
    let [wifehunger,popcorn,butter,drinks] = await Promise.all([wifeIsHungry,getPopcorn,getButter,getColddrinks]);
    
    console.log(`${wifehunger}`)
    console.log(`${popcorn}`)
    console.log('wife : i need butter in popcorn')
    console.log(`${butter}`)
    console.log(`${drinks}`)

    let ticket = await wifeBringsTicket;


    return ticket;
}

preMovie().then((t)=>console.log(`person3 : shows ${t}`));

console.log('person4 : shows ticket')
console.log('person5 : shows ticket')