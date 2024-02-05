const balance = 400;

console.log(balance) // 400
console.log(typeof balance); // number

console.log(balance.toString().length); //3
console.log(typeof balance); //number


const number = 123.896745; 

console.log(number.toFixed(3)); //123.896

console.log(number.toPrecision(3)); //124

const num = 100000;

console.log(num.toLocaleString("en-IN")); // display number in locale format   1, 00, 000

console.log("**************************Maths*************************************");

console.log(Math.abs(-5)); // 5 
console.log(Math.round(34.67)); // 35  

console.log(Math.ceil(4.1)); // always take larger value here here value is more that 4 so it will output 5
console.log(Math.floor(4.7)); // always take smaller value here here value is more that 4 so it will output 4

console.log(Math.sqrt(4)); //2
console.log(Math.max(3,5,1,4)); // 5
console.log(Math.min(3,5,1,4)); // 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);


