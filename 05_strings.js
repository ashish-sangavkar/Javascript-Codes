const name = "Ashish";

const birthYear = 2001;

console.log(name + " "+ birthYear); // 1st way but not recomended

console.log(`My name is ${name} and my birth year is ${birthYear}`);  // 2nd way to print and preffered way backticks(``) is used for this

console.log();

// another way to declare String

let newName = new String("Ashish Sangavkar");

console.log(newName);  // [String: 'Ashish Sangavkar']

console.log(newName.charAt(3)); //i

console.log(newName.toLowerCase()); //ashish sangavkar

console.log(newName.toUpperCase()); //ASHISH SANGAVKAR

console.log(newName.substring(1,6)); //shish

console.log(newName.replace("sh", "oo")); //Aooish Sangavkar

console.log(newName.concat(" wk batsman")); // Ashish Sangavkar wk batsman

console.log(newName.endsWith(("r"))); //true

console.log(newName.indexOf("s")); // 1
 
let stud = "    sjshjs   ";

console.log(stud); //   |    sjshjs     |
console.log(stud.trim()); // |sjshjs| removes spaces before and after string

console.log(newName.includes("ish")); // true

let gmail = "ashish-san-gavkar-47@gmail.com";

console.log(gmail.split("-"));  //  [ 'ashish', 'san', 'gavkar', '47@gmail.com' ]

console.log(gmail.search("r")); //  16



const myStr = "Ashish Sangavkar";

const newStr = myStr.replace(/a/g, '');

console.log(newStr); //Ashish Sngvkr

