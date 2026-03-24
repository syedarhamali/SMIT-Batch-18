var todo = JSON.parse(localStorage.getItem("todo")) 

console.log(todo)

showList()

function addTodo() {
    var userInput = document.getElementById("user-input")
    todo.push(userInput.value)
    localStorage.setItem('todo', JSON.stringify(todo))
    userInput.value = ''
    showList()
}

function showList() {
    var list = document.getElementById("list")
    list.innerHTML = ''
    for (var i = 0; i < todo.length; i++) {
        list.innerHTML += `<li> ${todo[i]} <button onclick='deleteItem(${i})'>Delete</button> <button> Edit</button> </li>`
    }
}


function deleteItem(index){

    todo.splice(index , 1)
    showList()
}


// localStorage.setItem('MyName','Syed Muhammad ARHAM Ali')

// var savedData = localStorage.getItem('MyName')

// console.log(savedData)