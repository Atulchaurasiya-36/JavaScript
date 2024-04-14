//  string: string is a sequence of characters enclosed within single quotes (') or double quotes ("). 
// It can contain letters, numbers, symbols, or spaces. 
// Strings are used to represent text data and are one of the fundamental data types in JavaScript.

let greeting="Hello ,world";
console.log(greeting)

// Strings in JavaScript are immutable, meaning once they are created, their values cannot be changed.

// Concatenation: You can concatenate strings using the '+' operator.
let firstName = "Atul";
let lastName = "Chaurasiya";

let fullName = firstName + " " + lastName;
console.log(fullName)

// Length: You can find the length of a string using the length property.
let message = "Hello";
console.log(message.length)

// Accessing Characters: You can access individual characters in a string using square brackets [].

let str = "Hello";
let firstChar = str[0];

// String Methods: JavaScript provides many built-in methods for working with strings, such as :

// let text = "Hello, world!";
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())
// console.log(text.indexOf("l"))

// split():method

const names="Ram Atul Shivam Ravi Diana Rumy July"
console.log(names.split(" "))

// slice():

let text = "Hello, world!";
const text1=text.slice(0,7)
console.log(text1)

// It allows the use of negative indices. Negative indices count from the end of the string, 
//   with -1 being the index of the last character.

text2=text.slice(-1);
console.log(text2)
