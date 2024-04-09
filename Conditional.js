//  Conditional statements are used to perform different actions based on different conditions.

// The if Statement
// se the if statement to specify a block of JavaScript code to be executed if a condition is true

let a=10 
if(a%2==0){
    console.log("No is even")
}

// The else Statement
// Use the else statement to specify a block of code to be executed if the condition is false.

let age =20;
if(age<=18){
    console.log("under teen age")
}
else{
    console.log("greater than 18")
}

// Use the else if statement to specify a new condition if the first condition is false.

let num=-1;
if(num>0){
    console.log("no is positive")
}
else if(num<0){
    console.log("no is negative")
}
else{
    console.log("no is zero")
}