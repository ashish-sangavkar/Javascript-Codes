let score  = null;

console.log(typeof score); // string

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

