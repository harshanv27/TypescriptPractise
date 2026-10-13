import { test, expect } from "@playwright/test";
// Page 5
// interface example in typescript

// class can extend another class 
// Interface can extend another interface.
// class can implements interface

interface Animal {
    name: string;
    age: number;
    display(): void;
}

class Dog implements Animal {

    name: string;  // from interface
    age: number;   // from interface
    color: string // from class

    constructor(name: string, age: number, color: string) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    display(): void {
        console.log("Display Info of dog is --------");
        console.log(this.name, this.age, this.color);
    }

}

test("Class Implements Interface:", async ({ page }) => {

    let d1 = new Dog("Buddy", 12, "Black");
    d1.display();
    console.log("+++++++++++++++++++++++")
    console.log(d1.name);

    console.log("2222222222222222");

    let pet1 = new Dog("Petty", 10, "White");

    pet1.display();
})