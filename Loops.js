console.log("Loops in JavaScript")


//loops are used to execute a block of code repeatedly until a specified condition is true
//There are 4 types of loops in JavaScript
//1. for loop
//2. while loop
//3. do while loop
//4. for...in loop
//5. for...of loop

for(let i=0;i<=10;i++){
    console.log("i Value is: "+i)
}

console.log("================================")
for(let i=10;i>=0;i--){
    console.log("i Value is: "+i)
}

console.log("================================")
for(let i=0;i<=10;i=i+2){
    console.log("i Value is: "+i)
}

console.log("================================")
let c=0
for(;c<=10;c++){
    console.log("c Value is: "+c)
}



//Array of numbers

let arr=[1,40,50,60,90]
for(let i=0;i<arr.length;i++){

    console.log("Array element at index "+i+" is: "+arr[i])
    //console.log(arr[4])
    
}

arr.forEach(element => {
    console.log("Array element is: "+element)
})

//for of loop
for(let raj of arr){
    console.log("Using for of loop: "+raj)

}

//for in loop it will return the index of the array
for(let index in arr){
    console.log("Using for in loop:"+index)
    console.log("Array element at index "+index+" is: "+arr[index])
}

let fname="Hello JavaScript language"
for(x of fname){
    console.log(x)
}

let myobj={
    name:"Raj",
    age:30,
    city:"Delhi",
    status: true
}

console.log(myobj)
for(let key in myobj){
    console.log("Key is: "+key+" and value is: "+myobj[key])
}


for(let key in myobj){
    console.log("Key is: "+key+" and value is: "+myobj[key])
}

//while loop
let sum=5
while(sum<=15){
    console.log("Sum is: "+sum)

    if(sum==10){
        break
    }
    sum++
}

//break statement is used to exit the loop when a specified condition is true
let sum1=5
while(sum1<=15){
    console.log("Sum1 is: "+sum1)

    if(sum1==10){
        sum1++
        continue
    }
    sum1++
}

//ddo while loop
let sum2=5
do{
    console.log("Value is: "+sum2)
    sum2++
}while(sum2<=15)



