//function statement aka function declaration
function a(){
    console.log("a is called");
    //....
}
a()
//this way of creating a function statement is called a function statement
//this will even work if invoked before creation



//function expression
var b=function (){
    //...
    console.log("b is called");
}
b()
//function acts like a value
//this will give an error when invoked before creation
//due to hoisting, initially b is just like any other variable with 'undefined'


//function without a name is anonymous function
//they are used in a place where they are used as values
// function (){
//
// }


//named function expression
//anonymous functions with names
var c = function x(){
    console.log("c is called");
}
//but what if we do x() directly ,
//it will give a reference error , it is local variable
c()


//first class functions
//since functions can be treated as values ,
//we can pass functions as parameters in another functions
//we can also return an anonymous function