const myArray = [1,2,3,4,5,6,7,8,9]
// const aman = myArray.forEach(element => {
//      console.log(element);

// });
// console.log(aman);
// const aman = myArray.filter((element)=> element<3)
// console.log(aman);

// use of map
// const aman = myArray.map( (num)=>num+10 )
// console.log(aman);

// Chaining
// const aman = myArray.map((num)=> num*10).map((num)=> num+1).filter((num) => num>=40)
// console.log(aman);

// reduction

const arr = [1,2,3,4,5]
const aman = arr.reduce((acc,cv)=> acc+cv,0) //acc for acumulator whose initial value is zero and cv for current value of array
console.log(aman);
