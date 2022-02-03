//  **** Falsy Values:
// undefined    " Ex: var User. Variable user is undefined.
// null
// ""
// 0
// NAN 

// var user = null;
// console.log(typeof user);
// console.log(user);
var user = "";
user? console.log("condition is True") : console.log("Null is a falsy value");

console.log(2+2);
//  Javascript does not know how to add a string and number.
//  When Javascript encounters a String and Number, like below cases
// it assumes the other number as a string
console.log(2+ "2");
console.log("2" + 2);
console.log("2" + "2");
// 2 As string
var user = "2";
(2 == user) ? console.log("Coersion example: Truthy value") : console.log("False");
// 2 as number
var user = "2";
( 2 === user ) ? console.log("Coersion example: Truthy value"): console.log("False: 2 as a string is not equal to number");