import { test, expect } from "@playwright/test";

class Person {

    firstName: string;
    age: number;
    ids: number;
    lastName: string;

    constructor(firstName: string, age: number, ids: number, lastName: string) {
        this.firstName = firstName;
        this.age = age;
        this.ids = ids;
        this.lastName = lastName;
    }

    displayInfo(): void {

        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.ids);
        console.log(this.age);
    }
}

class Employee extends Person {

    empName: string;

    constructor(firstName: string, age: number, ids: number, lastName: string, empName: string) {

        super(firstName, age, ids, lastName);
        this.empName = empName;

    }

    getEmpName(): string {
        return this.empName;
    }
}

test("Testing", async ({ page }) => {

    let emp1 = new Employee("komal", 10, 101, "Nema", "Harshada");

    emp1.displayInfo();

    console.log("============================");
    console.log(emp1.getEmpName());

})