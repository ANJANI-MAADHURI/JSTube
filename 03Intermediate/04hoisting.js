/* Functions are declared and made available */
tipper("5");
function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

/* Variables are declared and made "UNDEFINED"*/
// bigTipper(200);
var bigTipper = function (b) {
    var bill = parseInt(b);
    console.log(bill + 5);
}
bigTipper(200);

console.log(name);
var name = "Madhuri" ;
// sayName("Madhuri Chunduri");

function sayName() {
    console.log("Lakshmi");
}
sayName();
console.log(name);
// sayName("Madhuri Chunduri");
