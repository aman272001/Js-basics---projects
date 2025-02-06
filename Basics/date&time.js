// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);
// console.log(myDate.getMonth()+1);
// console.log(myDate.getDay());
// console.log(myDate.getDate());
let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long",
    // month: 5
})
console.log(newDate.toDateString());

