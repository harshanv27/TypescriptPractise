import{test,expect} from "@playwright/test";
// page 2
//  function takes an array and return an array
//Passing an Array to a Function 
// Arrays can be passed to functions for processing

test("Array function", async({page})=>{



    // function Functionname(parameter){
    
// 
//}

// Example1: Searching for an Element in an Array 
function search(ele: number, arr: number[]): boolean { 
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === ele) { 
            return true; // Element found 
        } 
    } 
    return false; // Element not found 
} 

let arr: number[] = [10, 20, 30, 40, 50];  
console.log(search(20, arr));  // Output: true 
console.log(search(100, arr)); // Output: false

// Function Returning an Array 
// A function can take an array as input and return a modified array. 
// Example2: Capitalizing Words in an Array
// ['Pop', 'John', 'komal']   ==>  ['POP', 'JOHN','KOMAL']
    function capitalizeWords(arr:string[]): string[]{

        let result:string[]=[]; // Empty []
         for(let i=0; i<arr.length;i++){

            result[i]=arr[i].toUpperCase();
         }
         return result;
    }

    let words:string[]=['pet','set','date','tet'];
   console.log(capitalizeWords(words));  // [ 'PET', 'SET', 'DATE', 'TET' ]

 // Example3: Adding a Number to Each Element in an Array  
   function addNumberPlusOne(num:number[]):number[]{

      let add:number[]=[];

    for(let i=0;i<num.length;i++){
      
        add[i]=num[i]+1;
    }
    return add;
   }

   let num:number[]=[1,2,3,4,5,6,7,8,9,10];
   console.log(addNumberPlusOne(num))


   let names:string[]=[];
   
// Key Takeaways 
// • Arrays store multiple values and can hold elements of the same or mixed types. 
// • Two ways to declare arrays: array literals ([]) and generic syntax (Array<Type>). 
// • Array indexing starts from 0. 
// • Elements can be accessed, modified, and iterated using loops (for, for...in, for...of). 
// • Arrays can be passed to functions for processing. 
// • Functions can return modified arrays.
        
})