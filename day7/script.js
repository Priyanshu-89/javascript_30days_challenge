// Activity 1: Object Creation and Access 

// task 1: 

const book={
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
}
console.log(book);

// task 2:
console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods

// task 3 : 
class Book1{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    getTitleAndAuthor(){
        return `${this.title} by ${this.author}`
    }
}

let myBook=new Book1("1984", "Goerge orwell")

console.log(myBook.getTitleAndAuthor())

// task 4 

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.updateYear = function(newYear) {
    this.year = newYear;
    console.log(this);
};


let myBook1 = new Book("1984", "George Orwell", 1949);


myBook1.updateYear(2024);



// Activity 3: Nested Objects

// task 5 

function Book2(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

let library={
    name:"Example Library",
    books:[
        new Book2("1984", "George Orwell", 1949),
        new Book2("The Great Gatsby", "F. Scott Fitzgerald", 1925),
        new Book2("The Catcher in the Rye", "J.D. Salinger",2020),
    ]
}

console.log(library)

// task 6 

let library1 = {
    name: "My Library",
    books: [
        { title: "Book 1" },
        { title: "Book 2" },
        { title: "Book 3" }
       
    ]
};


console.log("Library Name:", library1.name);


console.log("Books in the Library:");
library.books.forEach(book => {
    console.log(book.title);
});

// Activity 4: The this keyword

// task 7 

let library2={
    name:"My Library",
    books1:[
        {title:"Book 1",author:"Author 1",year:2001},
        {title:"Book 2",author:"Author 2",year:2002},
        {title:"Book 3",author:"Author 3",year:2003},
        ]
}

library2.books1.forEach(book=>{
    book.getInfo=function(){
return `${this.title} (${this.year})`
    }
})

console.log("Library Name:", library2.name);


console.log("Books in the Library:");
library2.books1.forEach(book => {
    console.log(book.getInfo());
});
// Activity 5: Object iteration

// task 8 

let library3 = {
    name: "My Book",
    books2: [
        { title: "Book 1", author: "Author 1", year: 2001 },
        { title: "Book 2", author: "Author 2", year: 2002 },
        { title: "Book 3", author: "Author 3", year: 2003 }
    ]
};

library3.books2.forEach((book, i) => {
    console.log(`${i + 1}. ${book.title} by ${book.author}`);
});

console.log();









