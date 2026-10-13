import { test, expect } from "@playwright/test";

// Class example in typescript
// • A class is a blueprint for creating objects with properties and methods.
// Class contain Properties, constructor and methods.

class Person {

    name: string;

    constructor(name: string) {

        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

const p1 = new Person("Sonam");
p1.greet(); // Output: Hello, Sonam



class student {

    ssn: number
    firstName: string;
    lastName: string;

    constructor(ssn: number, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getSSNDetails(): number {
        return this.ssn;
    }

    getFullDetails(): string {
        return `SSN: ${this.ssn} FirstName: ${this.firstName} LastName: ${this.lastName}`;
    }
}

test("student1Details", async ({ page }) => {
    let student1 = new student(555667777, "komal", "nema");
    console.log(student1.getFullName());
    console.log(student1.getSSNDetails());
    console.log(student1.getFullDetails());

});