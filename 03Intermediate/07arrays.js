/* Array starts with 0 always*/ 

var countries = [ "india", "china", "russia", "japan", "vietnam"] ;

var states = new Array ("Rajasthan" , "AP", "TN", "MP");

console.log(states);

var popex= states.pop()
console.log(states);
console.log(popex);

states.unshift("Karnataka");
// console.log(states);
// states.shift();
// console.log(states);
// console.log(states.indexOf("AP"));
// console.log(states.indexOf("APP"));
console.log(Array.from("madhuri"));