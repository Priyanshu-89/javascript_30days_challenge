// Activity 1 : Event Handling 

// task 1 

const changeBtn=document.getElementById('changetxtbtn')
const changeTxt=document.getElementById('changetxt')
changeBtn.addEventListener('click',function(){
    changeTxt.textContent="Change through Js"
})

// task 2 

const toggleImage=document.getElementById('toggleImage')
toggleImage.addEventListener('dblclick', function(){
    if(toggleImage.style.display==='none'){
        toggleImage.style.display='block'
    }else{
        toggleImage.style.display='none'
    }
})

// Activity 2 : Mouse Events
// task 3 

const div=document.getElementById('hover-div')
div.addEventListener('mouseover', ()=>{
    div.style.backgroundColor='orange'

    // task 4 

    div.addEventListener('mouseout', ()=>{
        div.style.backgroundColor='hotpink'
    })
})

// Activity 3 : Keyboard Events

// task 5 

const input=document.getElementById('input')
input.addEventListener('keydown', function(e){
    console.log("Passed Key :", e.key)
})

// task 6 

const displayPara=document.getElementById('displayPara')
input.addEventListener('keyup', function(){
    displayPara.textContent="New Value : " +input.value
})

// Activity 4 : Form Events

// task 7 

document.getElementById('myForm').addEventListener('submit', function(e){
    e.preventDefault()

    const formData = new FormData(event.target)
        const formDataObject = Object.fromEntries(formData.entries())
        console.log('Form data:', formDataObject)
})

// task 8 

const selectDropDown=document.getElementById('mySelect')
const seletedValuePara=document.getElementById('selectedValue')
selectDropDown.addEventListener('change', function(){
    seletedValuePara.textContent="Selected Fruits : " +selectDropDown.value
})

// Activity 5 : Event Delegation

// task 9 

document.getElementById('myList').addEventListener('click', function(e){
    if(e.target.tagName==='LI'){
        console.log("Clicked Item : ", e.target.textContent)
    }
})

// task 10 

document.getElementById('addButton').addEventListener('click', function(){
    const ul=document.getElementById('myList')
    const newLi=document.createElement('li')
    newLi.textContent='New Li'
    ul.appendChild(newLi)
})

