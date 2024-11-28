// there are two types of data type in javascript on the basis of how they are stored and accessed. -->interview
//primitive they are always call by value because
// 7 types => int,number,string,null,undefined,symbol,BigInt

//reference types (non primitive)
//Arrays, Objects, Functions

let arr = ["a", "b", "c"];
let func = function (params) {

    // console.log("Hello world");
}
let obj = {
    ok:true,
    name: "Hello"

}
// console.log(typeof arr);
// console.log(typeof func);
// console.log(typeof obj);

//every non primitive datatype is object and function is functional object;


//++++++++++++++++++++++++++++++++++++++++++++++++  =================================================
//Stack(primitive)  Heap(Non primitive);
let ghrName = "Jaiswal house"
let ghr2 = ghrName;
ghr2 = "jassu hoise";

// console.log(ghrName, ghr2);
//stack uses call by value

let obj3 = {
    ghr:"jassu hoise"
}
let ghr4 = obj3;
ghr4.ghr = "pintu House";
console.log(obj3.ghr,ghr4.ghr);
//any thing goes into heap it gives reference of that infact variables are initialized in stack and only reference of obj given to the variable


