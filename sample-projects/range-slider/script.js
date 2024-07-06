const range =document.getElementById('range')
range.addEventListener('input',(e)=>{
    const value=+e.target.value;
    const label=e.target.nextElementSibling

    const rangeWidth=getComputedStyle(e.target).getPropertyValue('width')
    const labelWidth=getComputedStyle(label).getPropertyValue('width')
    const numWidth=+rangeWidth.substring(0,rangeWidth.length-2)
    const numLabelWidth=+labelWidth.substring(0,labelWidth.length-2)
    const max=+e.target.max
    const min=+e.target.min
    //TODO:revisit this formula to set position of label
    const left=value*(numWidth/max)-numLabelWidth/2 +scale(value,min,max,10,-10)

    label.style.left=`${left}px`
    label.innerHTML=value

})
//function to fix the 10px offset at the ends (at value=0 and 100)
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale=(num,inMin,inMax,outMin,outMax)=>{
    return (num-inMin)*(outMax-outMin)/(inMax-inMin)+outMin
}