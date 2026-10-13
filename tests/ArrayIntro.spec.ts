import{test,expect} from "@playwright/test";

// Page1 

// Array can store multiple
// values which can hold same data type or different set of data types. 
// An array in TypeScript is a special type of variable that can store multiple values. 
// These values can be of the same type or a combination of different types.

test("Test1", async({page})=>{

// How to Declare an Array 
// Arrays in TypeScript can be declared in two main ways: 
// 1• Using square brackets ([]) (array literal syntax). 
// 2• Using Array<Type> (generic array syntax). 

// 1 using lateral 
    let num:number[]=[];   // Array define 1

    num[0]=10;
    num[1]=20;
    num[2]=25;
    num[3]=30;
    num[4]=40;
    num[5]=50;
    num[6]=60;
    console.log(num);// [10,20,25,30...];

//2. Alternative way to initialize an array
    let names:string[]=["john", "Harry","Poter", "Mommy", "Baby"]  // array define 2
    console.log(names);

// Approach 2: Generic Array Syntax     

    let empIds:Array<number>=[11,12,13,14,15];   // array define 3
    let empNames:Array<string>=['John', 'peter', 'Kamala'];
    let misData:Array<string|number>=[12,'pop',102,'John'];

  console.log(misData[0]);
    misData[1]
    misData[2]

// // Accessing Array Elements 
// • Access by index (indexing starts from 0). 
// • Printing arrays using console.log().    

    console.log(empIds);
    console.log(empNames);
    console.log(misData);
    console.log(empIds.length);

// Iterating Over an Array 
// There are multiple ways to loop through an array


   //let empIds:Array<number>=[11,12,13,14,15];   // array define 3


   console.log(empIds.length);  // 5
    for(let i=0; i<empIds.length;i++){  // for loop 

        console.log(empIds[i]);   //empIds[0], empIds[1], empIds[2]  11 12 13 14 15
    }


    // let empNames:Array<string>=['John', 'peter', 'Kamala'];

    for(let i in empNames){   // for in loop (index based loop)
        console.log(empNames[i]);  //John , peter, Kamala
    }


//  let misData:Array<string|number>=[12,'pop',102,'John'];

    for(let value of misData){  // for off loop 

        console.log(value); //  value represents actual array values 12, pop, 102, John
    }

    });




