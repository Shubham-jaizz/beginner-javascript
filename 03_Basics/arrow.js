const tcs ={
    established:1968,
    chairman:"N Chandrashekaharana",
    employees:600000,
    welcome:function (params) {
         console.log(`TCS heartly welcomes ${this.employees} employess`)
         console.log(this);
    }

}
// tcs.welcome();
// tcs.employees = 50000;//context changed
// tcs.welcome();

// console.log(this);//it gives the empty object in node environment but int chrome it gives windows object

function test(){
    let username = "SHubham"
    console.log(this);// this gives soomething
    console.log(this.username);//it is undefined only run in object inside
}
// test()
const chai = () => {
    let username = "chai"
    console.log(this);// this gives empty oject
}
const chai2 = () => "chai2" // implicit return
const chai3 = () => ({user:"Private "}) // implicit return for object we use () parenthesis

chai();

