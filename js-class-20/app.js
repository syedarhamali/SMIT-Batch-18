var parentElement = document.getElementsByClassName("parent")[0]

console.log(parentElement , "parentElement")

var childElement = parentElement.childNodes[1]

console.log(childElement , 'child Element')

var grandChild = childElement.childNodes[1]

console.log(grandChild , 'grand child Element')

var greatGrandChild = grandChild.childNodes[1]

console.log(greatGrandChild , 'great grand child')