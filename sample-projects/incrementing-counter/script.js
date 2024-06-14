const counters=document.querySelectorAll('.counter')
counters.forEach(counter=>{
    counter.innerText='0'
    const updateCounter=()=>{
        const target=+counter.getAttribute('data-target')
        //the '+' converts it no a number from string , can do same with parsint or Number()
        const c=+counter.innerText
        const increment=target/300
        if(c<target){
            counter.innerText=`${Math.ceil(c+increment)}`
            setTimeout(updateCounter,1)
        }
        else{
            counter.innerText=target//to not go beyond the target value 
        }
    }
    updateCounter()
})