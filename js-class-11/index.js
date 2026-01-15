var sentence = 'World War II changed the world forever. During World War II, many countries fought together and against each other. World War II affected soldiers, families, and cities. After World War II ended, people tried to rebuild their homes. Books about World War II teach us history lessons. Movies about World War II show bravery and sacrifice. Teachers talk about World War II in class. Museums remember World War II heroes. Even today, World War II stories are shared by grandparents. World War II remains one of the most important events in world history.'

// for (var i = 0 ; i <= sentence.length ; i++){
//   if(sentence.slice(i, i + 12) === 'World War II'){
//    sentence = sentence.slice(0,i) + 'The Second World War' + sentence.slice(i+12 )
//   }
// }


// var specificIndex = sentence.indexOf("World War II" , 3)

// if (specificIndex !== -1) {
// sentence = sentence.slice(0, specificIndex) + "the Second World War" + sentence.slice(specificIndex + 12);
// }
// console.log(sentence)

var newText = sentence.replaceAll("World War II", "the Second World War");

console.log(newText)


// var personName = 'Arham'

// var firstLetter = personName.slice(0,1)

// var firstLetter = personName.charAt(2)

// console.log(firstLetter)



function greeting() {
    for (var i = 1; i <= 10; i++) {
        document.write('2 x ' + i + '=' + (2 * i) + "<br />")
    }
}

