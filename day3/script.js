// Activity 1 : if-Else statements 

// task 1 : 

let num1 = 12
if (num1 > 0) {
    console.log(`The given number is Positive ${num1}`)
}

if (num1 < 0) {
    console.log(`The given number is Negative ${num1}`)
}

if (num1 == 0)
    console.log(`The given number is equal to ${num1}`)

// task 2 :

let voterAge=30

if(voterAge>= 18)
{
    console.log(`The person is eligible to vote bcoz their age is ${voterAge}`)
}

// Activity 2 : Nested If-Else Statements

//task 3:

let number1 = 39
let number2 = 23
let number3 = 80

if (number1 > number2 && number1 > number3) {
    console.log(`The largest number is ${number1}`);
} else {
    if (number2 > number1 && number2 > number3) {
        console.log(`The largest number is ${number2}`);
    } else {
        console.log(`The largest number is ${number3}`);
    }
}

// Activity 3 : Switch Case

//task 4 :

let dayNumber = 6

switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Please enter a number between 1 and 7.");
}

//task 5 :

let score = 96

let grade

switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(`For a score of ${score}, the grade is: ${grade}`);

// Activity 4 : Conditional (Ternary) Operator

// task 6 : 

let number=7

let ans=(number %2===0)? "Even" : "Odd"
console.log(`The number is ${number} and it is ${ans}`)

// Activity 5 : Combining Conditions

// task 7 : 

let year=2023

if((year % 4 === 0 && year % 100 !==0) || year % 400 ===0){
    console.log(`${year} is a leap year`)
}else {
    console.log(`${year} is not a leap year`)
}







