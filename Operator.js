console.log("Operators");

console.log("*\\Arithematic operators\\*")
console.log(10/2);
console.log(10/2.5)
console.log(10/0)
console.log(10/0.0)



console.log("Anil"/0)
console.log("Anil"/null)
console.log(10/null)


console.log(10/undefined)

let result=10+100+"Anil"
console.log(result);

let result1="Anil"+10+100
console.log(result1);

//coercion is the process of converting one data type to another data type. It can be implicit or explicit.
//coercion automatic or implicit coercion is the process of converting one data type to another data type automatically by the JavaScript engine.


let a="10"+9
console.log(a);

let b="10"-9
console.log(b);


let c="10"*9
console.log(c);

let d="Anil"/9
console.log(d);

let e=10/true
console.log(e);

let f=10/false
console.log(f);


console.log("*\\Equal operators\\*")


//"==" operator will do the neccessary type conversation before doing the equality comparsion

let num1="50"
console.log(typeof a);
let num2=50
console.log(typeof b);
if(num1){
    console.log("Matched");
}
else{
    console.log("Not Matched");
}   
//"===" operator will not do the type conversation so if the two values are not of the same type it will return true


console.log("=======================")
if(num1===num2){
    console.log("Matched");
}   
else{
    console.log("Not Matched");
}   



//
console.log("*\\Logical operators\\*")

let x=10
let y=20
let z=30
console.log(x>y)
console.log(x<y)
console.log(x>y && x>z)
console.log(x<y && x>z)
console.log(x<y || x>z)
console.log(!(x<y || x>z))


console.log(!true)
console.log(!false)

let str1="this is Js"
let str2="Js"

let str3="this is JS"
if(str1.includes(str2)){
    console.log("Pass");
}
else{
    console.log("Fail");
}


console.log("=======================")
if(str1===str3){
    console.log("Pass");
}
else{
    console.log("Fail");
}

console.log("=======================")
if(str1.toUpperCase()===str3.toUpperCase()){
    console.log("Pass");
}
else{
    console.log("Fail");
}


//
console.log("*\\postfix and prefix operators\\*")

let i=10
i=i+10
console.log(i);

i=i+10
console.log(i);
