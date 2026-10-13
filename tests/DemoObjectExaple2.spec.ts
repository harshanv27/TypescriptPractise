import { test, expect } from "@playwright/test";

test("ObjectExamples2", async ({ page }) => {

    // Inline type object - here we also define the datatype of the keys.
    // Inline type object means first we declare the object and then we will define the object.
    // Problem with Inline Type object - need to repaet the structure for every object

    let student: {

        name: string,
        age: number,
        class: string,
        schoolName: string,
        getStudentDetails: () => string
    } = {

        name: "Dhruvit",
        age: 1.5,
        class: "Play school",
        schoolName: "Podar International school",

        getStudentDetails: function () {

            return `${this.name} age is ${this.age} year old and  he will go to the 
            ${this.schoolName} and in class ${this.class}`;

        }
    }

    console.log(student.getStudentDetails());
    console.log(student.name);
    console.log(student.age);
    console.log(student.class);
    console.log(student.schoolName);


});
