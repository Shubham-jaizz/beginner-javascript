// Singleton => when made by object literals they it will never be singleton and if it will be created by constructor it is singleton


// Object literals
// const mySym = Symbol("myKey1");
// // console.log("mySym", mySym);
// const obj1 = {
//     name:"Shubham",
//     "user Name":"ShubhuJazz_1",
//     [mySym]:"MySym1",
//     age:18,
//     location:"Jaiput",
//     isLoggedIn:false
// }
// console.log(obj1.name);
// // console.log(obj1.user Name);//=> False you have to acces by obj1["user Name"];
// console.log(obj1["user Name"]);
// console.log(obj1[mySym])//=> refers to that symbol;

// obj1.name = "vibha";
// // Object.freeze(obj1);//it freezes the object to modiy
// console.log(obj1.name);
// obj1.name = "vibha2";
// console.log(obj1.name);

// obj1.greeting = function(){
//     console.log("Hello Bro")
// }
// obj1.greeting();
// obj1.greeting2 = function(){
//     console.log(`Hello ${this.name}`);
// }
// obj1.greeting2();

///////////// ////part two  ///////////////
const tinderUser  = new Object();//singlton object

tinderUser.name = "Shubham"
tinderUser.id = "11ABbb";
tinderUser.email = "shubham@gmail.com";
tinderUser.password = "99299"


const khatiya ={
    type:{
        material:{
            name:"thaat",
            material:"iron",
            newad:"Cotton"
        }
    },
    village:"Birkona"

}
// console.log(khatiya.type?.material.name)// for if else
// console.log(khatiya.type.material.name)

const obj1 ={1:"1",2:"2",3:"3"}
const obj2 ={4:"4",5:"5"}

// const obj3 = {obj1,obj2};//not recommende creates obj inside obj
// const obj3 = Object.assign({}, obj1, obj2);//it puts obj1 in obj2 into target {} object

const obj3 = {...obj1, ...obj2};// most recommneded

// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
const ans1 = tinderUser.hasOwnProperty('id')? tinderUser["id"]:"Teri ma ki chut hosdkike";
// console.log(ans1)

//answer of the aove consoles
// [ 'name', 'id', 'email', 'password' ]
// [ 'Shubham', '11ABbb', 'shubham@gmail.com', '99299' ]
// [
//     [ 'name', 'Shubham' ],
//     [ 'id', '11ABbb' ],
//     [ 'email', 'shubham@gmail.com' ],
//     [ 'password', '99299' ]
// ]
// 11ABbb


///////////////////////////////Destructuring PART3 //////////////////////////////////////
const course = {
    subject:"Javascript",
    length:6,
    price:1000,
    instructor:"SHubham"
    
}

const {subject:sub, price:ru, instructor:ins} = course;
console.log(sub,ru,ins);

//JASON format
// {
//     "subject":"Javascript",
//     "length":6,
//     "price":1000,
//     "instructor":"SHubham"
    
// }






