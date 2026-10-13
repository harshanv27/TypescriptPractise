// Method overloading 
// Page 3

// class -- 

// Method overloading means defining multiple method signatures with the same method name but different parameter 
// types or numbers of parameters, allowing the method to be called in different ways.

//In TypeScript, we write multiple method signatures but provide only one method implementa

import { test, expect } from "@playwright/test";

class calculator {

    // Method Overloading 

    // this are the method signature  
    //Method overloading means method names are same with different parameters and data type
    add(a: number, b: number): number;  // s1
    add(a: number, b: number, c: number): number; // s2

    add(a: number, b: number, c?: number) {  // mi

        if (c === undefined) {

            return a + b;
        } else {

            return a + b + c;
        }
    }
}

test("Addition of Numbers", async ({ page }) => {

    let c1 = new calculator();

    console.log(c1.add(10, 20));  // 30
    console.log(c1.add(10, 20, 30));  // 60

    console.log("================");

    let c2 = new calculator();

    console.log(c1.add(1, 4, 6));  // 11
    console.log(c1.add(10, 80));  // 90


})


class Student {

    
    display(name: string): void;
    display(name: string, age: number): void;

    display(name: string, age?: number): void {
        if (age !== undefined) {
            console.log(`Name: ${name}, Age: ${age}`);
        } else {
            console.log(`Name: ${name}`);
        }
    }
}

const s = new Student();

s.display("Harsha");
s.display("Rahul", 25);