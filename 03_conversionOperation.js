let score  = null;

console.log(typeof score); // object

let scoreInNum = Number(score);

console.log(typeof scoreInNum); // number

console.log(scoreInNum);  // Nan


let status = true;

console.log(typeof status);

let ad = Number(status);

console.log(typeof ad);
console.log(ad);

// Notes : 
    //  "33" = 33
    //  "33abc" = NaN  
    //  true = 1 / false = 0
    // undefined = NaN
    // null = 0

//*************************************************operations*************************************************** */

let value = 3;

let negValue = -value;

console.log(negValue);

    
console.log(1 + 2);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + "2" + 2);
console.log(1 + 2 + "2");


console.log("****************************************************");

let num = 5

let num1 = ++num;  // first increment value of num and then assign same type of operation with post increment and pre and post decrement 

console.log(num);
console.log(num1);