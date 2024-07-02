const password= document.getElementById('password')
const background=document.querySelector('.background')
password.addEventListener('input',(e)=>{
    const length=e.target.value.length
    const blur = 20-length*2
    background.style.filter=`blur(${blur}px)`
})