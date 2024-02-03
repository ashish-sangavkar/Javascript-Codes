// stack    and     heap

// primitive = stack
// non primitive or reference  = heap

// stack gives copy of value

// heap gives reference of value

console.log("**************************************");
//Example of stack: 

let a = "Ashish";
let b = a;

console.log(a);
console.log(b);

b = "Akshay";

console.log(a);
console.log(b);

// in above example stack gives copy of a to b thats why when new value is assign to b it will not affect to value of a 

console.log("**************************************");
//Example of heap: 

let student = {
    email: "ashish@gmail.com"
}

let teacher = student;

console.log(student.email);
console.log(teacher.email);

teacher.email = "akshay@gmail.com"

console.log(student.email);
console.log(teacher.email);

// in above example reference of student is given to teacher thats why when we change value of teacher then it will changes value of student