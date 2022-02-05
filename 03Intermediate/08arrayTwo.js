// OPTION 1
 function isEven(element) {
 if ( element % 2 === 0 ){
    return true;
 }else{
    return false;
 }
 }
 console.log(isEven(211));

// OPTION 2:
 function isEven(element){
 return element % 2 === 0 ;
 }
 console.log(isEven(2));

 // OPTION 3:
 var isEven = function(element) {
     return element % 2 === 0;
 }
 console.log(isEven(21));
 
 // OPTION 4: Arrow Functions.
 /* Return key word should be used with arrow functions
  Arrow functions use  () => {} */
  var isEven = (element) => {
    // Arrow functions without Return, will give weird output.
    // console.log would give "undefined" as output
     //   element % 2 === 0;
    return element % 2 === 0;
  }
  console.log(isEven(212));

 // Option 5: Callback functions

 var isEven = (element) => {
    return element % 2 === 0;
 }
 var result = [2,4,6,9,10].every(isEven)
 console.log(result);
 
 // option 6:
  var result = [2, 4, 6, 8, 10].every( (e) => {
     return e%2 === 0;
  } )
  console.log(result);

  /* If we dont use the return key word, technically, 
  we shoud not be using {} 
  the below code can also be written as :
    var result = [2, 4, 6, 8, 10].every((e) => {
        return e % 2 === 0;
    })
    var result = [2, 4, 6, 8, 10].every((e) => (e%2 === 0) )
  */  
 var result = [2, 5, 6, 8, 10].every((e) => e % 2 === 0);
  console.log(result);

 var result = [2, 5, 6, 8, 10].every((e) => (e % 2 === 0));
 console.log(result);