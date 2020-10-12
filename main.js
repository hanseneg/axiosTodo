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
    })
    .catch(error => console.log(error))

//5f7cb303a269067180b0f22b

axios.put("https://api.vschool.io/ethan17/todo/5f7cb303a269067180b0f22b", updates)