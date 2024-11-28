// class User {
//     constructor(userName,email,password) {
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.userName}ADD`;
//     }
// }

// const usr1 = new User("Shubam","simashubham.mj@gmail.com",12444);
// console.log(usr1.encryptPassword());
//Behind the scenes work

function User(userName,email,password) {
    this.username = userName;
    this.email = email;
    this.password = password;
    // this.encryptPassword = function () {
    //     console.log(this.username + ":" + this.email);
    // }
}

User.prototype.encryptPassword = function () { /// we can do function encryption by this way also
    console.log(this.username + ":" + this.email);
}
const usr1 = new User("Shubam","simashubham.mj@gmail.com",12444);

usr1.encryptPassword();
