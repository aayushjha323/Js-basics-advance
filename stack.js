//stack(primitive) and heap is non-primitive 
//first in stack we get call by values or copy of values
let aayush="jhaaayush323@gmail"
let aayushJr= aayush
 aayushJr="2021pceitaayush001@poorinma"
// console.log(aayush);
// console.log(aayushJr);

//here basically the value gets copied from aayush to aayushJr 
//and original value is still change hence the output has no change in it.

//heap
let aayu= {
    emailId:"aayushjha323@gmail",
    age:21,
}
let aayuJr=aayu
aayuJr.emailId= "aayushjha3123@gmail"
// console.log(aayuJr);
// console.log(aayu);

//basically here what happened was it is an non-primitive data-type 
//so the value was call by refrence here as the original value is also changed

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//string
let nam="aayush";
let repoCount=344;

//console.log(`my name is ${nam} and my repo count is ${repoCount}`);

let gameName = new String('AayushKumarJha')
//console.log(gameName[0]);
//console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());//in function toUpperCase() it converts all the input to uppercase

let newString= gameName.substring(0, 3)
console.log(newString);
let anotherString= gameName.slice(-7, 9)
console.log(anotherString);
