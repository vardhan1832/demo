const num1element = document.getElementById('num1') as HTMLInputElement
const num2element = document.getElementById('num2') as HTMLInputElement

const nums: Array<number> = []
const str: string[]=[]

type numorstr = number | string;

interface resObj{
    val: number,
    timestamp: Date
}

function add(num1:numorstr , num2:numorstr){
    if(typeof num1 === "number" && typeof num2 === 'number'){
        return num1 + num2;
    }else if(typeof num1 === "string" && typeof num2 === 'string'){
        return num1 +' ' + num2;
    }else{
        return +num1 + +num2;
    }
   
}
function printResult(resobj:resObj){
    console.log(resobj.val)
    console.log(resobj.timestamp)
}

document.getElementById('button')!.addEventListener('click',()=>{
        const num1 = num1element.value;
        const num2 = num2element.value;
        const result = add(+num1,+num2)
        nums.push(result as number)
        const strres = add(num1 ,num2 )
        str.push(strres as string)
        printResult({val: result as number , timestamp: new Date()})
        console.log(nums,str)
})

const mypro = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('it worked')
    }, 1000);
})

mypro.then((res)=>{
    console.log(res)
})