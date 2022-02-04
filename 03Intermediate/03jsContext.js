// Global Context allows us to call the function even before its declaration
sayHello();

function sayHello(){
    console.log("Hellooo");
}
// sayHello();

// if (2 === "2") {
//     console.log("this is TRUE");
// }

var myName = "Madhuri";

(myName === myName) ? (console.log("this is true")) : (console.log("this is FALSE")) ;
/*
In the browser, window.myName is valid. 
Here in NODE, window.myName will throw a syntax Error.
Global context is available in Javascript, and it is called differently in browser & NODE.
This example is to showcase the global context.
*/
(myName === window.myName) ? (console.log("this is true")) : (console.log("this is FALSE; window.myName works only browser"));