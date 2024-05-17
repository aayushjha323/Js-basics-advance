// let x
// console.log("5"===5);


//symbol data types
const my=Symbol('1234')
const myName=Symbol('1234')
console.log(my===myName);

//BigInt
const bigNumber=122343497287n
//used to store big numbers and values

//non primitve datatypes
//array, objects, functions

//create an array example 
const heros=["shaitan", "krish", "hanuman"];


//objects are always under curly braces 
let obj={
    
    name : "aayush",
    age:21,
}
//functions part of non primitive data types
const myFunction = function(){
    console.log("aayush");
}

console.log(typeof obj);
console.log(typeof myFunction);
console.log(typeof bigNumber);