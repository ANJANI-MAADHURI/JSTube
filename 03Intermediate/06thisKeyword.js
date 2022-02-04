// TO-DO: Part 1 for keyword: "this"

var name = "madhuri";
console.log(this);

var game = "basketBall";

// function sayName() {
//     var name = "madhuri";
//     console.log(this);
// }

// sayName();

var sayName = function() {
    var name = "madhuri";
    console.log(this);
}

sayName();