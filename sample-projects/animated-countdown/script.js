const nums=document.querySelectorAll('.nums span')
const counter=document.querySelector('.counter')
const final=document.querySelector('.final')
const replay=document.getElementById('replay')
runAnimation()
replay.addEventListener('click',()=>reset())
function runAnimation(){
    nums.forEach((num,i)=>{
        const nextToLast=nums.length-1
        num.addEventListener('animationend',(e)=>{
            if(e.animationName==='GoIn'&& i!==nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
            }
            else if(e.animationName==='GoOut'&& num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            }
            else{
                counter.classList.add('hide')
                final.classList.add('show')
            }
        })
    })
}
function reset(){
    counter.classList.remove('hide')
    final.classList.remove('show')
    nums.forEach((num)=>{
        num.classList.value=''
    })
    nums[0].classList.add('in')
}