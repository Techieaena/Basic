tipper("5");

function tipper(a){
var  bill = parseInt(a);
console.log(bill + 5);
}

var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 15);
};

bigTipper("200");