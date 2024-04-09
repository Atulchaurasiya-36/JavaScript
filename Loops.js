// JavaScript Loops
// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// for loop

for(let i=1;i<=5;i++){
    console.log("Atul Chaurasiya")
}

// While loop

let j=1;
while(j<=4){
    console.log("Java Script")
    j++
}

// do-while loop : it will run at least once

let k=1;
do{
    console.log("Do-while loop")
    k++; 
}while(k<=0)

// for of loop : use with object

let arr=[10,20,50,60]
for(let i of arr){
    console.log(i)
}

// for of loop

const student={
    name:"Atul",
    rollno:1234,
    address:"kld"
}
for(let x in student){
    console.log(student[x])
}