// const aman = {
//     name: "Aman",
//     class: "Btech",
//     yoyo: function(){
//         console.log(`My name is ${this.name}`);
//         console.log(this);
        
//     }
// }

// aman.yoyo()
// aman.name = "Manisha"
// aman.yoyo()
// console.log(this);

// function haha(){
//     let name = "Aman"
//     console.log(this.name);
    
//     console.log(this);
    
// }
// haha()

// const small = () => { //arrow function () => {}
//     let aman = "Abhas"
//     console.log(this.aman); // "this" not accessesible in arrow function nor in normal function  
    
//     // console.log(this);
    
// }
// small()

// Explicit return

// const impli = (num1,num2) => {
//         return num1+num2   //explicit return when you forcly return by writing return
// }
// console.log(impli(3,4))

// instead of this u also use Implicit return 

// const impli = (num1,num2) => (num1+num2)  //They don't require return 
// console.log(impli(3,4))

// If we want to return an object

// const impli = (num1,num2) => ({username: "Aman"})//We use parenthesis for return an object 
// console.log(impli())