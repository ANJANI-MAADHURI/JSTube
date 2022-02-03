// if the user is authenticated show the SIGNOUT button
// otherwise show the option to Login/SignUp

var authenticated = true;

// if (authenticated) {
//     console.log("Show signOUT button");
// } else {
//     console.log("Show Login/SignUp button");
// }

//  Above code can be optimized with the use of ternary operator also
// Conditional(ternary) operator 
// (condition ? ifTrue : ifFalse)

authenticated ? console.log("LOGOUT Button") : console.log("SIGNUP/LOGIN Button"); 