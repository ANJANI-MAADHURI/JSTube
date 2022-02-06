var user = {
    firstName  : "Madhuri" ,
    lastName   : "Chunduri" ,
    role       : "admin" ,
    logInCount : 25 ,
    isFBLogin  : true ,
}
// . featture is another way of accessing the object
console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.logInCount);
user.logInCount = 49;
console.log(user.logInCount);

console.table(user);
console.log(user);