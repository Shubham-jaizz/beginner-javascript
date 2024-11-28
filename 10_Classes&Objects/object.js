function multiplyBy2(num) {
    console.log(num*2);
}
// multiplyBy2(5);
// multiplyBy2.power = 2;
// console.log(multiplyBy2.power);
// console.log(multiplyBy2.prototype);// => it gives {} empty which gives th context of this 
//so function is also a object

function createUser(user,score){
    this.user = user;
    this.score = score;
    return this;
}
createUser.prototype.increment = function(){
    this.score += 1;
}
createUser.prototype.decrement = function(){
    this.score -= 1;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createUser("Chai",2); // with the usage of new keyword a object is created and prototype is linked with the object
const tea = createUser("Tea",4);
chai.printMe();
tea.printMe();// it gives fault


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/