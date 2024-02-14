
// for loop 
let element;
const arr = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

let pattrn = "";

const pattern = function(lines){

    for (let i = 0; i < lines; i++) {
       
        for (let j = 0; j <= i; j++) {
            pattrn +="* "   ;
        }
        pattrn+="\n";
        
    }
    return pattrn;
}

console.log(pattern(5));

const pattern1 = function(lines){

    for (let i = 0; i < lines; i++) {
       
        for (let j = lines; j > i; j--) {
            pattrn +="* "   ;
        }
        pattrn+="\n";
        
    }
    return pattrn;
}

console.log(pattern1(5));

for(const i in arr){
    console.log(i);
}

const names = ["ashish", "akshay", "avadhut", "meghanath", "chaitanya", "abhijeet"];
let index = 0;

while(index<names.length){
    console.log(names[index]);
    index++;
}

console.log("*********************************");
index = 0;

do{
    console.log(names[index]);
    index++;
}while(index>names.length);