// // to examine the document object
// // console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title=555;
// console.log(document.body);//gives us the body from the html to the console
// console.log(document.all);//gives an array of all the elements 
// // we can access each element by using their index ex:document.all[2]; gives the third element
// console.log(document.forms);//html collection/array of all the forms from the html

//selectors
//get element by id
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// headerTitle.textContent='Hello';//disregards any srtykes applied to the text

// headerTitle.style.borderBottom='solid 3px black'


//getting elements by class
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent='hello 2';
// items[1].style.fontWeight='bold';

//cant directly do items.style.backgroundColor="#f4f4f4" ; this will give error
//as it is a collection , so we need to use a loop to iterate for every index

//get elements by tag name
var li=document.getElementsByTagName('li');//will get every li tag 
//and we can do the same as we did with class name 

//Query selector
// only works  for one item , only grabs the first one
var header = document.querySelector('#main-header');
header.style.borderBottom='solid 4px red';

var input=document.querySelector('input');
input.value='hello world';//only grabs the first input 
var input=document.querySelector('input[type="submit"]');//only grabs the tag with particular type
//can do the same with class name

//querry selector all
var titles = document.querySelectorAll('.title');