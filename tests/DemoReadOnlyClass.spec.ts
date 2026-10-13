import { test, expect } from "@playwright/test";

//  Read-only Properties 
//  Read-only properties cannot be changed after initialization. 
//  Use the readonly keyword. 
//  Useful for constants or values that shouldn't be modified.

class Car { 
  readonly brand: string; 


  constructor(brand: string) { 
    this.brand = brand; 
  } 
}

const car = new Car("Toyota"); //
 //car.brand = "Honda"; //   Error: Cannot assign to 'brand' because it is a read-only property.


class Student {

    sname: string;
    readonly sid: number;  // readonly property
    semail?: string;   // optional property 
    static schoolName: string = "Adarsh High"; //static keyword -- static variable shared among all the 
    //instance/Object.

    constructor(name: string, id: number, email?: string) {
        this.sname = name;
        this.sid = id;
        this.semail = email;
    }

    displayInfo(): void {
        console.log(this.sname);
        console.log(this.sid);
        console.log(Student.schoolName);

        if (typeof this.semail === "string") {

            console.log(this.semail)
        } else {

            console.log("email is not provided");
        }
    }

    getName(): string {

        return this.sname;

    }

    getID(): number {

        return this.sid;
    }

}

test("ReadOnly", async ({ page }) => {

    let s1 = new Student("Kartik", 1);
    let s2 = new Student("Pop", 12, "kartik@gmail.com");

    console.log("s1------------------");

    console.log(s1.displayInfo());
    console.log(s1.getName());
    console.log(s1.getID());
    console.log(s1.semail);
    console.log(s1.sname);
    console.log(s1.sid);

    console.log("s2-----------------");

    console.log(s2.displayInfo());
    console.log(s2.getName());
    console.log(s2.getID());
    console.log(s2.semail);
    console.log(s2.sname);
    console.log(s2.sid)

    // readonly property is sid 


    //s2.sid= 13;  // 


    console.log("static property Modified==========");

    // static property modified 
    Student.schoolName = "RK Highschool";

    console.log(Student.schoolName);


    console.log("static property Modified==++++++==");

    console.log(s2.displayInfo());


});