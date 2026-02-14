var todo = []


function addTodo() {
    var userInput = document.getElementById("user-input")
    todo.push(userInput.value)
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