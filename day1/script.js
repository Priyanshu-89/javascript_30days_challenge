// Activity 1: Variable Declaration

var number=23
console.log(number)

let name="John"
console.log(name)

//Activity 2: Constant Declaration

const myBoolean=true;
console.log(myBoolean);

// Activity 3: Data Types 

let userName="Marry"
let userRollNumber=10
let isRegistered=true
let userAddress = {
    city: "Patna",
    state: "Bihar",
    country: "India"
};
let hobbies = ["reading", "painting", "running"];

console.log("Type of Username is", typeof(userName))
console.log("Type of roll number is", typeof(userRollNumber))
console.log("Type of isRegistered is", typeof(isRegistered))
console.log("Type of userAddress is", typeof(userAddress))

// Activity 4: Reassigning Variables 

let myValue = 10;

// clg the initial 
console.log("Initial value:", myValue);

// Reassign a new value 
myValue = 20;

// clg the new value 
console.log("New value:", myValue);

// Understanding "const"

// observe the error of const after reassigning

const myAge=12
myAge=13
console.log(myAge)