const progress=document.getElementById('progress')
const prev=document.getElementById('prev')
const next=document.getElementById('next')
const circles=document.querySelectorAll('.circle')
let curreentActive=1

prev.addEventListener('click',()=>{
    curreentActive--
    if(curreentActive<1){
        curreentActive=1
    }
    update()
})
next.addEventListener('click',()=>{
    curreentActive++
    if(curreentActive>circles.length){
        curreentActive=circles.length
    }
    update()

})

function update(){
    circles.forEach((circle,idx)=>{
        if(idx<curreentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })
    const actives=document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    if(curreentActive === 1) {
        prev.disabled = true
    } else if(curreentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
