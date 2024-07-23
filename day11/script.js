// Activity 1 : Understanding Promises 

// task 1 

function displayMessage(){
    return new Promise((res)=>{
        setTimeout(()=>{
            res("Hello, After 2 Seconds !")
        }, 2000)
    })
}

displayMessage().then((mess)=>{
    console.log(mess)
})

// task 2 

function displayError(){
    return new Promise((_, rej)=>{
        setTimeout(()=>{
            rej(new Error("Error After 2 Sec"))
        }, 2000)
    })
}

displayError().catch((err)=>{
    console.log(err.message)
})

// Activity 2 : Chaining Promises 

// task 3 

function fetchData(){
    return new Promise((res)=>{
        setTimeout(()=>{
            console.log("Fetching from fetchData")
            res("Data from fetchData")
        }, 1000)
    })
}

function fetchData1(){
    return new Promise((res)=>{
        setTimeout(()=>{
            console.log("Fetching from fetchData1")
            res("Data from fetchData1")
        }, 1000)
    })
}

function fetchData2(){
    return new Promise((res)=>{
        setTimeout(()=>{
            console.log("Fetching from fetchData2")
            res("Data from fetchData2")
        }, 1000)
    })
}

fetchData().then((data)=>{
    console.log("Fetching", data)
    return fetchData1()
}).then((data1)=>{
    console.log("Fetching", data1)
    return fetchData2()
}).then((data2)=>{
    console.log("Fetching", data2)
})

// Activity 3 : Using Async/Await

// task 4 

async function resolvedValue(){
    const promise=new Promise((res)=>{
        setTimeout(()=>{
            res("Resolved after 2 Sec")
        }, 2000)
    })

    try {
        const result=await promise
        console.log(result)
    } catch (error) {
       console.error("Error", error) 
    }
}
resolvedValue()

// task 5 

async function handleRejectedPromise(){
    const promise=new Promise((_, rej)=>{
        setTimeout(()=>{
            rej(new Error("Something went Wrong"))
        }, 2000)
    })

    try{
        const result=await promise
        console.log(result)
    }catch(err){
        console.error("Error", err.message)
    }
}

handleRejectedPromise()

// Activity 4 : Feacthing Data from an API
//task 6

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

async function fetchData4() {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Problem with fetching: ", err);
  }
}

fetchData4();

// task 7 

async function fetchData3(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/photos')
    
    if(!response.ok){
        throw new Error("Network is not working")
    }

    const data=await response.json()
    console.log(data)
    }catch(err){
        console.log("Error Fetching : ", err)
    }
}
fetchData3()

