import{test,expect} from "@playwright/test";
// page 5
// map() 
// Description: Creates a new array with the result of a function applied to every element. 
// Syntax: 
// array.map(function(element, index, array) {...})

test("Test10", async({page})=>{

let num:number[]=[1,2,3,4,5];


let sqElement=num.map(function(element){   // map 

    return (element*element);//  [1, 4, 9, 16, 25 ]

})

console.log(sqElement);
console.log(num);

let doubleEachNumber= num.map(function(ele){

    return ele*2;

})

console.log(doubleEachNumber);

// filter()
// Description: Creates a new array with all elements that pass the test provided by the function. 
// Syntax: 
// array.filter(function(element, index, array) {...})

let filterEvenNumber= num.filter(function(element){   // filter

  return (element%2==0);

})


 let oddNumbers= num.filter((numbers)=>{

    return (numbers%2==1);

 })

//  reduce() 
// Description: Applies a function to reduce the array to a single value (e.g., sum). 
// Syntax: 
// array.reduce(function(accumulator, element, index, array), initialValue)

 console.log("reduce===================");     

 let sumOfNumber= num.reduce((total,element)=>{   // reduce

    return (total+element);
 })

 console.log(sumOfNumber);



//   some() 
// Description: Returns true if at least one element passes the test. 
// Syntax: 
// array.some(function(element, index, array) {...})

let nums = [1, 2, 3]; 
let hasNegative = nums.some(n => n < 0); 
console.log(hasNegative); // Output: false


//  every() 
// Description: Returns true if all elements pass the test. 
// Syntax: 
// array.every(function(element, index, array) {...}) 
// Example: 
let nums1 = [2, 4, 6]; 
let allEven = nums1.every(n => n % 2 === 0); 
console.log(allEven); // Output: true

 })


//  // 
//  forEach() it doesn't return anything. 
// • map() transforms data and returns a new array of the same length. 
// • filter() is used when you want to keep certain elements based on a condition. 
// • reduce() is powerful and used to accumulate values (e.g., sum, average, object merging). 
// • some() returns true if any element matches the condition. 
// • every() returns true only if all elements match the condition.
