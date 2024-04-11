// Array is special variable that can hold more than one values.
// javaScript Array can hold hetrogeneous data type .it is different from other programming language

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.

const arr=[3,5,7,8,9];

// Using the JavaScript Keyword new

const arr1=new Array("Ram","Atul","kuldeep")

// Accessing Array Elements

// You access an array element by referring to the index number:

console.log(arr1[0]);

// Changing an Array Element

arr1[0]="Rahul";
console.log(arr1)

// The length Property
// The length property of an array returns the length of an array

const fruits=["Apple","orange","mango","banana"];
console.log(fruits.length);

// Looping Array elements

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

// Array methods

// pop() method:The pop() method removes the last element from an array:
  
let fruit=fruits.pop();
console.log(fruit)

console.log(fruits)

// push()method:The push() method adds a new element to an array (at the end):

fruits.push("kiwi");
console.log(fruits)

// shift() method:The shift() method removes the first array element and "shifts" all other elements to a lower index
// The shift() method returns the value that was "shifted out":

let val=fruits.shift();
console.log(fruits)

// unshift() method:The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

fruits.unshift("Lemon")
console.log(fruits)

// concat() method:The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

let mychildren =myGirls.concat(myBoys);
console.log(mychildren)

// The concat() method does not change the existing arrays. It always returns a new array.

console.log(myGirls)
console.log(myBoys)


// The concat() method can take any number of array arguments

const arr3 = ["Robin", "Morgan"];

let family=arr3.concat(myBoys,myGirls);
console.log(family)

// slice()method:The slice() method slices out a piece of an array into a new array:
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array

const name1=["Atul","diana","rumy","july","anjlina"]
let sp=name1.slice(4)
console.log(sp)
console.log(name1)

// splice()method:The splice() method of Array instances changes the contents 
//of an array by removing or replacing existing elements and/or adding new elements in place
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');// // Inserts at index 1
console.log(months)

months.splice(4, 1, 'May');//// Replaces 1 element at index 4
console.log(months);


    


