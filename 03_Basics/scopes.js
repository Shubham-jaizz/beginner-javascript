
if (true) {
    const a = 10
    let b = 100
    var c = 1000
}
// console.log(a)
// console.log(b)
console.log(c)//it gives 1000 so var leaks out of the block scope so its scary 

//  +++++++++++++++++++++++++++Interesting++++++++++++++++  (mini hoisting)

addOne(5);
addTwo(5);// this gives error as it is not hoisteed only named functions are hoisted
function addOne(value){
    return value+1;
}

const addTwo = function (value){
    return value+2;
}


