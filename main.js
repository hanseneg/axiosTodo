const title = document.getElementById('title')
const description = document.getElementById('description')
const image = document.getElementById('image')
const price = document.getElementById('price')
const submit = document.getElementById('submit')
const deleteForm = document.getElementById('deleteForm')
const deleteButton = document.getElementById('deleteButton')
const list = document.getElementById('list')

const updates = {
    completed: true
}

axios.get("https://api.vschool.io/ethan17/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const check = document.createElement('input')
            const div = document.createElement('div')
            const label = document.createElement('label')
            check.type = 'checkbox'
            check.id = 'text'
            label.for = 'text'
            label.innerText = response.data[i].title
            div.appendChild(check)
            div.appendChild(label)
            list.appendChild(div)
        }
        if(response.data[i].completed === true){
            label.strike()
        }
    })
    .catch(error => console.log(error))

//5f7cb303a269067180b0f22b


//put
axios.put("https://api.vschool.io/ethan17/todo/5f7cb303a269067180b0f22b", updates)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

// const updates = {
//     title: "My Second Todo",
//     description: "This is my second todo"
// }

// axios.put("https://api.vschool.io/scrimbalessons/todo/5d8bd531ee91575e6d49e06f", updates)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

//post
const todoForm = document.getElementById("form")

todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const newTodo = {
        title: title.value,
        description: description.value,
        imgUrl: image.value,
        price: price.value
    }
    
    axios.post("https://api.vschool.io/ethan17/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    
})

//delete
const button = document.getElementById('delete-button')

button.addEventListener("click", function(){
    axios.delete("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})








//auto update


// GET's THE TODO's FROM THE DATABASE
// function getData(){
//     axios.get("https://api.vschool.io/johnsmith2/todo")
//         .then(res => listData(res.data))
//         .catch(err => console.log(err))
// }



// // LISTS THE TODO TITLES TO THE DOM
// function listData(data){
//     // document.getElementById('todo-list').innerHTML = ""
//     clearList()
    
//     for(let i = 0; i < data.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = data[i].title
//         document.getElementById('todo-list').appendChild(h1)
//     }
// }

// function clearList(){
//     const el = document.getElementById('todo-list')
//     while(el.firstChild){
//         el.removeChild(el.firstChild)
//     }
// }

// getData()


// // FORM FOR THE POST REQUEST
// const todoForm = document["todo-form"]

// todoForm.addEventListener("submit", function(e){
//     e.preventDefault()
    
//     const newTodo = {
//         title: todoForm.title.value
//     }
    
//     todoForm.title.value = ""
    
//     axios.post("https://api.vschool.io/johnsmith2/todo", newTodo)
//         .then(res => getData())
//         .catch(err => console.log(err))
// })

