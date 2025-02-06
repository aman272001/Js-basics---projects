// const n = 10
// for(i =1; i<=n; i++){
//     console.log("5 x "+i," = "+ 5*i);
// }

for (let i = 1; i <= 10; i++) {
    
    if (i==5) {
        console.log("Here is your favrouite number "+ i);
        break
    }else if(i==2){
        console.log("Skipped number "+i);
        continue
    }
    console.log(`Your number is ${i}`);
    
    
}