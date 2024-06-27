const container=document.getElementById('container')
const colors=['red','cyan','lime','yellow','orange','steelblue','purple','crimson','white']
const squares=500
for(let i=0;i<squares;i++){
    const sqr=document.createElement('div')
    sqr.classList.add('square')
    sqr.addEventListener('mouseover',()=>setColor(sqr))
    sqr.addEventListener('mouseout',()=>removeColor(sqr))
    container.appendChild(sqr)
}
function setColor(sqr){
    const color=getRandomColor()
    sqr.style.background=color
    sqr.style.boxShadow=` 0 0 2px ${color},0 0 10px ${color}`
}
function removeColor(sqr){
    sqr.style.background='#1d1d1d'
    sqr.style.boxShadow='0 0 2px #000'
}
function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}