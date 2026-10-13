import{test,expect} from "@playwright/test";

test("Test12",async({page})=>{

    // session 4
/*
A string in TypeScript is a sequence of characters used to represent text. It can be declared 
using: 
1. Single quotes 'like this' 
2. Double quotes "like this" 
3. Backticks (Template literals) `like this` – useful when embedding variables inside 
strings. 
let str1: string = 'Single quote'; 
let str2: string = "Double quote"; 
let str3: string = `Backtick`;

*/

    let str1="Sonam";
    let str2='Joshi';
    let str3=`My name is Sonam John`;
    let str4 = `My Name is ${str1} ${str2} `;

    console.log(str1); // sonam
    console.log(str2); // joshi
    console.log(str3); // My name is Sonam John
    console.log(str4); // My Name is Sonam Joshi 


    // string methods 
    let str= "Hello, Typescript!";

    // 1 length -- length of the character 
    console.log(str.length);  // 18 
    const lengthStr= str.length
    console.log(lengthStr);

    // toUppercase and toLowercase 

    console.log(str.toUpperCase());
    console.log(str.toLowerCase());

    //charAt(index), indexof(string);

    console.log(str.charAt(5));   //, character of the string 
    console.log(str.indexOf("Type"));  // it will give the index of the string

// substring() --  Extract a part of the string

console.log(str.substring(2,7));

let subString = str.substring(2,7);
console.log(subString);

// includes()-- check if a substring exists return boolean value

console.log(str.includes("Type"));// true
console.log(str.includes("abc")); // false 
console.log(str.includes("script")); // true

// stratwith and Endwith --  Check start or end of string return boolean value

console.log(str.startsWith("Hello"));
console.log(str.startsWith("H"));
console.log(str.startsWith("hhaha"));
console.log(str.endsWith("!"));
console.log(str.endsWith("hshshs"));

// replace()  -- Replace part of a string 

console.log(str.replace("Hello", "Welcome"));


// split   Split into array

 let strsplit= "Hello, Typescript!";
console.log("split array -------");
let splitstring= strsplit.split(",");
console.log(splitstring); // [ 'Hello', ' Typescript!' ]
console.log(splitstring[0]);
console.log(splitstring[1]);

// trim()--  Remove extra spaces 
//  Removes spaces from start, end, or both.

let mystring = "       welcome      ";

console.log(mystring.trim()); // welcome
console.log(mystring.trimStart());
console.log(mystring.trimEnd());

// concat()
const concat = str1+str2;
console.log(concat);

console.log(str.concat(mystring.trim()));
console.log(str.concat("Newvision"));
console.log(str1.concat(str2));
console.log(str1.concat(str2).concat(str3));
console.log(str+str1+str2);

// string immutability -- original string cannot change after applying all the methods 
// Strings are immutable – once created, they can’t be changed. Methods return new strings: 
let stringimmutable = "Javascript";
let concatString= stringimmutable.concat(" ").concat("Typescript");

console.log(str);// 

console.log(stringimmutable);
console.log(concatString);


// Multi-line Strings 
// Using backticks allows strings to span multiple lines:

let multiline= `     typescript 
                                              Javascript`;
                                              console.log(multiline);  //      typescript 
   //                                            Javascript
                                              
});