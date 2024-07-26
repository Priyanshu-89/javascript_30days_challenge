// Activity  1: class Definition

// task 1 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old`
    }

    updateAge(newAge) {
        this.age = newAge
        console.log(`Age Updated into ${this.age}`)
    }

    // task 5 
    static getStaticGreeting() {
        return `Hello! This is static greeting from the person class.`
    }
}

const personInstance = new Person("Marry", 30)

console.log(personInstance.getGreeting())

// task 2 
personInstance.updateAge(43)
console.log(personInstance.getGreeting())

// Activity  2: class Inheritance
// task 3 
class Student extends Person {
    static numberOfStudents = 0;

    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId

        //task 6
        Student.numberOfStudents++
        console.log(`Total number of students : ${Student.numberOfStudents}`)
    }
    getStudnetId() {
        return `Student Id : ${this.studentId}`
    }
    //task 4
    getGreeting() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years, and My student ID is ${this.studentId}`;
    }


}

const studentInstance = new Student('Marry', 23, 213565)
console.log(studentInstance.getStudnetId())
console.log(studentInstance.getGreeting())

// task 4 

console.log(studentInstance.getGreeting())

// Activity  3: Static Methods and Properties
// task 5 

console.log(Person.getStaticGreeting())

// task 6 


const student1 = new Student("John", 30, 213456)
const student2 = new Student("Jerry", 20, 213766)
const student3 = new Student("Marry", 23, 213565)

console.log(`Total number of Students after is : ${Student.numberOfStudents}`)

// Activity  4: Getters and Setters

// task 7 

class Person1 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    //task 8

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName || '';
        this.lastName = lastName || '';
    }

    getGreeting() {
        return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
}

const personInstance1 = new Person1('Queen', 'Johnson', 23)

// task 8 
const personInstance2 = new Person1("Ritu", "Gupta", 23)

console.log(personInstance1.fullName)
console.log(personInstance1.getGreeting())

// task 8 
console.log(personInstance2.fullName)
console.log(personInstance2.getGreeting())

// Activity  5: Private Fields(Optional)

// task 9 

class Account {
    #balance = 0
    constructor(initialBalance) {
        this.#balance = initialBalance
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount
            console.log(`Deposited ${amount} New balance id ${this.#balance}`)
        } else {
            console.log("Deposit amount must be +ve")
        }
    }

    withDraw(amount) {
        if (amount > 0) {
            if (this.#balance >= amount) {
                this.#balance -= amount
                console.log(`Withdrawn ${amount} New balance is ${this.#balance}`)
            } else {
                console.log("Insufficient balance")
            }
        } else {
            console.log("Withdrawal amount must be +ve")
        }
    }

    getBalance(){
        return this.#balance
    }
}

const account=new Account(2000)
account.deposit(1000)
account.withDraw(500)
console.log(`Final Balance is ${account.getBalance()}`)
        






