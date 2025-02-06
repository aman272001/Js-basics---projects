// const myFunct = function(){
//     console.log("Hello World");
//     console.log("My name is Aman");
// }   

// myFunct()

// const myFunct1 = function(number1, number2){  //function ke saath wale ko parameter kehte hai
//     return number1+number2  
// }
// myFunct1(5,5) //jab usko call karte h tab arguments kehte hai 
// const result = myFunct1(5,5)
// console.log("result:",result);

// function func(username){
//     return username+" just logged in"
// }
// console.log(func("Aman"))



function am(anyobject){
    console.log(`My name is ${anyobject.name} and my age is ${anyobject.age}`);
    console.log(`My first array element is ${myArray[1]}`);
    // return myArray[1]
}

const aman = {
    name: "Aman",
    age: 21
}

const myArray = [0,5,2,3,4,5]
am(aman)