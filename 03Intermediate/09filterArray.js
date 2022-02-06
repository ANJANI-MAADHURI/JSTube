var testArray = [ 2, 4, 6, 3, 5, 9, 8, 10, 11 ];
// Fill: Value; start position, end position
console.log(testArray.fill(0));
console.log(testArray.fill("M", 3));
console.log(testArray.fill("p" , 3, 6));

const myNumber = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];

const result = myNumber.filter( (num) => num != 79 );
console.log(result);

var users = [ "Ted", "Tim", "Sam", "Kobe", "Vivek" ];
// console.log(users.slice(1,4,));
// console.log(users.slice(1));

users.splice(1,2,"HI");
console.log(users);
