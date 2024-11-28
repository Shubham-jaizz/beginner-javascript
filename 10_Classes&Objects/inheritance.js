class Teacher{
    constructor(id, dept,name) {
        this.id = id;
        this.dept = dept;
        this.name= name;
    }

    show(){
        console.log(`${this.name}  id is ${this.id}`);
    }
}
class ClassTeacher extends Teacher {
    constructor(id, dept,name,className) {
        super(id, dept,name);
        this.className = className;
    }
    showClassTeacher(){
        console.log(`${this.className} class teacher is ${this.name}`)
    }

}
const teacher12th  = new ClassTeacher(12,"maths","Shubham","12th");
const teacher11 =  new Teacher(15,"science","vibha");

teacher12th.showClassTeacher();
teacher11.show();
teacher12th.show();

console.log(teacher11 === Teacher);
console.log(teacher12th === ClassTeacher);
console.log(teacher12th instanceof ClassTeacher);