// Note: I placed the originals and interpreter ordered versions into functions for ease of testing.

//1
function original1(){
    console.log(hello);                                   
    var hello = 'world'; 
}

function interpretered1(){
    var hello;
    console.log(hello);
    hello = "world";
}

console.log("The original for 1 outputs:")
original1();
console.log("\n");
console.log("The interpreter written version for 1 outputs:")
interpretered1();
console.log("\n");
console.log("\n");

//2
function original2(){
    var needle = 'haystack';
    test();
    function test(){
        var needle = 'magnet';
        console.log(needle);
    }
}

function interpretered2(){
    var needle;
    function test(){
        var needle;
        needle = 'magnet';
        console.log(needle);
    }
    needle = 'haystack';
    test();
}

console.log("The original for 2 outputs:")
original2();
console.log("\n");
console.log("The interpreter written version for 2 outputs:")
interpretered2();
console.log("\n");
console.log("\n");

//3
function original3(){
    var brendan = 'super cool';
    function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
    console.log(brendan);
    
}

function interpretered3(){
    var brendan;
    function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
    brendan = 'super cool';
    console.log(brendan);
    
}

console.log("The original for 3 outputs:")
original3();
console.log("\n");
console.log("The interpreter written version for 3 outputs:")
interpretered3();
console.log("\n");
console.log("\n");

//4
function original4(){
    var food = 'chicken';
    console.log(food);
    eat();
    function eat(){
        food = 'half-chicken';
        console.log(food);
        var food = 'gone';
    }
}

function interpretered4(){
    var food;
    food = 'chicken';
    console.log(food);
    function eat(){
        var food;
        food = 'half-chicken';
        console.log(food);
        food = 'gone';
    }
    eat();
}

console.log("The original for 4 outputs:")
original4();
console.log("\n");
console.log("The interpreter written version for 4 outputs:")
interpretered4();
console.log("\n");
console.log("\n");

//5
function original5(){
    mean();
    console.log(food);
    var mean = function() {
        food = "chicken";
        console.log(food);
        var food = "fish";
        console.log(food);
    }
    console.log(food);
}

function interpretered5(){
    var mean;
    mean();
    console.log(food);
    mean = function() {
        var food;
        food = "chicken";
        console.log(food);
        food = "fish";
        console.log(food);
    }
    console.log(food);
}

console.log("The original for 5 outputs:")
// original5();  // I commented these out because the hoisting in this one causes it to give a type error, as mean does not get declared a function until after it is called.
console.log("\n");
console.log("The interpreter written version for 5 outputs:")
// interpretered5();
console.log("\n");
console.log("\n");

//6
function original6(){
    console.log(genre);
    var genre = "disco";
    rewind();
    function rewind() {
        genre = "rock";
        console.log(genre);
        var genre = "r&b";
        console.log(genre);
    }
    console.log(genre);
}

function interpretered6(){
    console.log(genre);
    var genre;
    function rewind() {
        var genre;
        genre = "rock";
        console.log(genre);
        genre = "r&b";
        console.log(genre);
    }
    genre = "disco";
    rewind();
    console.log(genre);
}

console.log("The original for 6 outputs:")
original6();
console.log("\n");
console.log("The interpreter written version for 6 outputs:")
interpretered6();
console.log("\n");
console.log("\n");

//7
function original7(){
    dojo = "san jose";
    console.log(dojo);
    learn();
    function learn() {
        dojo = "seattle";
        console.log(dojo);
        var dojo = "burbank";
        console.log(dojo);
    }
    console.log(dojo);
}

function interpretered7(){
    dojo = "san jose";
    console.log(dojo);
    function learn() {
        var dojo;
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    }
    learn();
    console.log(dojo);
}

console.log("The original for 7 outputs:")
original7();
console.log("\n");
console.log("The interpreter written version for 7 outputs:")
interpretered7();
console.log("\n");
console.log("\n");

//8
function original8(){
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }
}

function interpretered8(){
    function makeDojo(name, students){
        //const dojo; //Commented out as the interpreter does not allow this (throws an error in node) even though it is reading the declaration before the assignment.
        //dojo = {};
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now"; //This throws an error when it reaches the Berkley entry as you cannot change the value inside of a constant after one has been assigned initially.
        }
        return dojo;
    }
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
}

console.log("The original for 8 outputs:")
// original8();
console.log("\n");
console.log("The interpreter written version for 8 outputs:")
interpretered8();
console.log("\n");
console.log("\n");