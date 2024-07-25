const person={
    firstName:'Marry',
    lastName:'nill',
    age:20,
    greeting:function(){
        return `Hello, Myself : ${this.firstName} ${this.lastName} and my age is : ${this.age}`
    }
}

module.exports=person