import{test,expect} from "@playwright/test";

// Description for forEach: Executes a function once for each array element. 
// Syntax: 
// array.forEach(function(element, index, array) {...}) 
 
test("ForEach", async({page})=>{

    let num:number[]=[1,2,3,4,5,6];

    for(let i =0; i<num.length; i++){

        console.log(num[i]);
    }

    let fruits:string[]=["apple","Kiwi","Tomato",'Banana'];

    console.log(fruits.length);

    for (let input of fruits){

        console.log(input)
    }

    fruits.forEach(function(element,index){

        console.log(`${index}, ${element}`);
    })

    num.forEach(function(value){

        console.log(value);
    })

    fruits.forEach((element,index)=>{

        console.log(index, element);

    })

    
});