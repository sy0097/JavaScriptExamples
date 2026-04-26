console.log("Arrays in Js")


//In the JS array can have different types of data and it can have objects and functions as well
//push,pop, shift, unshift, splice, slice, indexOf, lastIndexOf, includes, find, findIndex, forEach, map, filter, reduce
//Max of an array program
let arr=[10,20,30,"Anil",true]
console.log(arr)

console.log(typeof arr)
max=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }   
}
console.log(max)
console.log(arr[5])

// we can pass string boolean and objects in the array as well

console.log(arr[4])
console.log(typeof arr[4])

console.log(arr.length)
console.log(arr[arr.length-2])


//push method is used to add the element at the end of the array and it will return the new length of the array
console.log(arr.push(40))
console.log(arr)

//unshift method is used to add the element at the beginning of the array and it will return the new length of the array
arr.unshift("Sy")

console.log(arr)


//pop method is used to remove the last element of the array and it will return the removed element

arr.pop()
console.log(arr)

//shift method is used to remove the first element of the array and it will return the removed element
arr.shift()
console.log(arr)


//splice method is used to add or remove the element from the array and it will return the removed element
//arr.splice(start, deleteCount, item1, item2, ...)    


arr.splice(1,2)
console.log(arr)

arr.splice(0,2)
console.log(arr)



// we can add array in the array as well
let arr1=[10,20,30,"Anil",true]
let arr2=[40,50,60,"John",false]
arr1.push(arr2)
console.log(arr1)
console.log("======================")
console.log(arr1[5])
console.log(arr1[5][3])

//we can add object in the array as well
console.log("======================")
let obj={
    "fname":"Anil",
    "lname":"Sy"
}
arr1.push(obj)
console.log(arr1)
console.log(arr1[6])
console.log(arr1[6].fname)
console.log(arr1[6]["lname"])
console.log("======================")



let arr4=[10,20,30,"Anil",true]
for(let i=0;i<arr4.length;i++){

console.log(arr4[i])

}

for(let i=0;i<arr1.length;i++){

console.log(arr1[i])

}