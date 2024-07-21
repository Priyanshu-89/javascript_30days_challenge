// Activity 1: Selectiong and MAnipulating Elements 

// task 1 

const myID=document.getElementById('myId')
myID.textContent="New Content"

// task 2 

let  bgc=document.querySelector('.changeBgc')
bgc.style.backgroundColor='pink';

// Activity 2: Selectiong and MAnipulating Elements 

// task 3 

let newDiv=document.createElement('div')
// newDiv.textContent="New Div"
document.body.appendChild(newDiv)

// task 4 
let newLi=document.createElement('li')
newLi.textContent="New Li"
let myUL=document.getElementById('myUL')
myUL.appendChild(newLi)

// Activity 3: Removing Elements 

// task 5 
let removeElement=document.getElementById('removeElement')
removeElement.remove()

// task 6
let mainElement=document.getElementById('main-element')
mainElement.removeChild(mainElement.lastChild)

// Activity 4: Modifying Attributes and Classes
// task 7
let imageElement=document.getElementById('myImage')
imageElement.src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg'

// task 8 

let paraElement = document.getElementById('my-para');

// Add a class
paraElement.classList.add('AddPara');

// Remove a class
paraElement.classList.remove('RemovePara');

// Activity 5: Event Handling

// task 9 
document.getElementById('change-text').addEventListener('click', function(){
    let paragraph=document.getElementById('my-para')
    paragraph.textContent="This is a new text"
})

// task 10 

let divElement=document.getElementById('my-div')
divElement.addEventListener('mouseover', function(){
    divElement.style.borderColor='red'
})





