import{test,expect} from "@playwright/test";
/*
 session 1

Function Overloading in TypeScript 
 
Function overloading allows you to define multiple versions of a function with the same 
name but different parameters or return types. 
 
Why Use Function Overloading? 
• Helps create functions that work differently based on input types. 
• Improves code readability and reusability. 
 
Basic Rules for Function Overloading 
1. Define Overload Signatures: List all possible ways the function can be called. 
2. Single Implementation Signature: There must be one actual function 
implementation that handles all cases. 
3. Ensure Compatibility: The implementation must be compatible with all overload 
signatures.


1️. Overloading with Different Parameter Types
2. Overloading with Different Number of Parameters
3.  Overloading with Different Return Types

Function Overloading enables defining multiple function signatures for different 
parameter types or return types.

*/

test("Test8",async({page})=>{

    // Different Parameter Types


    //1 Different parameter with retuen type same
    function getInfo(id:number):string;  // overload signature
    function getInfo(name:string):string; 
   // function getInfo(id1:boolean):string//  overload signature

    function getInfo(param: number|string):string {  //function implementation

         if(typeof param==="number"){
          return `User ID is ${param}`;
         }else{
            return `User ID is ${param}`;
         }
    }
console.log(getInfo(100)); // User ID is 100
console.log(getInfo("Harsha")); // ser ID is Harsha

//2
//different parameter with same return type 
function addNumber(a:number, b:number, c:number):number; // signature 1, 3 Parameter and 
function addNumber(a:number, b:number):number;  // sig 2,  2 Parameter

function addNumber(a:number,b:number,c?:number):number{

    if(c==undefined){
        return a+b;
    }else{
        return a+b+c;
    }
}
console.log(addNumber(10,20));  // 30 
console.log(addNumber(10,20,30));  // 60 

//3
// Different parameter with different return type s
function processInput(input:string):string;
function processInput(input:number):number;

function processInput(input: string|number):string|number{

    if(typeof input==="string"){

        return input.toUpperCase();
    }else{

        return input*5;
    }
}

console.log(processInput(10));  //50
console.log(processInput("Komal")); // KOMAL


//4

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }

    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }

    throw new Error("Invalid arguments");
}

console.log(add(10, 20));       // 30
console.log(add("Hello ", "QA")); // Hello QA


//5
function display(name: string): void;
function display(name: string, age: number): void;

function display(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Name: ${name}, Age: ${age}`);
    } else {
        console.log(`Name: ${name}`);
    }
}

display("Sonika"); // 
display("Sonika", 32); // 



});