
// objects literal

let mySym = Symbol('sym');

let me = {
    "name" : "Ashish",
    age : 23,
    [mySym] : "MSD",
    "mobile" : 7038201515,
    city : "sangli",
    language : ["marathi", "hindi"],
    "college" : "ADCET"
}

console.log(me.name); //
console.log(me['college']); //

me.age = 24

//to change the value 
console.log(me);

//Object.freeze(me);

me.age = 30;
console.log(me);

me.wish = function(){
    console.log("HAppy birthday");
}
console.log(me.wish);

me.wish2 = function(){
    console.log("welcome "+this.name);
}

console.log(me.wish2());