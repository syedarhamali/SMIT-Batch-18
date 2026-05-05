// // Set Work 

// const values = new Set(['arham' , 'arham' , 'ashar' , 'zain'])

// values.has('arham') // true
// values.has('ashar') // true
// values.has('zain') // true
// values.has('smit') // false


// values.size // 3    

// values.add('smit') // Set(4) {"arham", "ashar", "zain", "smit"}
// values.forEach(value => console.log(value)) // arham ashar zain smit

// // Map Work 

// const fruits = new Map([["apples" , 100], ['bananas' , 200]])

// fruits.get('apples') // 100
// fruits.get('bananas') // 200

// fruits.forEach((value, key) => console.log(key, value)) // apples 100 bananas 200
// fruits.has('apples') // true


// let students = ['zain' , 'ashar' , 'tanveer' , 'rehan' , 'nabeel', 'sameer', 'bakhtiar', 'hammad']



// ascending order
// students.sort()

// // descending order
// students.sort().reverse()


// console.log(students)


let numbers =  [5, 2, 8, 1, 9 , 11 , 10 , 60 , 22, 25,32,99]

numbers.sort((a , b) => a -b ) // ascending order 
numbers.sort((a , b) => b -a ) // descending order 


// if a - b is negative then a will be sorted before b
// if a - b is positive then b will be sorted before a
// if a - b is 0 then a and b will be sorted in the same order as they appear in the original array

// numbers.reverse() // descending order (jugar)


console.log(numbers)