//immediately Invoked function expressions
//why we use  => because of pollution of global scope, so to remove the pollution of global variales we use iife
// and also sometimes we want to immediately invoke the fucntion when we start the appication like database connection

(function chai(){

    //names IIFE
    console.log("DB CONNECTED");
})();// always put this when we use iife another wise it will not run the other iife code to run

((name)=>{

    //Simple IIFE
    console.log(`DB2 CONNECTED ${name}`);
})("Shubam")  

//////////////////////////////////important points////////////////////////////////
//to run continuously IIDE's then  put ";" after the second "()" parenthesis
// to put parameters put in the second "()" parenthesis