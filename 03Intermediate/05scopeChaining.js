var name = "GLOBAL scope";
console.log(name);

function sayName(){
    // var name = "local scope";
    console.log(name);
    sayName2();
    function sayName2(){
            // var name = "local scope2";
            console.log(name);
    }
}
sayName();