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
const output=arr.reduce(function(arr,curr){
    return Math.max(arr,curr)
},0)


console.log(output)
