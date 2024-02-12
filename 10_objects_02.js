
// objects as singleton or constructor

//const obj = new Object()

let obj = {}
console.log(obj)
obj.admin = "Ashish"
obj.age = 24
console.log(obj.admin);

let newObj = {
    userName : "123asd",
    userDetail : {
        name : "Ashish Sangavkar",
        age : 23,
        mobile: {
            one : 7038201515,
            two : 9089786756
        }
    }
}

console.log(newObj);
console.log(newObj.userDetail?.age);

const obj1 = {one : 10, two:20};
const obj2 = {three : 30, four:40};

const obj3 = {...obj1, ...obj2}//first way

//const obj3 = Object.assign({}, obj1, obj2) // second way
console.log(obj3);

console.log(typeof obj3);

const user = [
    {
        id : 123,
        name : "Ashish"
    },
    {
        id : 123,
        name : "Ashish"
    },
    {
        id : 123,
        name : "Ashish"
    },
    {
        id : 123,
        name : "Ashish"
    }
]

console.log(user[1].name);

console.log(Object.keys(newObj));  // [ 'userName', 'userDetail' ]

console.log(Object.values(newObj));