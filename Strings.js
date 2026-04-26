// let name="Anil"
// console.log(typeof name);

// let lname=new String("Sy")
// console.log(typeof lname);

let fname="Hello Welcome to Java Script language"
console.log(fname.length)

console.log(fname[1]);
console.log(fname.includes("Java"));
console.log(fname.includes("java"));

console.log(fname.startsWith("Hello"));

console.log(fname.endsWith("language"));

console.log(fname.split(" "));

let arr=fname.split(" ")
console.log(arr[4]);
console.log(arr[6]);

console.log(fname.toUpperCase());
console.log(fname.toLowerCase());

console.log(fname.trim());

console.log(fname.replace("Java","Python"));


//string is immutable as its value is not going to change.

let finalmsg="Total price is 500 $"

let value=finalmsg.split(" ")[3]

console.log(typeof value);

let price=parseInt(value)
console.log(typeof price);
console.log(price);


if(price==500){
    console.log("Pass");
    
}

else{

    console.log("Fail");
    
}


let msg='Final \tprice on the bill is \'500\' \nUSD'
console.log(msg);
//let Msg=`final messeage on the price is '500' usd`

let x=500
let Msg=`final messeage on the price is ${x} usd`
console.log(Msg);








