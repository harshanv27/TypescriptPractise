// Optional Properties 
// • Optional properties are not required when creating an object. 
// • Defined using the ? symbol. 
// • Useful when a property is not always needed. 
//Example: 

class Student { 
  name: string; 
  age?: number; 
 
  constructor(name: string, age?: number) { 
    this.name = name; 
    if (age) this.age = age; 
  } 
} 
 
const s1 = new Student("Pavan"); 
const s2 = new Student("Kiran", 22);