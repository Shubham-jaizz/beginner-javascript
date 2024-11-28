function setUserName(user) {
    //complex DB calls;
    this.userName = user;
}
function createUser(user,email,password) {
    setUserName(user);//this does not gives the referece of context of this object
    setUserName.call(this,user);//this gices the referece of context of this object without this above function will call the global execution context and it got removed when it executoion ends
    this.email = email;
    this.password = password;
}
const usr = new createUser("Subha","simassubha.mj@gmail.com",12444);
console.log(usr);