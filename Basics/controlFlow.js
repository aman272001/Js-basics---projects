// let a = 24;
// let b = "24";
// if(a==b){
//     console.log("Equal numbers");
    
// }else{
//     console.log("Unequal number");
    
// }
// console.log("Print successfully");

// const month = 3

// switch (month) {
//     case 1:
//         console.log("Jan");
//         break

//     case 2:
//         console.log("Feb");
//         break 

//     case 3:
//         console.log("March");
//         break

//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("Nothing to say");
//         break;
// }

// truthy values
// "0", "false", " ", [], {}, function(){}, 

// falsy value
// 0, -0, NaN, Null, undefined, "", false, BigInt 0n
// const aman = []
// if (aman.length===0) {
//     console.log("Empty array");
    
// }
// const obj = {}
// if (Object.keys(obj).length===0) {
//     console.log("Object is empty");
    
// }

// Nullish Coalescing Operator (??): null, undefined 

let val1
val1 = 23 ?? 42
console.log(val1);
val1 = null ?? 42
console.log(val1);
val1 = 23 ?? undefined
console.log(val1);
