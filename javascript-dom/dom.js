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
// var li=document.getElementsByTagName('li');//will get every li tag 
//and we can do the same as we did with class name 

//Query selector
// only works  for one item , only grabs the first one
// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px red';

// var input=document.querySelector('input');
// input.value='hello world';//only grabs the first input 
// var input=document.querySelector('input[type="submit"]');//only grabs the tag with particular type
//can do the same with class name

//querry selector all
// var titles = document.querySelectorAll('.title');

//traversing the dom
// var itemList=document.querySelector('#items');
//parent node property
// console.log(itemList.parentNode);//gives the parent node div main
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);//return the parent node  of main i.e. container 

//parent elements 
// console.log(itemList.parentElement);//gives the parent element div main
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);//return the parent element of main i.e. container 

//child nodes
// console.log(itemList.childNodes);

// console.log(itemList.children);//does not look at any line breaks in the html and returns a html collection instead of node list

//first child
// console.log(itemList.firstChild);//it gives the text node
//first element child
// console.log(itemList.firstElementChild);//gives the first li 
//similarly we  have last child and last element child 

//next sibling
// console.log(itemList.nextSibling);//similar to fist child it gives the text node
//we can use next element sibling
// we have previousSibling and previousElementSibling2

//createElement
//creat a div
// var newDiv = document.createElement('div');
//add class
// newDiv.className='hello';
//add id
// newDiv.id='hello1';
//add attribute
// newDiv.setAttribute('title','Hello Div')

//create a text node
// var newDivText = document.createTextNode('hello world');
//add text to div
// newDiv.appendChild(newDivText);
// var container=document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// container.insertBefore(newDiv,h1);
// newDiv.style.fontSize='30px';

//event listener
var button=document.getElementById('button').addEventListener
('click',buttonClick);
function buttonClick(e){
    // console.log('button click');
    // document.getElementById('header-title').textContent='Changed';
    // document.querySelector('#main').style.backgroundColor='#f4f4f4';
    // console.log(e);

    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    var output=getElementById('output');
    output.innerHTML=
}