ashish = function(){
    console.log("Ashish");
}

ashish()

function myFun(number1, number2) {
    let result = number1+number2;
    console.log(`addition of ${number1} and ${number2} is ${number1+number2}`);
    return result
}

console.log(myFun(10, 20)); 

function login(username){
    if(!username){
        console.log("true");  //
    }
    else{
        console.log("f");  // f
    }
}

login("ashish")

// passing multiple values

function addition(...num4){
    return num4;
}

// function addition(num1, num2, num3, ...num4){
//     return num4;
// }

console.log(addition(10, 20, 30, 40, 50));  // [10, 20, 30, 40, 50]

// object passing to function

const myNewObj = {
    username : "admin",
    name : "ashish"
}

function user(newOb){
    console.log(`username is ${newOb.username} and name is ${newOb.name}`);
}

user(myNewObj)

