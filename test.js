// const accountId=12345;
// let accountEmail="ass@gmail.com";
// var accountpassword=1234;
// city="kld";
// console.table([accountEmail,accountId,accountpassword,city])
// 

// datatype in js
//  let bool=true;
//  bool=false;
//  console.log(typeof bool);
//  bool=123;
//  console.log(typeof bool);
//  bool="atul";
//  console.log(typeof bool);
//  bool=1233445677455789993737474488888888888888888888888888888888888888.7777777777777777777777777777777777777777777777777778888;
//  console.log(typeof bool);



// conversion  strint to no

// let string="3.14";
// let strings="";
// let str=Number(strings)
// console.log(str);

// let no=Number(string);
// console.log(no);
// console.log(typeof(no))

// conversion  no to string
//  let nu=123;
//  let strg=String(nu);
//  console.log(strg);
//  console.log(typeof strg);

// conversion boolean to no

// let boolean=true;
// let noo=Number(boolean)
// console.log(noo);
// boolean=false
// noo=Number(boolean)
// console.log(noo);

// conversion boolean to string
// let boolean=true;
// let str=String(boolean)
// console.log(str);
// console.log(typeof str);
// boolean=false;
// str=String(boolean);
// console.log( str);
// console.log(typeof str);


//  stack(primitive) heap(non-primitive)
// let email="Atul@gamil.com"
// let email1=email
// console.log(email1);
// email1="abhi@gmail.com"
// console.log(email1);

// let userone={
//     name:"atul",
//     rollno:1233
// }
// let usertwo=userone
// usertwo.name="abhi"
// console.log(usertwo.name);
// console.log(userone.name);

// String ------------------------>
// const str="may i have your name ,please";// first way of crwating string as primitive
// console.log( typeof str);
// const str1=new String("hi,this is atul");// second way of crwating string as object
// console.log (typeof str1);
// const str2=str+str1;
// console.log( typeof str2);

// string methods & property----------------------------->
//  const str="hello";
//  console.log(str.length);
//  console.log(str.charAt(4));// return character
  
//  const str1="hello my name is atul my";
//  const word="atul";
//  console.log(str1.includes(word)); // return true or false

//  console.log(str1.indexOf("my")); // return index of string or char
//  console.log(str1.lastIndexOf("my"));// return lastindex of string or char
//  console.log(str1.slice(6,13));
//  console.log(str1.startsWith('h'));


// Arrays
// const arr=[1,2,3,4,5,6];
//console.log(arr);
// const arr1=new Array(1,2,3,5,7,8,9);
//console.log(arr1);
// arr.push(111);
// console.log(arr);
// arr.pop();
// console.log(arr);

// console.log(arr.includes(8));
// console.log(arr1.includes(9));

// arr.unshift(9);
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log("A",arr);
// console.log(arr.slice(1,3));
// console.log("B",arr);
// console.log(arr.splice(1,3));
// console.log("c",arr);

// const arr=["lucy","henna","rumy"];
// const arr1=["jory","sophia","tino"];
// arr.push(arr1);
// console.log(arr);
// const anotherArray=[...arr,...arr1];
// console.log(anotherArray);

// console.log(Array.isArray("diana heden"));
// console.log(Array.from("diana heden"));
// let score=100;
// let score1=1002;
// let score2=1003;
// console.log(Array.of(score,score1,score2));


// objects

const user={
    name:"atul",
    email:"abhi@google.com",
    add:"kld",
}
// console.log(user.name);// accessing
// console.log(user["name"]);
const user1={
    nam:"ravi",
    ema:"xyz@google.com",
    ad:"kldkk",
}

const obj={...user,...user1};
console.log(obj);










// number and math
// const score=100;
// console.log(score);
// const balance=new Number(10000.00);
// console.log(balance.toString());
// console.log(balance.toFixed(1));
// console.log(balance.toLocaleString('en-IN'));

