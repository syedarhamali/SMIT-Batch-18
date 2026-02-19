function changeColor(){
    var elements = document.getElementsByTagName("h1")
    var body = document.getElementsByTagName("body")
    var color = document.getElementById("color")
    console.log(color.value)

    for(var i = 0 ; i < elements.length ; i++){
        // elements[i].style.color = 'red'
        // body[0].style.backgroundColor = 'blue'
        body[0].style.backgroundColor = color.value
    }
}