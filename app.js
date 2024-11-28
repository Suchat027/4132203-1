document.getElementById("messaga1").innerHTML = "hello Worid"

//variable declaration
let a = 5;
    var b = "hello";
    const x = 10;

    console.log(b);

    add(5 , 10);

    //function
    function add(aa,bb){
        let cc = aa + bb;
        console.log(cc);
        return cc;
    }


    let result = add(5,10);

    let add2 = function(aa,bb){
        let cc = aa + bb;
        console.log(cc);
    }

    let add3 = function (aa,bb){
        let cc = aa + bb;
        console.log(cc);
        
    }

    //array
    let arr = [1,2,3,4,5];
    const car = [];
    car[0] = "Toyota";
    car[1] = "Homda";
    const fruit = new Array ("Apple","Banana","Cherry");

    console.log(car[1]);

    let colors = [[1, 2, 3], "green", "blue"];
    console.log(colors[0][2]);

    //array method
    fruit.push("Orange");
    console.log(fruit);

    //object
    let person = {
        firstName: "John",
        lastName: "Doge",
        age: 50,
        child: ["Ann","Billy"],
        fullname : function(){
            return this.firstName + " " + this.lastName;
        }
    };

    person.adderss = {
        street: "123 Main St",
        city: "New York"
    }

    console.log(person.fullname());

    //spread operator
    const arrCombine = [...car,...fruit];
    const arrCombine2 = [ar,fruit];
    console.log(arrCombine);
    console.log(arrCombine2);

    if (x == 10) {
        let c = "test";
        var d = "test2";
        console.log("a is equal to b");
    }
    

    arr.map((itim) =>{
        console.log(itim);
    });