import{test,expect} from "@playwright/test";

test.describe("Function", ()=>{
// syntax
    
// function functionName(){   // Block of code}

test("Named function with no parameter and no return type", async({page})=>{

// Named function with no parameter and no return type 

//1

function greeting() {   // Named function
    console.log("Hello TypeScript");


}

greeting();// calling the function by this syntax


// 2
let greet= ():void=>{   // Namedless function
    console.log("welcome to the TS");
}
greet();

//3

const add = function () {    // Namedless function
    return 10 + 20;
};

console.log(add());

 
});

test("Named function with with Parameter and Return type ", async({page})=>{

// Named function with Parameter and Return type 

//1
    function addNumber(x:number,y:number):number{
        return x+y;
    }

    let result= addNumber(10,20);
    console.log(result);

    console.log(addNumber(20,2));

//2 

const getInfo = function (param: number | string): string {

    if (typeof param === "number") {
        return `User ID is ${param}`;
    } else {
        return `User ID is ${param}`;
    }
};

console.log(getInfo(100));
console.log(getInfo("Komal"));

// 3

const processInput = (input: string | number): string | number => {

    if (typeof input === "string") {
        return input.toUpperCase();
    } else {
        return input * 5;
    }
};

console.log(processInput(10));
console.log(processInput("harshika"));

})

test("Named function with rest Parameter", async({page})=>{

// Named Function with rest parameter

//Rest parameters don't restrict the number of values that you can pass to a function.


// 1
    function restPara(...nums:number[]){

        let i;
        let sum = 0;

        for(let i=0; i<nums.length; i++){
            sum = sum +  nums[i];    
        }
        console.log("sum of numbers:", sum);
    }

   restPara(10,20,30,40,50,60,70); /// 1, 2,3 ,4, 5
   
   restPara(10,20,30);

   restPara(60,70);

   restPara(100,20,30,40); 

//2
 
// Named function with rest parameter for any type of data storage 

function findElements(...elements: (number | string)[]): number {
    return elements.length;
}

console.log(findElements(3, "john", 2, 1, "scott",1,2,4,"Harsha")); // 9 

console.log(findElements(10, 20, 30, 40, 50, 60, 70)); // 7

console.log(findElements("abc", "xyz")); // 2

});


test('Function with Optional Parameter', async({page})=>{

// Named function with optional Parameter
// Optional parameter we specify with "?"" ?

// 1
   function optionalPara(a:number, b:number, c?:number){

    if(c==undefined){  
        return a+b;
    }
    else{
        return a+b+c;
    }
   }

   console.log(optionalPara(38,60));  // 98
   console.log(optionalPara(10,11,29));  // 50

// 2
  const displayDetails = (ids: number,fName: string,emailId?: string): void => {

   if (emailId !== undefined) {
        console.log(ids);
        console.log(fName);
        console.log(emailId);
    } else {
        console.log(ids);
        console.log(fName);
    }
};

displayDetails(10, "Tini");
displayDetails(10, "Tini", "tini@gmail.com");

// Note

// When we create an optional parameter then threre is 
// one restriction that if first parameter is optional, then following
//  parameter should also be optional.

// 3

let message=function (x:number,y:number,z?:number){  //  anonymous function nameless function

    if(z!= undefined){

        return x*y*z;
    }else{

        return x*y;
    }
}
console.log(message(10,20));
console.log(message(1,2,3));

// 4
function addingNumber(a:number,b:number,c?:number):number{  // Nmaed function

    if(c==undefined){
        return a+b;
    }else{
        return a+b+c;
    }
}
console.log(addingNumber(10,20));
console.log(addingNumber(10,20,30));

});

test("Name function with Default Parameter", async({page})=>{

// Named function with Default parameter 

//1 

function restPar(price: number, rate=0.5):void{

    let discount: number = price*rate;
    console.log(discount);
    
}
restPar(100);  // 100*0.5==50
restPar(10000,0.3); // 30000
restPar(2000,0.9); // 1800

//2 


let multiply = function(x:number,y=2){

    return x*y;
}

console.log(multiply(100,200));//20000
console.log(multiply(20));//40


// 3

const createUser = (name: string, role: string = "Tester"): string => {
    return `Name: ${name}, Role: ${role}`;
};

console.log(createUser("Priya "));  // Name: Priya , Role: Tester
console.log(createUser("Komal", "Automation Engineer"));// Name: Komal, Role: Automation Engineer

})

test('Call Back Function', async({page})=>{

   
// A callback is a function that is passed as an argument
//  to another function and gets executed later

// Ex. 1
// Function that takes callback function as an arguments

function greet(name:string,callback:(message:string)=>void){

    console.log(name);// jon 
    callback("Hello"); // executing the call back function // hello 
}

//callback function

function showMessage(message:string){

    console.log(message);
}

// calling the function by passing the callback function

greet("John",showMessage );














// Example 2

function executeTest(callback: () => void) {
    console.log("Test started");  // Test started
    callback();                     // Test completed
}

executeTest(() => {
    console.log("Test completed");
});






//3
function calculate(a: number,b: number,callback: (result: number) => void): void {

    const result = a + b;

    callback(result);
}

calculate(10, 20, (result: number) => {
    console.log("Result:", result);


})

})

test("Immediately Invoked Function Expression", async({page})=>{

    // Immediately Invoked Function Expression(IIFE)
    // It is a function that is created and executed immediately.

// 1


(function (): void {
    console.log("Hello TypeScript");
})();

// 2

(function () {
    console.log("Executed immediately");
})();

})

test("Async and await", async({page})=>{

// async allows a function to perform asynchronous operations, and
// await pauses that async function until the Promise is resolved.
 

//async is used before a function to tell JavaScript/TypeScript that this function contains 
//asynchronous operations and will return a Promise.

// await -- await means wait for this asynchronous operation 
// to complete before moving to the next line

// await can normally be used inside an async function.

    async function login() {

    await page.goto("https://demowebshop.tricentis.com/");  //1

    await page.getByRole('link', { name: 'Log in' }).click();

    await page.getByRole('textbox', { name: 'Email:' }).fill("harshagarayedemo@gmail.com");

    await page.getByLabel('Password:').fill("Harsha@123");

    await page.locator('input.button-1.login-button').click();
}

    await login();

})

// Promise example
// A Promise is used to handle an operation that takes some time and
//  gives us the result later, either as success or failure.

// 1. Playwright actions like goto(), click(), and fill() are asynchronous operations,
//  so they return Promises.

// Playwright APIs return Promises because browser actions take time, and await
// allows us to wait for those operations to complete before continuing the test."

test("Custom Promise Demo", async ({ page }) => {

    const login = new Promise<string>((resolve, reject) => {

        setTimeout(() => {

            const loginSuccessful = true;

            if (loginSuccessful) {
                resolve("Login successful");
            } else {
                reject("Login failed");
            }

        }, 2000);

    });

    console.log("Login started");

    const result = await login;

    console.log(result);

})


test("Playwright Promise Demo", async ({ page }) => {

    const loginPromise = new Promise<string>((resolve, reject) => {

        setTimeout(() => {
            resolve("API Login Successful");
        }, 2000);

    });

    await loginPromise;

    await page.goto("https://www.google.com/");

    console.log("Login successful");
    console.log("Page opened successfully");

});

test("Real Playwright Example", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    await page.getByRole('link', { name: 'Log in' }).click();

    await page.getByRole('textbox', { name: 'Email:' }).fill("harshagarayedemo@gmail.com");

    await page.getByLabel('Password:').fill("Harsha@123");

    await page.locator('input.button-1.login-button').click();

});

// Event loop 

test("Event Loop", async({page})=>{

console.log("1"); // 1

setTimeout(() => {
    console.log("2");   // 2
}, 2000);

console.log("3"); // output you will get 1,3,2

// console.log("1")
//       ↓
// Call Stack  // what should be execute next 
//       ↓
// Execute immediately

// setTimeout()
//       ↓
// Browser/Runtime handles timer
//       ↓
// Callback waits in Task Queue
//       ↓
// Event Loop checks Call Stack
//       ↓
// console.log("3") executes
//       ↓
// Call Stack becomes empty
//       ↓
// Event Loop takes callback
//       ↓
// console.log("2")
})

test("Event Loop 2", async({page})=>{

    console.log("Start"); // synchornous code 

setTimeout(() => {  // Its callback goes to the Task Queue after the timer is ready.
    console.log("Timeout");
}, 2);

Promise.resolve().then(() => { // The .then() callback goes to the Microtask Queue.
    console.log("Promise");
});

console.log("End");   // start end Promise Timeout 


// 1. Synchronous code 
//        ↓
// 2. Microtask Queue (Promise)
//        ↓
// 3. Task Queue (setTimeout)

})

})