
window.addEventListener('load', ()=>{
    const form=document.querySelector('#new-task-form')
    const input=document.querySelector('#new-task')
    const list_element=document.querySelector('#tasks')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        // console.log('Submit Form')

        const task=input.value
        if(!task){
            alert("Please Fill out the Task")
            return
        }

        const task_ele=document.createElement("div")
        task_ele.classList.add("task")

        const task_content_el=document.createElement("div")
        task_content_el.classList.add("content")
        task_content_el.innerText=task

        task_ele.appendChild(task_content_el)

        const task_input_ele=document.createElement("input")
        task_input_ele.classList.add("text")
        task_input_ele.type="text"
        task_input_ele.value=task
        task_input_ele.setAttribute("readonly", "readonly")
        task_content_el.appendChild(task_input_ele)

        const task_actions_el=document.createElement("div")
        task_actions_el.classList.add("actions")

        const task_edit_el=document.createElement("button")
        task_edit_el.classList.add("edit")
        task_edit_el.innerHTML="Edit"

        const task_delete_el=document.createElement("button")
        task_delete_el.classList.add("delete")
        task_delete_el.innerHTML="Delete"

        task_actions_el.appendChild(task_edit_el)
        task_actions_el.appendChild(task_delete_el)

        task_ele.appendChild(task_actions_el)

        list_element.appendChild(task_ele)

        input.value=""

        task_edit_el.addEventListener('click', ()=>{
           if(task_edit_el.innerText.toLocaleLowerCase()=="edit"){
            task_input_ele.removeAttribute("readonly")
            task_input_ele.focus()
            task_edit_el.innerText="Save"
           }else{
          task_input_ele.setAttribute("readonly", "readonly")
          task_edit_el.innerText="Edit"
           }

        })

        task_delete_el.addEventListener("click", ()=>{
            list_element.removeChild(task_ele)

        })
       
       
    })
})