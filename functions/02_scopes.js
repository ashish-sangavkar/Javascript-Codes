// let a = 10;
// const b = 20; 
// var c = 30;

var c = 30;

if(true){
    let a = 1000;
    const b = 2000; 
    var c = 3000;
}

//console.log(a);
//console.log(b);
console.log(c);

let d = 100;
var c = 400;

if(true){
    let d = 200;
    var c = 500;
    console.log(`in function d = ${d} and  c = ${c}`);  // d = 200 and c = 500
}

console.log(`d = ${d} and  c = ${c}`); // d = 100 and c = 500

// thats why var is not used in js


// ***********************************nested scopes****************************************//

function one(){
    const username = "ashish";

    function two(){
        const website = "google.com"
        console.log(username);
    }
    ///console.log(website);

    two()
}
one()