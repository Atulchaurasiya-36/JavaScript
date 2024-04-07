// Explicit type  Conversion

//  Strings to Numbers

let a="1234";
console.log(typeof a) // string 
console.log(typeof Number(a)) // String has converted into number using Number method
 let b=" ";
 console.log(typeof b) // string
 console.log(typeof Number(b)) // an empty string like " " converts into 0

 let c="Atul"
 console.log(Number(c)) // a non numeric string converts into NaN(not a number)

// Converting Numbers to Strings

let d=12333;
console.log( typeof d) // number
console.log( typeof String(d)) // string
let e=String(123+45);
console.log( typeof e) // string


//  boolean to number

let f=false // false means 0
let t=true  // true means 1
console.log( Number(f))  // 0
console.log( Number(t)) // 1

// boolean to string
 f1=true;
 console.log( typeof  String(f1))  // string

//   Implicit Type Conversion(automatic type conversion)

const sum = 35 + "hello";
console.log(sum) // 35hello
console.log(typeof sum) // string

const times = 35 * "hello";
console.log(times) // NaN

const string = ""
const number = 40
const boolean = true
console.log( typeof (boolean + string)) // string
console.log(40 + true) //41


const variable1 = false
const variable2 = ""

console.log(variable1 == variable2) // false : empty string converted into boolean





