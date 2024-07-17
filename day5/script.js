// Activity 1 : Function Declaration 

// task 1 : 

function checkEvenOdd(number){
    if(number % 2 == 0){
        console.log("Even Number");
        }
        else{
            console.log("Odd Number");
            }
}

checkEvenOdd(3);
checkEvenOdd(10);

// task 2 

function square(number){
    return number *number
}

let ans=square(4)
console.log(`Square is ,${ans}`)

// Activity 2 : Function Expression

// task 3 

const findMax=function(a, b){
    const max=a>b?a:b;
    console.log(`Maximum between ${a} and ${b} is`, max)
}

findMax(10,6)

//task 4 

const concateStrings=function(str1, str2){
    return str1 + str2
}

let ans1=concateStrings("Hello", "World")
console.log("Contacted string", ans1)

// Activity 3 :Arrow  Function 

// task 5 

const calculateSum=(a, b)=>{
    return a+b
};

let ans2=calculateSum(5, 10)
console.log("Sum of 5 and 10 is", ans2)

//task 6

const containsChar=(str, char)=>{
    return str.includes(char)
}

let str="Hello, World"
let char="o"
console.log("Does the string contains the character", containsChar(str, char))

// Activity 4 : Function Parameters and default values

// task 7 

function calculateProduct(a, b=1){
    return a*b
}

let result =calculateProduct(5)
console.log("Product of 5 and 1 is", result)

let result1=calculateProduct(3,6)
console.log("Product of 3 and 6 is", result1)

//task 8

function greetPerson(name, age=18){
    return `Hello ${name}, you are ${age} years old.`
}
console.log(greetPerson("John"))
console.log(greetPerson("Marry", 23))

// Activity 5 : Higher-Order Function 

// task 9 

function callNTimes(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}


function sayHello() {
    console.log("Hello js 30 days!");
}

callNTimes(sayHello, 3); 

// task 10 


function compose(f, g) {
    return function(x) {
        return g(f(x));
    };
}


function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}


let composedFunction = compose(addOne, square);


let result2 = composedFunction(3); 
console.log(result2); 

