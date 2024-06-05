const search = document.querySelector('.search')
const btn=document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click',()=>{
    search.classList.toggle('active')//toggel used to add and remove the added class
    input.focus()

})