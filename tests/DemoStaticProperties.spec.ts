// Static Properties and Methods 
// • Static members belong to the class, not the instances. 
// • Accessed using the class name, not through objects. 
// • Useful for utility methods or shared data. 
// • Example: 


class MathUtils { 
  static PI = 3.14; 
  static square(num: number): number { 
    return num * num; 
  }

  } 
console.log(MathUtils.PI); // 3.14 
console.log(MathUtils.square(5)); // 25