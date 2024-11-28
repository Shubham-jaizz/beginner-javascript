// for of 
//["","",""];
//[{},{},{}]

//iteratable are arrays,objects, Strings;
const str = "Shubham";
for (const char of str) {
    console.log(`Each Characte in str: ${char}`);
}

//map -> data type
const map=  new Map();
map.set("in","India");
map.set("USA","United States");
map.set("fr","France");
// maps are unique and inserting according to insertion order 

for (const element of map) {
    // console.log(element)
}
//above loop this ans in the for of loop 
// [ 'in', 'India' ]
// [ 'USA', 'United States' ]
// [ 'fr', 'France' ]
for (const [key,value] of map) {// destructuring of key alue pair in the map
    // console.log(key,value);
}

//object is not iterable from for of loop
const myObj ={
    name:"Shubha",
    surname:"Jaiswal"
}
// for (const [element,value] of myObj) { // gives error object is not iterable from for of loopand also not destructuring is possible in object
//     // console.log(element);
// }
//so to iterate in object we use for In loops
const myObj2 = {
    js:"Javascript",
    cpp:"CplusPlus",
    rb:"Ruby",
    rsp:"Raspberry"
}

for (const key in myObj2) {
//   console.log(`key ${key} has value ${myObj2[key]}`);
}

const arr2 = ["yo","yup","yamil"];
for (const key in arr2) {// this gives hte indexes of the array
    // console.log(`index ${key} has value ${arr2[key]}`);
  }

  //map is not iterable in for in loops

//////  /////`/`//////  ////////////////////for Each and Map ////////////////////   //
const coding  = ["raspberry","cpp","python","shifted","c#"];

// coding.forEach((item)=>console.log(`coding language ${item}`))
// coding.forEach(printMe);
function printMe(item){
    console.log(`coding language ${item}`)
}
//in for Each loop function parameter has item,index as well as whole array accessiblity
 coding.forEach((item,index,arr)=>console.log(item,index,arr));


//for each doesnt gives return value it will gives undefined
//we can do map and filter loop with forEach loop also

