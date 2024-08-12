const arr=[5,1,3,2,6]
//map function is used to transform an array & get a new array out of it
// function double(x){
//     return x*2
// }
// function binary(x){
//     return x.toString(2)//convert it to binary string
// }
// const output=arr.map(binary)//we can also pass direct functions in the map
//can do the same using arrow functions
// const output=arr.map((x)=>x.toString(2))
// console.log(output)


//filter is basically finding the element which matches the condition
// function isOdd(x){
//     return x%2
// }
// const output=arr.filter(isOdd)

//reduce is used where we have to take all the elements from the array and get a single output from it
//sum  or max
//normal way
// function sum(arr){
//     let sum=0
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
//
//     }
//     return sum
// }
//
//
// console.log(sum(arr))

//using reduce
// const output=arr.reduce(function(acc,cur){
//     //comparing with above example
//     //curr is arr[i] & acc is sum
//     acc=acc+cur;
//     return acc
// },0)//0 is the initial value of acc
//finding max
// const output=arr.reduce(function(max,curr){
//     if(curr>max){
//         max=curr;
//     }
//     return max;
// },0)


// console.log(output)
//assume this data is coming from an api
const users=[
    {firstName:"tanishq",lastName:"sethi",age:18},
    {firstName:"akshay",lastName:"saini",age:26},
    {firstName:"jackson",lastName:"jackson",age:50},
    {firstName:"jersey",lastName:"jersey",age:75},
    {firstName:"jersey",lastName:"jersey",age:50},

]
// const output=users.map((x)=>x.firstName+" "+x.lastName);
// console.log(output);

//if we need to find how many users have particular age
// const output=users.reduce(function (acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]=++acc[curr.age]
//     }
//     else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{})
//need to find name of people if age is less than 30
const output=users.filter((x)=>x.age<=30).map((x)=>x.firstName)
console.log(output)

