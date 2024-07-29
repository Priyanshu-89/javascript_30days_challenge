// Activity 1 : Linked List 

// task 1 

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const firstNode = new Node(10)
const secondNode = new Node(20, firstNode)


console.log(secondNode.value)
console.log(secondNode.next.value)


// task 2 

class Node1 {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node to the end of the list
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {

            this.head = newNode;
        } else {

            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }
    }

    // Method to remove the last node from the list
    removeLast() {
        if (!this.head) {

            return;
        }

        if (!this.head.next) {

            this.head = null;
        } else {

            let currentNode = this.head;
            while (currentNode.next.next) {
                currentNode = currentNode.next;
            }
            // Remove the last node
            currentNode.next = null;
        }
    }

    // Method to display all nodes in the list
    display() {
        let current = this.head;
        const values = [];
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}


const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

console.log('List after adding nodes:');
list.display();

list.removeLast();

console.log('List after removing the last node:');
list.display();

//   Activity 2 : Stack 

// task 3 

class Stack {
    constructor() {
        this.stack = [];
    }

    push(e) {
        this.stack.push(e)
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.stack.pop();
    }

    peek(){
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
            }
            return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0;
        }
        size(){
            return this.stack.length
        }

        display(){
            console.log(this.stack.join('<-'))
        }
}

const stack=new Stack()
stack.push(100)
stack.push(200)
stack.push(300)

console.log("Top Element", stack.peek())

console.log("Size of Stack", stack.size())

console.log("Stack Element :")
stack.display()

console.log("Removed Element :", stack.pop())

console.log("Stack Element after pop")
stack.display()