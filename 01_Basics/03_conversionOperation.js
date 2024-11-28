//typeof used to check the datatype
//if we convert "33and" into number it gives NaN not a number 
//NaN is special number
//null converts into 0 in number
//undeined given NaN in number

var x = "33absc"
let valueInNumber = Number(x);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" => 33
//"33ab" => NaN
//undefined => NaN
//null => 0

let num = 1
let num2 = Boolean(num);
// console.log(num2);

//1=>true, 0=>false
//""=>false
//"aa"=>true

let  some = null
let some2 = String(some)
// console.log(some2)
//-----  -----   ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// console.log(1+1+"2"+2+2)
// console.log("2"+21)
//before the string if all the integers present it will be summed together then converts into string

// console.log(+true)
// console.log(+"")
//both gives 1

//=================================TrickyComparisions================================
// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// console.log(undefined > 0)
// console.log(undefined == 0)
// console.log(undefined >= 0)
//in different type comparisions == works different and le,ge, works differently

//==
// console.log("2"== 2);







