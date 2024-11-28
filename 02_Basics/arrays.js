const arr1 = [1, 2, 3, 4]

const arr2 = new Array("Shubham","Sneha","Harshada");

console.dir(arr2);
arr1.push(1);
arr1.pop();

arr1.unshift(9);
//add it into first index of array
arr1.shift();
//deletes first index item

//console.log(arr1.includes(9));//=>gives bool value
//console.log(arr1.indexOf(9));//=>gives index of the value if not found gives -1

const newArr = arr1.join()//=> join and convert into string;
// console.log(typeof newArr);


//slice and splice;
// console.log("A" ,arr1);

const newArr2 = arr1.slice(0,3)
// console.log(newArr2);

// console.log("B" ,arr1);
const newArr3 = arr1.splice(0,3);
// console.log(newArr3)
// console.log(arr1)

//ans id
// A [ 1, 2, 3, 4 ]
// [ 1, 2, 3 ]
// B [ 1, 2, 3, 4 ]
// [ 1, 2, 3 ]
// [ 4 ]

//so splice tranform the original array and gives the whole raange in answer but in the slice into gives new array

// console.log(arr1);
///////////////////////////////////////////////////part two of array//////////////////////////////////////
arr1.push(arr2);//=>  functions gives array inside array;
const newArr4 = arr1.concat(arr2);//=>it gives new array 
const allArr = [...arr1, ...arr2];//= works same as concat


// console.log(allArr);


let ex = [1,2,3,[4,5],[6,7,[8,9]]]
let ex2 = ex.flat(Infinity)//=>we can give upto what depth we want to flat the arrray;
console.log(ex2)

console.log(Array.isArray(ex2));
console.log(Array.from("Shubham"));
console.log(Array.from({name: "Shubham"}));//=> we have to precise here whther we want to convert from key or value into array

let val1 = 2;
let val3= 2;
let val2 = 2;
console.log(Array.of(val1,val2,val3));