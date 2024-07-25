// Activity 1: Creating and Exporting modules 
//task 1

const add=require('./addTwoNumbers.js')
let resullt=add(3,5)
console.log(resullt)
resullt=add(60, 10)
console.log(resullt)


// task 2 

const person=require('./person.js')
console.log(person.greeting())
console.log("Age of Marry : ",person.age)

// Activity 2 : Named and default Exports 
// task 3 

const {add2, sub, mul, div}=require('./functions.js')
console.log(add2(10, 20))
console.log(sub(10, 20))
console.log(mul(10, 20))
console.log(div(10, 20))

//task 4

const square=require('./square.js')
console.log(square(7))

// Activity 3 : Importing Entire Modules 

// task 5 

const multipleConstFunction=require('./multipleConst.js')
console.log("PI :", multipleConstFunction.pi)
console.log("E :", multipleConstFunction.E)

console.log('Square is :', multipleConstFunction.square2(6))
console.log('Cube is :', multipleConstFunction.cube(6))

//Activity 4 : Using Third Party Modules

// task 6  using of third party library lodash

const _=require('lodash')
const numbers=[1,2,3,4,5,6,7,8,9]
const sum=_.sum(numbers)
console.log("Sum of numbers :", sum)

// task 7 using axios 

const axios =require('axios')
const url = 'https://jsonplaceholder.typicode.com/todos/1'
axios.get(url).then((response) => {
    const todo = response.data
    console.log(todo)
    })
    