function sayHello(userName = "Sam"){//default parameter if we give the argument then this will be overridden
    if(!userName){
        console.log("Please enter userName");
        return 
    }
    return `Hello ${userName}`;
}

// console.log(sayHello());// it gives undefines to the parameter of the function 

////////////////////////////////part2////////////////////////////////
function countCart(usr1,usr2,...usr3){
    console.log(usr3);//this gives array of [300,400]
}
countCart(100,2000,300,400)

const obj1 = {
    user:"Shubham",
    price:200
}
const arr = ["Madhav","Laxmi","vibha"]
function userPrice(object) {
    console.log(`${object.user} price starts from ${object.price}`)

}
function familyNames(object) {
    console.log(`${object[2]} price starts from ${object[3]}`)

}
familyNames(arr); //vibha price starts from undefined
userPrice(obj1);    //Shubham price starts from 200

////////////////////////////////    //////////////////////////   //////////////////   //////////////////
