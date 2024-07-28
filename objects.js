//singleton -when we create an object from constructor it is an singleton it is not litreals
//object.create
//object litrals

const mySym = Symbol("key1")
const jsUser = {
    "name is": "Aayush",
    age: 21,
    location: "Jaipur",
    [mySym]: "myKey1",
    isLogin: false,
    loginDays: ["monday","tuesday","wednesday"] 
}
//console.log(jsUser.nameis)//can't access this as there is space in between them and it is taking as a string
//console.log(jsUser["loginDays"])//to access all kind of objects
console.log(jsUser[mySym]);

jsUser.greetiings=function(){
    console.log("hello js user");//functions are generally 1 type rated in java script
}
console.log(jsUser.greetiings());
jsUser.greetiingsTwo=function(){
    console.log(`hello js user, ${this.isLogin}`);//another way to represent function in objects using backtics
}
console.log(jsUser.greetiingsTwo());
