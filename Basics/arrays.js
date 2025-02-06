const aman = ["Manisha", "Aman", "Avnish"]
console.log(aman);
aman.push("Tanishq")
console.log(aman);
aman.pop()
console.log(aman);

// const newAman = aman.join()
// console.log(newAman);
// console.log(typeof newAman);

// slice and splice

// const arrInitial = [0,1,2,3,4,5]

// console.log(arrInitial);

// const arr1 = arrInitial.slice(1,3)
// console.log(arr1);
// console.log(arrInitial);

// const arr2 = arrInitial.splice(1,3)
// console.log(arr2);
// console.log(arrInitial);

// Adding up two arrays:-
// There are push which is use for add new element in array but they took whole array as one element like:- 
const marvelHeros = ["Thor", "Wanda", "Hulk"]
const dcHeros = ["Superman", "batman", "Hercules"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);

// instead we using concat

// const newHeros = marvelHeros.concat(dcHeros)
// console.log(newHeros);

// Other short way to add arrays is:-

// const finalHeros = [...marvelHeros,...dcHeros]
// console.log(finalHeros);

// If there are an array which include subarrays as well then:- 

// const newArray = [1,2,3,[4,5],6,[7,8,[9,10]]]
// const sortedArray = newArray.flat(Infinity)
// console.log(sortedArray);

// Convert string to array
// console.log(Array.from("Aman"));

// Create an array using some variables
// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));
