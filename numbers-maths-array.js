const score = 120
//console.log(score);
const marks = new Number(355)
// console.log(marks);
// console.log(marks.toString());
// console.log(marks.toFixed(3));
const jeeMarks = 128.8932
//console.log(jeeMarks.toPrecision(3));//precision are used very carefully we need to check no of argument passed
const hundered = 1000000
//console.log(hundered.toLocaleString('en-IN'));//used to count zeros in a string

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//math
console.log(Math.random());
console.log(Math.random()*20);
console.log(Math.floor(Math.random()*10));

const min=10
const max = 20
//to find min and max value between them we need to do this
console.log(Math.floor(Math.random()*(max-min+1)+min));//floor function is used to generate random value between
//+min is done to generate exactly between them
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//date

let myDate=new Date()
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());//different conversion to print date object in js

let newDate = new Date(2024, 1, 3, 2, 30)
console.log(newDate.toLocaleString());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myArr=[0,1,2,3,4,5]

myArr.push(8)
myArr.pop()
myArr.unshift(90)//unshift is used to push value in the beginning of an array
myArr.shift()//this is used to pop value from the beginning of the array
console.log(myArr);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


