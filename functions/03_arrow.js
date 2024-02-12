const ob = {
    username : "Ashish",

    welcomeMsg : function(){
        console.log(`${this.username} welcome to system`);
        console.log(this);
    }
}

ob.welcomeMsg()
ob.username = "Admin";
ob.welcomeMsg()

console.log(this);

//this can be only used in object


// arrow functions

const myData = () => {
    let username = "asish";
    console.log(username);
}
myData()


// addition program in arrow function

const addition = (num1, num2) => {return num1+num2}

console.log(addition(10, 20)); // 30

const sub = (num1, num2) => (num1 - num2);

console.log(sub(50, 20)); // 30

const objectReturn = (num1, num2) => ({username:"ash"})

console.log(objectReturn()); // { username: 'ash' }
 