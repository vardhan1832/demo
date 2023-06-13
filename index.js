"use strict";
const num1element = document.getElementById('num1');
const num2element = document.getElementById('num2');
const nums = [];
const str = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(resobj) {
    console.log(resobj.val);
    console.log(resobj.timestamp);
}
document.getElementById('button').addEventListener('click', () => {
    const num1 = num1element.value;
    const num2 = num2element.value;
    const result = add(+num1, +num2);
    nums.push(result);
    const strres = add(num1, num2);
    str.push(strres);
    printResult({ val: result, timestamp: new Date() });
    console.log(nums, str);
});
const mypro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
mypro.then((res) => {
    console.log(res);
});
