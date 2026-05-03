console.log("Conditional Statements in JavaScript")

//1. if statement
//2. if...else statement
//3. if...else if...else statement
//4. switch statement


if(true){
    console.log("This is if statement")
}

if(false){
    console.log("This is if statement")}

if(10>20){
    console.log("I m inside if statement")
}
else{
    console.log("I m inside else statement")
}

let browsername="FF"
if(browsername.includes("chrome")){
    console.log("Chrome is started")
}
else if(browsername.includes("firefox") || browsername.includes("FF")){
    console.log("Firefox is started")
}
else if(browsername.includes("edge")){
    console.log("Edge is started")
}
else{
    console.log("This supports only chrome, firefox and edge")
} 

//switch statement

switch(browsername){
    case "chrome":
        console.log("Chrome is started")
        break;
    case "firefox":
        console.log("Firefox is started")
        break;
    case "edge":
        console.log("Edge is started")
        break;
    default:
        console.log("This supports only chrome, firefox and edge")
}

let day=new Date().getDay
//console.log(day) 
switch(day){
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;  
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;  
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    
    default:
        console.log("Invalid day")
}
