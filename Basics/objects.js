singleton = object.create

object literal

const mySym = Symbol("key1")

const aman = {
    name: "Aman",
    email: "amanraj27884@gmail.com",
    mobileNo: "8285431387",
    [mySym]: "myKey1",
    branch: "Btech",
    age: 21
}
console.log(aman["name"]);

console.log(aman.age);
console.log(aman.branch);
console.log(aman[mySym]);

console.log(typeof aman[mySym]);
console.log(aman);

aman.first = function(){
    console.log("Hello my name is Aman");
    
}
aman.first()
// console.log(aman.first());

// aman.second = function(){
//     console.log(`Hello my name is ${this.name} and my branch is ${this.branch} and my age is ${this.age}`);
    
// }
// aman.second()

// nested objects
// const newObj = {
//     name: "Aman",
//     class: "Btech",
//     age: {
//         fullage: {
//             myAge: 21
//         }
//     }
// }
// console.log(newObj.age.fullage.myAge);

// Add two objects

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const finalObj = {obj1, obj2}
// console.log(obj1);
// console.log(obj2);
// console.log(finalObj);
// const finalObj = Object.assign(obj1, obj2) // or Object.assign({}, obj1,obj2)
// console.log(finalObj);

// // short trick
// const finalObj2 = {...obj1, ...obj2}
// console.log(finalObj2);

// const amanUser = {
//     name: "Aman",
//     class: "Btech",
//     age: 21,
// }
// console.log(Object.keys(amanUser));
// console.log(Object.values(amanUser));
// console.log(Object.entries(amanUser));
// console.log(amanUser.hasOwnProperty('class'));

// object de-structure 

const amanUser = {
    name: "Aman",
    class: "Btech",
    age: 21,
}
const {name: n} =amanUser
console.log(n);

// Json API

// {
//     "name": "Aman",
//     "class": "Btech"
// }

// array of object
[
    {},
    {},
    {}
]