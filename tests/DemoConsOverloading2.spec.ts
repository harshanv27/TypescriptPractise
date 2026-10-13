import { test, expect } from "@playwright/test";
// Page 1

// A constructor is a special method inside a class that is automatically called 
// when we create an object of that class.
//  It is mainly used to initialize object properties.
// Default constructor/ Parameterized constructor/ Constructor overloading
// constructor overloading example in typescript
//Constructor overloading means creating multiple constructor signatures 
// in a class so that an object can be initialized in different ways.

class coverload {

    constructor(a: number, b: number); // p

    constructor(a: number, b: number, c: number) // pd 

    constructor(); // default constructor

    constructor(a?: number, b?: number, c?: number) {

        if (a != undefined && b != undefined && c != undefined) {

            console.log("sum of three numbers:", a + b + c);

        } else if (a != undefined && b != undefined) {

            console.log("sum of two numbers:", a + b);
        } else {

            console.log("default constructor called............");
        }
    }
}

test("caloverload", async ({ page }) => {

    let cal1 = new coverload(10, 20, 30);  // 60

    console.log("=================");

    let cal2 = new coverload(1, 2);  // 3

    console.log("=================");

    let cal3 = new coverload(); // 

})