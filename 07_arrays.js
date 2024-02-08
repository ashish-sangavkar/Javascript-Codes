
// Array is an object that stores values of same and different types


const  myArr  = [1, 2, 3, 4, 5];
console.log(myArr);  // [1, 2, 3, 4, 5]

const newArr = ["Ashsih", 1, 3, 5, "Ashish", true, false];
console.log(newArr); // [ 'Ashsih', 1, 3, 5, 'Ashish', true, false ]

const oneArr = new Array(1, 2, 3, 4, 5);

console.log(oneArr[4]); //5 


console.log("******************Array Methods****************************");

myArr.push(10); // adds value at end of array    // [ 1, 2, 3, 4, 5, 10 ]

console.log(myArr);

myArr.pop(10); // removes value from array   //[ 1, 2, 3, 4, 5 ]

console.log(myArr);

myArr.unshift(2); // adds value at start   //[ 2, 1, 2, 3, 4, 5 ]

console.log(myArr);

myArr.shift() // removes value from start  // [1, 2, 3, 4, 5 ]
myArr.shift() // [ 2, 3, 4, 5 ]


myArr.unshift(1);

console.log(myArr);

const newArr1  = myArr.join();

console.log(typeof newArr1);


console.log(myArr.slice(1, 3));  // returns index 1 to 2 values [2, 3]

console.log(myArr); // Array after slice [1, 2, ,3 ,4, 5]

console.log(myArr.splice(1, 3));  // returns index 1 to 2 values [2, 3]

console.log(myArr); // array after splice [1, 5]


const myStr = "Ashish Sangavkar";

const newStr = myStr.replace(/a/g, '');

console.log(newStr); //Ashish Sngvkr