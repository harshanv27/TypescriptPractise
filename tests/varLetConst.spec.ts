import{test,expect} from "@playwright/test";

test("unctionscope", async({page})=>{

    console.log("----------------------");

    function blockScope(){
    var age=30;
    if(age===30){

        let greet= "Hello GoodMorning";
        const name="Harsha"
        console.log(greet)
        console.log(name);
        console.log(age);
     
    }
     //console.log(greet); // error 
    //   //console.log(name); // error
}

blockScope();

});

test("test2",async({page})=>{

if(true){
    var num1=30;
    let num2= 50;
    const num3=70;
    console.log(num1)
    console.log(num2)
    console.log(num3)
}

 console.log(num1)
    // console.log(num2)
    // console.log(num3)
})

test.only("test3", async({page})=>{
    var x; 
    console.log(x); // Undefined
    x=30;
    console.log(x);  // 30
    x=800;
    console.log(x)   // 800 


    let y;
    console.log(y);
    y=40;
    console.log(y)
    y=900;

    const z=50;
        console.log(z)

        var city;
        console.log(city)
        // var city = "UK";
        // var city = "NewYork";
        city = "US";
        

        let firstName= "Harsha"
        firstName="Komal"


        // let name= "AA";
        // let name= "BB";

        // const XX= "Rasamalai"
        // const XX= labjamnun";


        console.log("-------------------------------");

        var ZZ=10;
        console.log(ZZ)
        
})



    












