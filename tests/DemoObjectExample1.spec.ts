import{test,expect} from "@playwright/test";

test("ObjectExamples1", async({page})=>{

    // object contains properties and Behaviours 
    let employee={
         name:"john",
         salary:50000,
         age:30,
         dep:"engineer",

         getDetails:function():string{

           // console.log(this.name, this.salary, this.age, this.dep);
            return `${this.name} is a ${this.dep} earning ${this.salary}`;
         }
    }

    console.log(employee.getDetails());
    console.log(typeof employee); // object
    console.log(employee.name);
    console.log(employee.salary);
    console.log(employee.age);
    console.log(employee.dep);

let student={

    name:"Harsha",
    age:10,
    class:"Grade A",
    schoolName:"RKHighschool, Pulgaon",

    getDetailsOfStudent:function():void{

        console.log(`${this.name} is ${this.age} in ${this.schoolName} on ${this.class}`);
    }
}
// 1. accessing the object using . notation

console.log(student.getDetailsOfStudent());
console.log(student.name);
console.log(student.age);
console.log(student.class);
console.log(student.schoolName);
console.log(typeof student)

// 2. accessing the object using [] notation 
console.log(student["getDetailsOfStudent"]());
console.log(student["name"]);
console.log(student["age"]);
console.log(student["class"]);
console.log(student["schoolName"]);

// Modify the value

student.name="Komal";
console.log(student["name"]);

student.age=60;
console.log(student.age);

console.log(student["getDetailsOfStudent"]());




})