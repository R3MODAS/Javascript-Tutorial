//! How to clone an Array
// let arr1 = [1,2,3,4,5]; 
// let arr2 = arr1.slice(0);
// let arr2 = [].concat(arr1);
// let arr2 = [...arr1]; 

//! we can add multiple values as well 
// let arr2 = arr1.slice(0).concat([6,7,8]);
// let arr2 = [].concat(arr1,[10,20]);
// let arr2 = [...arr1,10,20,30];
// console.log(arr2);

//! Array destructuring
// const arr = [10,20,30,40,50,60];
// const [a,b] = arr;
// const [a,,b] = arr;
// const [a,,b,...c] = arr;
// console.log(a,b,c);

//! Objects
// const person = {
//     name : "Remo",
//     age : 23
// } 
// console.log(person);
// const key = "email";
// person[key] = "abc@gmail.com";
// console.log(person);

//! Computed Properties 
// const key1 = "name";
// const key2 = "age";

// const val1 = "Remo";
// const val2 = 23;

// const person = {
//     [key1] : val1,
//     [key2] : val2
// }

// console.log(person);

//! Spread Operator in Object
// const person1 = {
//     name : "Remo",
//     age : 23
// }

// const details = {
//     place : "California",
//     food : "Biriyani"
// }

// const spreadobj = {...person1,...details};
// console.log(spreadobj);

//we can even spread string

// const newstr = {..."remo"};
// console.log(newstr);

//! Object destructuring
// const person = {
//     name : "Remo",
//     age : 23,
//     food : "Biriyani" 
// } 

// const {name,age} = person;
// console.log(name,age);

// const {name : Name, age : Age} = person;
// console.log(Name,Age);

// const {name,...details} = person;
// console.log(name,details);

//! Objects inside Array

// const users = [
//     {userId : 1, name: "Remo", age : 23},
//     {userId : 2, name: "Rahul", age : 25},
//     {userId : 3, name: "Harshit", age : 27},
// ]

// for(let user of users){
//     console.log(user);
// }

// let [{userId,name,age}] = users;
// console.log(userId,name,age);

//! Iterating Objects

// const marks = {
//     Remo: 90,
//     Rahul: 80,
//     Harshit: 70
// }

// for(let key in marks){
//     console.log("Marks of",key,"is",marks[key]);
// }

// for(let i = 0; i < Object.keys(marks).length; i++){
//     console.log("Marks of",Object.keys(marks)[i],"is",Object.values(marks)[i]);
// }

// for(let key of Object.keys(marks)){
//     console.log("Marks of",key,"is",marks[key]);
// }

//! Populating a todo list

// let todos = [
//     {
//         sno: 1,
//         title: "Going to sleep",
//         desc : "Sleep is needed for everyone"
//     },
//     {
//         sno: 2,
//         title: "Going to wake up and practice Next.js",
//         desc : "Next.js is needed for my project"
//     },
//     {
//         sno: 3,
//         title: "Going to exercise",
//         desc : "Exercising is really needed to make my body strong"
//     },
// ]

// todos.forEach((todo)=>{
//     document.write(`No : ${todo.sno} <br/> Title : ${todo.title} <br/> Desc: ${todo.desc} <br/><br/><br/>`)
// })

//! Hosting
// hello();

// function hello(){
//     console.log("Hello");
// } 

//! Lexical Scope
// function hi(){
//     let val = "Yes";
//     function bye(){
//         console.log(val);
//     }
//     console.log(val);
//     bye();
// } 
// hi();

//! Parameters in function 

//! Default parameter 
// function sum(a,b=1){
//     console.log(a+b);
// }
// sum(2);

//! rest parameter
// function sum(a,b,...c){
//     console.log(a,b);
//     console.log(c);
// } 

// sum(1,2,1,2,3,4,5);

// function Sum(...val){
//     let sum = 0;
//     for(let a of val){
//         sum = sum + a;
//     }
//     console.log(sum);
// }

// Sum(1,2,3,4,5);

//! parameter destructuring 
// const obj = {name : "Remo", age : 23};
// function details({name, age}){
//     console.log(name,age);
// }

// details(obj);

//! callback function
// function hello(){
//     console.log("This is a callback function");
// }

// function hi(callback){
//     callback();
// }

// hi(hello);

//! Function returning function
// function first(){
//     function second(){
//         return "this is second";
//     }
//     return second;
// }

// const returnfunc = first();
// console.log(returnfunc());

//! higher order function => taking function as an input / returning a function / both 

//! Important Array Methods

// const users = [
//     {userid : 1, name : "Ram", age : 25},
//     {userid : 2, name : "Harshit", age : 23},
//     {userid : 3, name : "Rahul", age : 28},
// ]

// users.forEach((value)=>{
//     console.log(value.name);
// })

// const names = users.map((value)=>{
//     return value.name;
// })
// console.log(names);

// const num = [1,2,3,4,5,6];
// const even = num.filter((number)=>{
//     return number%2 === 0
// })
// console.log(even);

// const products = [
//     {productid : 1, price : 1000},
//     {productid : 2, price : 3000},
//     {productid : 3, price : 2000},
// ]

// const totalprice = products.reduce((pv,cv)=>{
//     return pv + cv.price;
// },0)

// console.log(totalprice);

//! sort method
// const users = [
//     {productId: 1, price : 500},
//     {productId: 2, price : 800},
//     {productId: 3, price : 400},
//     {productId: 4, price : 300},
// ] 

// const lowtoHigh = users.sort((a,b)=>{
//     return a.price - b.price
// })

// const hightoLow = users.sort((a,b)=>{
//     return b.price - a.price;
// })

// console.log(lowtoHigh);
// console.log(hightoLow);


//! find method
// const users = [
//     {userid : 1, name : "Ram", age : 25},
//     {userid : 2, name : "Harshit", age : 23},
//     {userid : 3, name : "Rahul", age : 28},
// ]
// const singleUser = users.find((value)=>{
//     return value.userid === 3;
// })
// console.log(singleUser);

//! every and some method
// const users = [
//     {productId: 1, price : 500},
//     {productId: 2, price : 800},
//     {productId: 3, price : 400},
//     {productId: 4, price : 300},
// ]

// const priceCheck = users.every((value)=>{
//     return value.price <= 1000; // gives true
// return value.price >= 1000; // gives false
// })

// const priceCheck = users.some((value)=>value.price >= 600)
// console.log(priceCheck);

//! fill method
// const arr = new Array(10).fill(0);
// console.log(arr);

// const arr = [1,2,3,4,5];
// arr.fill(100,1,4);
// console.log(arr);

//! splice method
// const arr = [1,2,3,4,5,6,7,8];
// arr.splice(2,3,300,400);
// console.log(arr); 

//! Iterables
// const name = "Remo";
// for(let char of name){
//     console.log(char);
// }

// const arr = [1,2,3,4,5];
// for(let val of arr){
//     console.log(val);
// }

//! Sets (it is iterable)
// const set = new Set();
// set.add("Remo");
// set.add([10,20]);
// set.add([10,20]); 
// from js point of view ☝ both of these array are different as they have different address and it doesn't matter even if they have the same value
// console.log(set);

// if(set.has("Remo")){
//     console.log("It contains the string 'Remo'");
// }
// else{
//     console.log("It does not contains the string 'Remo'");
// }

// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(5);
// console.log(set);

// It is perfectly iterable but it has no order or index based access 
// for(let item of set){
//     console.log(item);
// }

// how to find unique elements from an array ??
// const myarr = [1,2,3,4,3,3,5,5,5];
// const set = new Set(myarr);
// console.log("Unique elements in the Array are :",set);

// how to find the length of the set of unique elements
// let count = 0;
// for(let values of set){
//     count++;
// }
// console.log("No of elements in the set are :",count);

//! Map (Iterable)
// const person = new Map();
// person.set("name","Remo");
// person.set("age",23);
// person.set("Fav-Food","Biriyani");
// console.log(person);
// console.log(person.get("name"));

// how to get keys and values of Map Object
// console.log(person.keys());
// console.log(person.values());

// console.log(person.entries());
// console.log(person.has("age"));

// To iterate Map Object
// for(let item of person){
//     console.log(item);
// }

// for(let [a,b] of person){
//     console.log(a,":",b);
// }

//! Cloning of Objects (Another way)
// const obj1 = {
//     name : "Remo",
//     age : 23
// }

// const obj2 = Object.assign({},obj1);
// console.log(obj2);

// //! Optional Chaining
// const user = {
//     // fname : "Remo",
//     age : 23
// } 
// console.log(user?.fname);

//! Method
// function inside object -> Method 

// const person = {
//     name : "Remo",
//     age : 23,
//     details : function(){
//         return `${this.name} is ${this.age} years old`;
//     }
// }

// console.log(person);
// console.log(person.details());

// function personInfo(){
//     return `${this.name} is ${this.age} years old`;
// }

// const person1 = {
//     name : "Remo",
//     age : 23,
//     details : personInfo
// }

// const person2 = {
//     name : "Rahul",
//     age : 26,
//     details : personInfo
// }

// console.log(person1.details());
// console.log(person2.details());

// console.log(window);
// console.log(this);

//! Call, Apply, Bind method
// const user1 = {
//     fname : "Remo",
//     age : 23,
//     about : function(food){
//         return `${this.fname} is ${this.age} years old and his favourite food is ${food}`;
//     }
// }
// console.log(user1.about());

// const user2 = {
//     fname : "Rahul",
//     age : 27
// }
// const user3 = {
//     fname : "Harsh",
//     age : 26
// }

// console.log(user1.about.call(user2,"Chilly Chicken"));
// console.log(user1.about.call(user2,"Biriyani"));

//! defining function/method outside 
// function about(food){
//     return `${this.fname} is ${this.age} years old and his fav food is ${food}`;
// }

// const user1 = {
//     fname : "Remo",
//     age : 23
// }

// const user2 = {
//     fname : "Rahul",
//     age : 27
// }

// const user3 = {
//     fname : "Harsh",
//     age : 26
// }

// console.log(about.call(user1,"Biriyani"));
// console.log(about.call(user2,"Schezwan Rice"));
// console.log(about.call(user3,"Fried Rice"));

// console.log(about.apply(user1,["Biriyani","Schezwan Fried Rice"]));
// const result = about.bind(user1,"Biriyani");
// console.log(result());

//! Arrow function and this keyword
// In arrow function, this works globally so we have to define variables one level up 

// name = "Harsh";
// age = 24;
// const user = {
//     name : "Remo",
//     age : 23,
//     about : () => {
//         return `${this.name} is ${this.age} years old` 
//     }
// }

// console.log(user.about());

// const user = {
//     name : "Remo",
//     age : 23,
//     about(){
//         return `${this.name} is ${this.age} years old`; 
//     }
// }

// console.log(user.about());

//! Creation of Object and the Problems we face 

//! 1st way (not good as too much memory is taken up by methods) 
// function createUser(name,age,food){
//     const user = {};
//     user.name = name;
//     user.age  = age;
//     user.food = food;
//     user.about = function(){
//         return `${this.name} is ${this.age} years old`;
//     }
//     user.is18 = function(){
//         return this.age >=18;
//     }
//     return user;
// }

// const user1 = createUser("Remo",22,"Biriyani");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());

//! 2nd way of Creating Object
// const userMethods = {
//     about: function () {
//         return `${this.name} is ${this.age} years old`;
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }

// function createUser(name, age, food) {
//     const user = {};
//     user.name = name;
//     user.age = age;
//     user.food = food;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser("Remo",22,"Biriyani");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());

//! Chaining Object
// const obj1 = {
//     name : "Remo",
//     age : 23
// }

// const obj2 = Object.create(obj1);
// obj2.food = "Biriyani";
// console.log(obj2);
// console.log(obj2.name);
// console.log(obj2.__proto__);


//! 3rd way of creating Object 
// const userMethods = {
//     about: function () {
//         return `${this.name} is ${this.age} years old`;
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }

// function createUser(name, age, food) {
//     const user = Object.create(userMethods);
//     user.name = name;
//     user.age = age;
//     user.food = food;
//     return user;
// }

// const user1 = createUser("Remo",22,"Biriyani");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());

//! Prototype
 