import { test, expect } from "@playwright/test";

// Class example in typescript

class Employee {

    name: string;
    id: number;
    salary: number;
    dep: string;

    constructor(name: string, id: number, salary: number, dep: string) {

        this.name = name;
        this.id = id;
        this.salary = salary;
        this.dep = dep;
    }

    getEmpName(): string {

        return this.name;

    }

    getEmpID(): number {

        return this.id;
    }

    getEmpSalary(): number {

        return this.salary;
    }

    getEmpDep(): string {

        return this.dep;
    }

    getFullEmpDetails(): string {

        return `${this.name} ${this.id} ${this.dep} ${this.salary}`;
    }

}

test("EmpDetails", async ({ page }) => {

    let Emp1 = new Employee("Puja", 101, 50000, "QA");
    let Emp2 = new Employee("Kopal", 102, 70000, "BA");

    console.log(Emp2.name)


    console.log(Emp1.id);
    console.log(Emp1.salary);
    console.log(Emp1.dep);
    console.log(Emp1.getEmpName());
    console.log(Emp1.getEmpID());
    console.log(Emp1.getEmpSalary());
    console.log(Emp1.getEmpDep());

    console.log(Emp1.getFullEmpDetails());

    console.log(Emp2.getFullEmpDetails());

    Emp2.name = "Sikka";
    console.log(Emp2.getFullEmpDetails());


});