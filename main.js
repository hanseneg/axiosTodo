const title = document.getElementById('title')
const description = document.getElementById('description')
const image = document.getElementById('image')
const price = document.getElementById('price')
const submit = document.getElementById('submit')
const list = document.getElementById('list')

const getData = () => {
    axios.get("https://api.vschool.io/ethan17/todo")
    .then(response => {
        list.innerHTML = ""
        for(let i = 0; i < response.data.length; i++){
            const check = document.createElement('input')
            const div = document.createElement('div')
            const label = document.createElement('label')
            const deleteButton = document.createElement('button')
            deleteButton.id = 'deleteButton'
            deleteButton.innerText = 'Delete'
            check.type = 'checkbox'
            check.checked = response.data[i].completed
            //check.id = 'text'
            label.for = 'text'
            label.innerText = response.data[i].title
            div.appendChild(deleteButton)
            div.appendChild(check)
            div.appendChild(label)
            list.appendChild(div)

            //delete
            deleteButton.addEventListener("click", () => {
                if(confirm("Are you sure you want to delete?")){
                    axios.delete(`https://api.vschool.io/ethan17/todo/${response.data[i]._id}`)
                        .then(() => {
                            alert('Successfully Deleted')
                            getData()
                        })
                        .catch(() => {alert('Delete Unsuccessful')})
                }
            })
        
            //put
            check.addEventListener('click', (e) => {
                console.log(e)
            const updates = {
                completed: e.target.checked
            }
            if(e.target.checked){
                label.style.textDecoration = "line-through"
            }else{
                label.style.textDecoration = "none"
            }
            axios.put(`https://api.vschool.io/ethan17/todo/${response.data[i]._id}`, updates)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
            })

            if(response.data[i].completed === true){
                label.style.textDecoration = "line-through"
            }
            if(response.data[i].imgUrl){
                const img = document.createElement('img')
                img.src = response.data[i].imgUrl
                img.height = "50"
                img.width = "50"
                div.appendChild(img)
            }
        }
    })
    .catch(error => console.log(error))
}
getData()

//post
const todoForm = document.getElementById("form")

todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const newTodo = {
        title: title.value,
        description: description.value,
        image: image.value,
        price: price.value
    }
        todoForm.title.value = ""
        todoForm.description.value = ""
        todoForm.image.value = ""
        todoForm.price.value = ""
    
    axios.post("https://api.vschool.io/ethan17/todo", newTodo)
        .then(() => getData())
        .catch(error => console.log(error))
})