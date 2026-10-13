import{test,expect} from "@playwright/test";

// page 4

test("Test10", async({page})=>{

    let numbers: number[]=[1,2,3,4,5,6,7,8,9,10];
    let fruites:string[]=["kiwi","banana","pear","mango"];
    let names:string[]=["pop","top","nop","soch"];

//     console.log("length===================");

//     // return length of an array

//     console.log(numbers.length); // 10 
//     console.log(fruites.length);  // 4

//     console.log("push command ==================");

// //push()  

// // Description: Adds one or more elements to the end of an array. 
// // Syntax: array.push(element1, element2, ...) 

//  let numbers1: number[]=[1,2,3,4,5,6,7,8,9,10];

//     numbers1.push(11,12);
//     console.log(numbers1);  // [
// //    1,  2, 3, 4,  5,
// //    6,  7, 8, 9, 10,
// //   11, 12
// // ]

// // pop()
// // Description: Removes the last element from an array and returns it. 
// // Syntax: array.pop() 

//     numbers.pop();
//     console.log(numbers);  //[1,2,3,4,---9];

// // shift
// // Description: Removes the first element from an array and returns it. 
// // Syntax: array.shift()

//     numbers.shift()
//     console.log(numbers);

// // Unshift 
// // Description: Adds one or more elements to the beginning of an array. 
// // Syntax: array.unshift(element1, element2, ...) 

//     numbers.unshift(101,102);
//     console.log(numbers);


// // concat  
// // Description: Combines two or more arrays and returns a new array. 
// // Syntax: array.concat(value1, value2, ...)  
// let combineArray:number[]=numbers.concat([201,202,203]);
// console.log(combineArray);

// let combineStringArray:string[]= fruites.concat(names);
// console.log(combineStringArray);

// // slice
// // Description: Extracts a section of an array without modifying the original array. 
// // Syntax: array.slice(startIndex, endIndex) 
// // Note: endIndex is exclusive

// //   let numbers: number[]=[1,2,3,4,5,6,7,8,9,10];

// console.log(numbers);
// console.log(fruites);

// let sliceArray:number[]= numbers.slice(1,4);
// console.log(sliceArray);  // [2, 3]

// let sliceArray1:number[]= numbers.slice(3,8);
// console.log(sliceArray1);


// // splice();

// // Description: Adds or removes elements at any position in the array. 
// // Syntax: array.splice(start, deleteCount, item1, item2, ...) 
// // Example 1 – Remove: 
// let fruits = ['apple', 'banana', 'cherry']; 
// fruits.splice(1, 1); 
// console.log(fruits); // Output: ['apple', 'cherry'] 

// // Example 2 – Add: 
// fruits.splice(1, 0, 'orange'); 
// console.log(fruits); // Output: ['apple', 'orange', 'cherry']


// numbers.splice(2,5);
// console.log(numbers);

// fruites.push("megrante","Orange");
// console.log(fruites);

// console.log(fruites.slice(2,4));
// console.log(fruites.splice(1,3));
// console.log(fruites);

// fruites.splice(1,0,"Tomato","Potato");
// console.log(fruites);

// fruites.splice(1,2,"kala","Pale","Tale");
// console.log(fruites);

// // indexof() - 
// // Description: Returns the index of the first occurrence of a value, or -1 if not found. 
// // Syntax: array.indexOf(value, fromIndex?)

// //  let fruites:string[]=["kiwi","banana","pear","mango"];

// let kiwiIndex=fruites.indexOf("kiwi");
// console.log(kiwiIndex);// 0

// let orangIndex=fruites.indexOf("Orange");
// console.log(orangIndex);  // -1

// let megranteIndex= fruites.indexOf("megrante");
// console.log(megranteIndex);

// let taleIndex= fruites.indexOf("Tale",1);
// console.log(taleIndex);

// // includes

// // Description: Checks if an array contains a specific value. Returns true or false. 
// // Syntax: array.includes(value, fromIndex?)

// let isKiwi= fruites.includes("kiwi");
// console.log(isKiwi);// true

// let isOrange= fruites.includes("Orange");
// console.log(isOrange);  

// let isApple= fruites.includes("Apple");
// console.log(isApple);

// tostring()
// Description: Converts the array to a comma-separated string. 
// Syntax: array.toString() 
//  let numbers: number[]=[1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
let numberString = numbers.toString();// 1,2,3,4,5,6,7,8,9,10
console.log(numberString);

let welcomeArray:string[]=['w','e','l','c','o','m','e'];
let welcomeString = welcomeArray.toString();  // w,e,l,c,o,m,e
console.log(welcomeString); // w

console.log(fruites);

let fruitesStringconversion= fruites.toString();
console.log(fruitesStringconversion);

console.log(fruites);

for(let i in fruites){

    console.log(fruites[i]);
}

fruites.forEach(function(element,index){

console.log(`${index}`, `${element}`);

})

console.log("=======================");

numbers.forEach((num,index)=>{

    console.log(index,num);

})
})

