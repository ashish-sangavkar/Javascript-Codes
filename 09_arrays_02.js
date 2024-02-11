const arr = [1, 2, 3, 4, 5];

const arr1 = [6, 7, 8, 9];

console.log(arr); // [1, 2, 3, 4, 5]
//arr.push(arr1);
console.log(arr);   // [6, 7, 8, 9]

//console.log(arr[5][2]);

//const arr2 = arr.concat(arr1);

const arr2 = [...arr, ...arr1, ...arr]; // this is spread operation

console.log(arr2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5 ]
    
const arr3 = [1, 2, 3, 4 , [5, 6, [7, 8, 9]]];

const arr4 = arr3.flat(Infinity);

console.log(arr4); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(Array.isArray("Ashish")); // false

console.log(Array.from("Ashish")); // ['A], 'b', 'c', [d]
let a= 100;
let b= 200;
let c= 300;

let d = Array.of(a, b, c);

console.log(d);