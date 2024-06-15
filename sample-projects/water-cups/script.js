const smallCups=document.querySelectorAll('.cup-small')
const liters=document.getElementById('liters')
const percentage=document.getElementById('percentage')
const remained=document.getElementById('remained')
updateBigCup()
smallCups.forEach((cup,i)=>{
    cup.addEventListener('click',()=>highlightCups(i))
})
function highlightCups(i){
    //if the current cup is full & next cup is not full then we can remove the full class with the click 
    if(smallCups[i].classList.contains('full')&&!smallCups[i].nextElementSibling.classList.contains('full')){
        i--
    }
    smallCups.forEach((cup,j)=>{
        if(j<=i){//checking if the current index we at is less than on what we clicked 
            //if yes then add the full class to it 
            //basically we are adding the full class the all the cups before it 
            cup.classList.add('full')
        }
        else{
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}
function updateBigCup(){
    const fullCups=document.querySelectorAll('.cup-small.full').length
    const totalCups=smallCups.length
    if(fullCups===0){
        percentage.style.visibility='hidden'
        percentage.style.height=0
    }else{
        percentage.style.visibility='visible'
        percentage.style.height=`${fullCups/totalCups*330}px`
        percentage.innerText=`${fullCups/totalCups*100}%`
    }
    if(fullCups==totalCups){
        remained.style.visibility='hidden'
        remained.style.height='0'
    }
    else{
        remained.style.visibility='visible'
        liters.innerText=`${2-(250*fullCups/1000)}L`
    }
}