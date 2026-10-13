import { test, expect } from "@playwright/test";
// page 6
// A Type Alias in TypeScript allows us to give a custom name to a type. 
// We use the type keyword to create a type alias.
//It helps make code more readable, reusable, and easier to maintain.

test("alliastest1", async ({ page }) => {

    /*
type is the keyword used to create an alias.
StudentName is the custom type name.
string is the original TypeScript type.
Variables using StudentName must contain strings.
*/
type StudentName = string;

let name1: StudentName = "Rama";
let name2: StudentName = "Rahul";

console.log(name1);
console.log(name2);

    type student = {

        name: string,
        class: string,
        age: number,
        dep: string,
        getInfo: () => string,
    }

    
    let stu1 = {
        name: "Sonika",
        class: "A",
        age: 12,
        dep: "Electrical",
        getInfo: function () {

            return this.name;

        }
    }

    let stu2 = {

        name: "Sonu",
        class: "B",
        age: 10,
        dep: "QA",
        getInfo: function () {

            return this.age;

        }
    }

    let stu3 = {

        name: "komal",
        age: 28,
        dep: "Ar",

        getInfo: function () {

            return this.dep;
        }
    }

    console.log(stu1.getInfo());
    console.log(stu2.name);
    console.log(stu3.dep);
    console.log(stu3.getInfo());
    console.log(stu2.getInfo());

})