
let year = 2010;

if(year%4 == 0){
    console.log("leap year");
}else{
    console.log("not a leap year");
}

const arr = [1,2,3]

if(arr.length == 0){
    console.log("empty array");
}

const obj = {}

if(Object.keys(obj).length == 0){
    console.log("empty");
}

const month = 3;

switch(month){
    case 1: console.log("Jan");
    break;
    case 2: console.log("Feb");
    break;
    case 3: console.log("Mar");
    break;
    default:console.log("Select validate bet 1 to 3");
}


// nullish Coalescing Operator (??): null undefined

let val;

val = 5 ?? 10;
console.log(val);

val = null ?? 10;
console.log(val);

val = null ?? undefined;
console.log(val);

val = undefined ?? 10;
console.log(val);

val = undefined ?? 5 ?? 10;
console.log(val);



// ternary operator

const age = 17;

age>18 ? console.log("eligible") : console.log("not eligible");;