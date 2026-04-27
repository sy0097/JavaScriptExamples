console.log("Objects")

// Objects are a collection of key-value pairs. They are used to store data in a structured way.
// Objects are a collection of properties
// Whatever is not primitive is an object in JavaScript
console.log("===================")
let obj1={}
console.log(typeof obj1) // object


let obj2={
    "Name": "Anil",
    "Address": "Bangalore",
    "Number": 12345678,
     status: true
}

console.log(obj2)

// Accessing the properties of an object
console.log(obj2.Name) // Anil
console.log(obj2["Address"]) // Bangalore
console.log(obj2.Number) // 12345678
//console.log(obj2.status) // true
console.log(obj2["status"]) // true

console.log(obj2["Salary"])
// Adding a new property to an object
obj2.Salary = 50000
console.log(obj2)
// Deleting a property from an object

delete obj2.Salary
console.log(obj2)
console.log("===================")

let obj3={
    "Name": "Sy0097",
    "State": "Karnataka",
    "City": "Bangalore",
}

console.log(obj3)
obj2.FullAddress=obj3
console.log(obj2)

// delete obj2.FullAddress
// console.log(obj2)



//Arrays
obj2.Hobbies=["Reading","Traveling","Cooking"]
console.log(obj2)

console.log(obj2.FullAddress.City) // Bangalore
console.log(obj2["Hobbies"][1]) // Traveling

obj2.myFunction=function(){
    console.log("This is a function inside an object")
}

console.log(obj2)
obj2.myFunction()


let Anil=obj2
console.log(typeof Anil) // object
console.log(Anil)

delete Anil.FullAddress
console.log(Anil)
console.log(obj2) // FullAddress is also deleted from obj2 because Anil and obj2 are referencing the same object in memory

obj2.SomeRandomValue="Random"
console.log(Anil) // SomeRandomValue is also added to Anil because Anil and obj2 are referencing the same object in memory  
