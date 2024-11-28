const balance  = 500;
if(balance > 0) console.log(balance),console.log("yupp"); //implicit declaration of the if else ;

/// truthy and falsy values
//falsy values =>
//  false,0,-0, BigInt 0n, "", null, undefined, NaN;
 //except this all are truthy values
 // e.g interesting one => "0","false"," ",[] ,{} ,function(){};

 const emptyObj = {};
 if(Object.keys(emptyObj).length === 0){
    console.log("emptyobject");
 }

 //fale == "" =>true
 //false == 0 =>true;
 //0 == "" =>true;

// NULLISH COALESCING OPERATOR (??): null undefined 
let val1;
// val1 = null ?? 5;
val1 = undefined ?? 15;//gives 15
val1 = 5 ?? 15 // gives first value;
val1 = undefined ?? 15 ?? 30 // takes 15 as this is the first value;

//Ternary operator
let price = 20;
price <20 ? console.log("chusss"):console.log("maa chudsay");


console.log(val1); //=> gives 5 as it prevents to take undefined and null values that can harm the code structure