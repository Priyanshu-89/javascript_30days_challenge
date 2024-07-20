// Activity 1 : Template Literals 

// task 1 

let personName="John"
let personAge =45

console.log(`Person Name : ${personName} and Person Age : ${personAge}`)

// task 2 

let multiLineString=`This is first line,
This is second line,
This is third line,
This is fourth line,
This is fifth line,
`
console.log(multiLineString)

// Activity 2 : Destructuring

// task 3 

const numbers=[10, 20, 30, 40, 50]
const [first, second] = numbers
console.log(first, second)

// task 4 
const book={
    title:"book one",
    author:"Dummy"
}
const {title, author} = book
console.log(`Book Title: ${title}`)
console.log(`Book Author: ${author}`)

// Activity 3 : Spread and Rest Operators
// task 5

const existingArray=[1,2,3,4,5]
const newElement=[6,7,8,9,10]
const newArray=[...existingArray, ...newElement]
console.log(newArray)

// task 6 

function sum(...numbers){
    return numbers.reduce((acc, current)=>acc+current, 0)
}
console.log(sum(1,2,3,4,5,6,7,8))

// Activity 4 : Default Parameters

// task 7 

function calculateProduct(a, b=1){
    return a*b
}
console.log(calculateProduct(5))
console.log(calculateProduct(4,8))

// Activity 5 : Enhanced Object Literals

// task 8 

const myObject={
    name:"Marry",

    greet(){
        return `Hello, ${this.name}`
    },

    multiply(x,y){
        return x*y
    }
}

console.log(myObject)

// task 9 

const firstName="Ally"
const lastName="Doe"
const age=43

const person1={
    [`first_${firstName}`]: firstName,
    [`last_${lastName}`]: lastName,
    [`age_${age}`]: age
}
console.log(person1)