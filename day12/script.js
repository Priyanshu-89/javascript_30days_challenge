// Activity 1 : Basic Error Handling with Try-Catch 

// task 1 

function throwAnError() {
    try {
        throw new Error("This is a intentionally throws error.")
    } catch (error) {
        console.log("Error caught : ", error.message)
    }
}

throwAnError()

// task 2 

function dividedNumbers(num, den) {
    try {
        if (den === 0) {
            throw new Error("Denominator can't be zero")
        }
        return num / den
    } catch (error) {
        console.log("Error caught : ", error.message)
        return null
    }
}

console.log(dividedNumbers(10, 2))
console.log(dividedNumbers(10, 0))

// Activity 2 : Finally Block

// task 3 

function finallyBlock() {
    try {
        console.log("Inside try block - Start from try block")

    } catch (error) {
        console.error("Inside catch block - :", error.message)
    } finally {
        console.log("Inside finally block - Finally block always executes")
    }
    console.log("Outside try-catch and finally blocks")
}
finallyBlock()

// Activity 3 : Custom Error Objects

// task 4 

class customError extends Error {
    constructor(message) {
        super(message)
        this.name = this.constructor.name
        this.message = message

    }
}

function throwError() {
    throw new customError('This is a custom error message')
}

try {
    throwError();
} catch (error) {
    console.log("Caught custom error :", error.message)
}

// task 5 

class inputError extends Error{
    constructor(message){
        super(message)
        this.name='inputError'
    }
}

function validateInput(input){
    if(typeof input !== 'string' || input.trim()=== ''){
        throw new inputError("Input not empty string")
    }
    return input
}

function processUserInput(input){
    try{
        const validatedInput=validateInput(input)
        console.log("Validated input :", validatedInput)
    }catch(error){
        if(error instanceof inputError){
            console.log("Input Error :", error.message)
        }else{
            console.log("Unexpected Error :", error.message)
        }
    }
}

processUserInput("Hello")
processUserInput('')
processUserInput(43)

// Activity 3 : Error Handling in Promises

// task 6 

function randomPromise(){
    return new Promise((resolve, reject) => {
        const randomNum=Math.random()
        if(randomNum<0.5){
            resolve('Success')
            }else{
                reject('Failure')
            }
        })
}
randomPromise()
.then(result=>{
    console.log("Resolved :", result)
})
.catch(error=>{
    console.log("Rejectd :", error.message)
})

//task 7

function randomPromise(){
    return new Promise((resolve, reject) => {
        const randomNum=Math.random()
        if(randomNum<0.5){
            resolve('Success')
            }else{
                reject('Failure')
            }
        })
}

async function handleRandomPromise(){
    try {
        const result=await randomPromise()
        console.log("Resolved :", result)
    } catch (error) {
        console.log("Error :", error.message)
    }
}

handleRandomPromise()
