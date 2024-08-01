// Activity 1 : Understanding localStorage 

// task 1 

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}
const key = "taskey"
const value = "taskvalue"
saveToLocalStorage(key, value);

const retrievedValue = getFromLocalStorage(key)
console.log("Retrieved Value from localStorage :", retrievedValue)

// task 2 
function saveObjectToLocalStorage(key, obj) {
    const jsonString = JSON.stringify(obj)
    localStorage.setItem(key, jsonString);
}
function getObjectFromLocalStorage(key) {
    const storedJsonString = localStorage.getItem(key);
    const obj = JSON.parse(storedJsonString);
    return obj;
}

const myObj = {
    name: "Marry",
    age: 23,
    occupation: "Software Engineer"
}
const keyValue = "myObjectkey"
saveObjectToLocalStorage(keyValue, myObj);
const retrivedObject = getObjectFromLocalStorage(keyValue)
console.log("Retrieved Object from localStorage :", retrivedObject)

// task 3 
function saveFormData(e) {
    e.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value

    const userData = {
        name: name,
        email: email

    }
    localStorage.setItem('userData', JSON.stringify(userData))
    displatUserData()
}

function displatUserData() {
    const userStringData = localStorage.getItem('userData')
    const userData = JSON.parse(userStringData)
    const userInfo = document.getElementById('userInfo')
    userInfo.textContent = `Name : ${userData.name}, Email : ${userData.email}`
}
document.getElementById('userForm').addEventListener('submit', saveFormData)
window.onload = displatUserData


// task 4 

function displayLocalStorage() {
    console.log('LocalStorage Display ')
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(`Key : ${key}, Value : ${value}`)
                }
    console.log('---')
}

function removeItemFormLocalStorage(key){
    console.log(`Remove item with key : ${key}`)
    displayLocalStorage()
    localStorage.removeItem(key)
    displayLocalStorage()
}
localStorage.setItem('Item 1', "value 1")
localStorage.setItem('Item 2', "value 2")
localStorage.setItem('Item 3', 'Value 3')

console.log('Inital Local Storage')
displayLocalStorage()
 removeItemFormLocalStorage('Item 1')
    