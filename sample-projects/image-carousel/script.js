const imgs=document.getElementById('imgs')
const rightButton=document.getElementById('right')
const leftButton=document.getElementById('left')

const images=document.querySelectorAll('#imgs img')
let index=0
let interval=setInterval(run,2000)
function run(){
    index++
    changeImage()
}
function changeImage(){
    if(index>images.length-1){
        index=0
    }
    else if(index<0){
        index=images.length-1
    }
    imgs.style.transform=`translateX(${-index*500}px)`
}
function resetInterval(){
    clearInterval(interval)
    interval=setInterval(run,2000)
}
rightButton.addEventListener('click',()=>{
    index++
    changeImage()
    resetInterval()
})
leftButton.addEventListener('click',()=>{
    index--
    changeImage()
    resetInterval()
})