import { test, expect } from "@playwright/test";

// Page 4
// interface example in typescript
/*
What is an Interface? 
An interface in TypeScript is a way to define the structure of an object. It tells the compiler 
what properties and types an object should have. It's like a blueprint for objects. 
Interfaces help in: 
• Ensuring type safety 
• Making code more readable and maintainable 
• Supporting object-oriented programming

Syntax 
interface InterfaceName { 
  p1:: type; 
  property2: type; 

  add();

  sub(p1:type, b:number):number;
}

*/

//Example 1: Basic Interface 
interface Person {
    name: string;
    age: number;
}

const student: Person = {
    name: "John",
    age: 22,
};

console.log(student.name)
console.log(student.age);
//Here, the student object must match the structure defined in the Person interface.

// Example 2: Optional Properties 
// Use ? to make a property optional. 
interface Employee {
    id: number;
    name: string;
    department?: string; // optional 
}

const emp: Employee = {
    id: 101,
    name: "Alice"
};

const emp2:Employee={

      id: 102,
    name: "Pop",
    department: "HR"


}

// Example 3: Readonly Properties 
// Use readonly to prevent modification. 
interface Book {
    readonly isbn: string;
    title: string;
}

const b1: Book = {
    isbn: "123-abc",
    title: "Learn TypeScript"
};

// b1.isbn = "456-def";   Error: Cannot assign to 'isbn' because it is a read-only property.

//  4 Extending Interfaces

interface Animal {

    name: string; // p1 - nmae
}

interface Dog extends Animal {

    color: string; // p2 - dog

    displayColur(): void; // m2
}


test("DogDetails", async ({ page }) => {

    let d1: Dog = {
        name: "Poppy",
        color: "White",

        displayColur() {

            console.log(" The color of the dog is black ");
        }
    }

    console.log(d1.name, d1.color);
    d1.displayColur();

})

/*



Summary 
• Interfaces define the structure of objects. 
• They support optional, readonly, and function properties. 
• Interfaces can be extended for reusability. 
• They improve code clarity and maintainability.
*/