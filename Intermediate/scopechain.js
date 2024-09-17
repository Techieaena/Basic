var name = "Aena";

console.log("Line number 3", name);

function sayName(){
    var name = "My Icecream";
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo(){
        console.log("Line number 10", name);
    }
}

function abc(){

}

sayName();
