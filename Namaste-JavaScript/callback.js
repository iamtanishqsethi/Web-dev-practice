// setTimeout(function (){
//     console.log("timer")//after the given time has elapsed the callback function will execute
// },5000)
// function x(y){
//     console.log("x")
//     y()
//  }
//  x(function y(){//here y is the callback function
//     console.log("y")
//  })
// let count = 0;//but this is global and can be modified , no protection
function attachEvent(){
    let count=0
    document.getElementById('clickMe').addEventListener("click", function x() {
        //this is again a callback function
        console.log("clicked");
        count++
        console.log(count);
        //after the button is clicked it will be pushed inside our callstack
    })
}
attachEvent()
