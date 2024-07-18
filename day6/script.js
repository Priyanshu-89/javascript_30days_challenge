// Activity 1: Array Creation and access 

// task 1 
let arr = [1, 2, 3, 4, 5]
console.log(arr);

//task 2 

const numbers = [1, 2, 3, 4, 5]
const firstElement = numbers[0]
console.log("First Element", firstElement)

const lastElement = numbers[numbers.length - 1]
console.log("Last Element", lastElement)

// Activity 2: Array methods (Basic)
// task 3

let numbers2 = [1, 2, 3, 4, 5]

numbers2.push(6)
console.log(numbers2)

// task 4

let numbers3 = [1, 2, 3, 4, 5]

let removedElement = numbers3.pop()

console.log("Updated array :", numbers3)
console.log("Removed Element :", removedElement)

//task 5

let numbers4 = [1, 2, 3, 4, 5]

let removedElement1 = numbers4.shift()

console.log("Updated array :", numbers4)
console.log("Removed Element :", removedElement1)

//task 6

let numbers5 = [1, 2, 3, 4, 5]
numbers5.unshift(0)
console.log(numbers5)

// Activity 3: Array methods (intermediate)

// task 7 

const numbers6 = [1, 2, 3, 4, 5]

const doubledNumbers = numbers6.map(num => num * 2)
console.log("Doubled Numbers :", doubledNumbers)

// task 8 

const numbers7 = [1, 2, 3, 4, 5]
const evenNUmbers = numbers7.filter(num => num % 2 == 0)
console.log("Even Numbers", evenNUmbers)

// task 9 
const numbers8 = [1, 2, 3, 4, 5]
const sum = numbers8.reduce((acc, currentValue) => acc + currentValue, 0)
console.log("Sum of all numbers:", sum)

// Activity 4: Array Iteration

// task 10 

const numbers9 = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers9.length; i++) {
    console.log(numbers9[i])
}

// task 11 

const numbers10 = [1, 2, 3, 4, 5]
numbers10.forEach(function(elem){
    console.log(elem)
})

// Activity 5: Multi-dimensional array
// task 12

const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matrix)

//task 13
const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]
    const elememt=matrix2[1][2]
    console.log(elememt)


