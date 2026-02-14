var todo = []


function addTodo(){
    var userInput = document.getElementById("user-input")
    todo.push(userInput.value)

    console.log(todo)

    userInput.value = ''

    renderList()

}

function renderList(){
    var list = document.getElementById("list")

    list.innerHTML = ''
    for(var i = 0; i < todo.length ; i++){
        list.innerHTML += `<li> ${todo[i]} <button>Delete </button></li>`
    }

}