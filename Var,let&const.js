// Var let const 

// Var is function scoped and can be redeclared and updated
var Name="Anil"
console.log(Name) // Anil


//let can be updated but not redeclared and is block scoped
let age=30
//let age=40 // SyntaxError: Identifier 'age' has already been declared
//console.log(age) // 30 here we will get an error because we cannot redeclare a variable declared with let

//now using let I m updating the value of age
age=40
console.log(age) // 40



//const cannot be updated or redeclared and is block scoped
const toolname="VS Code"
//toolname="Sublime Text" // SyntaxError: Identifier 'toolname' has already been declared
console.log(toolname) // VS Code here we will get an error because we cannot redeclare a variable declared with const

//var can be used outside of the block but let and const cannot be used outside of the block in the loop
for(var i=0;i<5;i++){
    console.log(i)
}
console.log("Outside the loop: " + i) // 5 here we can access i because var is function scoped

for(let j=0;j<5;j++){
    console.log(j)
}
//console.log("Outside the loop: " + j) // ReferenceError: j is not defined here we cannot access j because let is block scoped

//using const in the loop
// console.log("Using const in the loop")
// for(const k=0;k<5;k++){
//     console.log(k)
// }

// console.log("Outside the loop: " + k) // ReferenceError: k is not defined here we cannot access k because const is block scoped


var a
let b
const c=10
console.log(a) // undefined
console.log(b) // undefined
console.log(c) // SyntaxError: Missing initializer in const declaration here we will get an error because we cannot declare a variable with const without initializing it

//we have to assign a value to a const variable at the time of declaration otherwise it will throw an error

console.log("================================")

var x=10

if(true){
    var x=20
    console.log(x) // 20 here we can access x because var is function scoped
}

console.log("Outside the block: " + x) // 20 here we can access x because var is function scoped


let y=10
if(true){
    let y=20
    console.log(y) // 20 here we can access y because let is block scoped
}
console.log("Outside the block: " + y) // 10 here we cannot access y because let is block scoped


const z=10
if(true){
    const z=20
    console.log(z) // 20 here we can access z because const is block scoped
}
console.log("Outside the block: " + z) // 10 here we cannot access z because const is block scoped
