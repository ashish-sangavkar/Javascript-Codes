
//********************get character from a index********************* */

let s = "Ashish Sangavkar";
let c = s.charAt(7)
console.log(`character of 7  is ${c}`); // S

//********************get index of character********************* */
let i = s.indexOf('h')
console.log(`index of h  is ${i}`); // 2

//********************reverse a string********************* */

let s1 = s.split('').reverse().join('');
//split convert string into array , array has reverse method for reverse, and join joins array into string
console.log(s1); // rakvagnaS hsihsA

//********************find numbers from  a string********************* */

s = "ashish234Sangav453";
let num = s.replace(/[^0-9]/g, "");
// replace not a num character with "" and store remaining characters that are numbers
console.log(num);

//********************titlecase a string********************* */

s = "employee management system using spring boot";
s1 = s.split(' ');
s2 = "";
s3 = "";
for(let i = 0; i<s1.length; i++){
    s2 += (s1[i].charAt(0).toUpperCase()+s1[i].slice(1)+ " ")+ '';
}
console.log(s2);

//********************delete characters from a string********************* */

s = "ashish sangavkar";
s1 = s.replace(/a/g,"");
console.log(s1);

//********************delete first char from a string********************* */

s = "ashish sangavkar";
s = s.replace(s.charAt(0),"");
console.log(s);

//********************delete first char from a string********************* */