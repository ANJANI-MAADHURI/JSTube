// User is allowed to purchase when he is:
// logged in
// Email is verified
// cardInfo valid
// If any one is missing, stop the purchase

var isLoggedIn = true;
var isEmailVerified = false;
var isCardInfo = true;

// if (isLoggedIn){
//     console.log("User is Logged IN");
//     if (isEmailVerified) {
//         console.log("Email is verified!"); 
//         if (isCardInfo) {
//           console.log("Card info is valid!");  
//         }
//     }
// }

if (isLoggedIn && isEmailVerified && isCardInfo) {
    console.log("User is allowed to make the purchase !");
} else {
    console.log("you are NOT allowed to make the purchase!");
}