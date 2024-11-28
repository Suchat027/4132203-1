document.getElementById("message1").innerHTML = "Hello World";

    let a = 5;
    var b = "hello";
    const x = 10;

    console.log(b);

    //function
    function add(aa,bb){
        let cc = aa + bb;
        console.log(cc);
        return cc;
    }


    let result = add(5,10);
    add(5,10);
    let add2 = function(aa,bb){
        let cc = aa + bb;
        console.log(cc);
    }

    let add3 = function (aa,bb){
        let cc = aa + bb;
        console.log(cc);
    }

    //array
    let arr = [1,"test",3,4,5];
    const car = [];
    car[0] = "bmw";
    car[1] = "benz";
    const fruit = new Array ("apple","banana","orange");
    console.log(car[0]);
    console.log(car[1]);
    
    let colors = [[1,2,3], "green","blue"];
    console.log(colors[0][2]);

    //array method
    fruit.push("Orange");
    console.log(fruit);

    arr.map((item) => {
        console.log(item);
    });

    //object
    let person = {
        firtName: "John",
        lastName: "Doe",
        age: 25,
        child: ["Anna","Billy"],
        FullNmae: function(){
            return this.firtName + " " + this.lastName
        }
    };

    person.address = {
        street: "123 Main St",
        city : "New Yorke",

    };
    console.log(person.FullNmae());

    //spread operator
    const arrCombine = [...car, ...fruit];
    const arrCombine2 = [car, fruit];
    console.log(arrCombine);
    console.log(arrCombine2);

    //short term if else
    let e = x==10 ? "yes" : "no";