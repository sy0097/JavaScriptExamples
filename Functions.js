console.log("Functions in JavaScript")


// Set of statements that performs a task or calculates a value is called a function in JavaScript
// Every function in JavaScript is an object

function myFunction(){
    console.log("This is a function")
}

console.log(myFunction) // [Function: myFunction]
myFunction() // This is a function

function add(a,b){
    return a+b
}
console.log(add(10,20)) // 30

console.log(typeof add) // function

//Funcations Expressions
let a=function(){
    console.log("This is an anonymous function")
    return "Hello"
}

let result=a()
console.log(result)

let b=function(n1,n2,n3){
    console.log("This is a named function expression")
    return n1+n2+n3
}
console.log(b(10,20,30))

let myobj={
    Name: "Anil",
    f1: function(){
        console.log("This is a function inside an object")
    }   

}
//console.log(myobj.f1()) // This is a function inside an object
myobj.f1()

let arr=[1,"Anil",f2=function(){
    console.log("This is a function inside an array")
}]

arr[2]() // This is a function inside an array
let y=arr[2]
y() // This is a function inside an array
 
let z=(x1,x2)=>{
    console.log("This is an arrow function")
    return x1+x2
}

console.log(z(10,20)) // This is an arrow function 30


let z1= () => console.log("This is an arrow function without parameters")
z1()


let z2 = (Street, city) => console.log(`${Street} ${city} Bangalore`)

z2("MG Road", "Belagavi") // MG Road Belagavi Bangalore

