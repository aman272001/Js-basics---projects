//basic syntax

// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("My name is Aman");
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("Promise resolved");
    
// })

//without stored in variable syntax

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I studied Btech");
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("This is also resolved");
    
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Task 3");
//         resolve({username: "Aman", class: "Btech"})
        
//     }, 1000);
// }).then(function(user){
//     console.log(user);
    
// })

//with reject case

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "Aman", class: "btech"})
//         }else{
//             reject("Sorry something went Wrong")
//         }
//     },1000)  
// }).then(function(user){
//         console.log(user);
//         return user.username  
// }).then(function(username){
//     console.log(username);
// }).catch(function(Error){
//     console.log(Error);
// })

// promises by async and await

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Aman", class: "btech"})
//         }else{
//             reject("Sorry something went Wrong")
//         }
//     },1000)  

    
// })
// async function promisefive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// promisefive()

//fetch

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
        return response.json()
}).then(function(data){
        console.log(data);
        
}).catch(function(error){
    console.log(error);
    
})

