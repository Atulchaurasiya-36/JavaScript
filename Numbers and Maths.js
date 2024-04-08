

//  numbers
const num=12334
console.log(typeof num);
const num1=new Number(3455)
console.log( typeof num1); // object

const balance=new Number(123789);
console.log(balance.toFixed(2)) // 123789.00
console.log(balance.toString().length)

const hundreds=10000000
console.log(hundreds.toLocaleString('eN-IN'))

//+++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4)) // 4

console.log(Math.round(4.6)) //5

console.log(Math.ceil(5.6)) //6

console.log(Math.floor(7.9)) //7

console.log(Math.random())
console.log((Math.random()*10)+1)

const min=10;
const max=20;

console.log(Math.floor(Math.random()* (max-min+1) )+min)


 