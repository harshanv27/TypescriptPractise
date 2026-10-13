/*

session 2
A module in TypeScript is a file that contains code such as variables, functions, classes,
 and interfaces. We can share this code between files using export and import.
A module helps us divide a large program into small, reusable files.


A module is a separate TypeScript file that encapsulates related code. 
We use export to make variables, functions, classes, or types available to other files 
and import to reuse them. 
Modules improve code reusability, readability, and maintainability.

 Why do we use modules?
- Code reusability
- Easy maintenance
- Better project structure
- Avoiding unnecessary duplication
- Separating page objects, test data, utilities, and tests

difference between export and import

      export	                                                import
Shares code from a file.	              Uses code from another file.
Written in the source module.	          Written in the file that needs the code.
Example: export function test()           Example: import { test } from './file'

*/

 export let appName="Calculator";

export function add(a:number, b:number):number{

return (a+b);
}

export class Formatter{

    static toUpper(str:string):string{

        return str.toUpperCase();
    }
}

