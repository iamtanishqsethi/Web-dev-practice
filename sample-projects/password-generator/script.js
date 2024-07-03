const result=document.getElementById('result')
const len=document.getElementById('length')
const upperCase=document.getElementById('uppercase')
const lowerCase=document.getElementById('lowercase')
const num=document.getElementById('numbers')
const symbol=document.getElementById('symbols')
const generate=document.getElementById('generate')
const clipboard=document.getElementById('clipboard')

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
    //The String.fromCharCode() static method returns a string created from the 
    //specified sequence of UTF-16 code units.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
function getRandomSymbol(){
    const symbols='!@#$%^&*(){}[]=/,.?_-'
    return symbols[Math.floor(Math.random()*symbols.length)]
}
const RandomFunc={//using an object to get the functions 
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
}


generate.addEventListener('click',()=>{
    const length=+len.value//+ convets it to a number from a string
    const hasUpper=upperCase.checked
    const hasSymbol=symbol.checked
    const hasNumber=num.checked
    const hasLower=lowerCase.checked

    result.innerText=generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    if(typesCount === 0) {
        return ''
    }
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += RandomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)
    console.log(finalPassword)
    return finalPassword
}
clipboard.addEventListener('click',()=>{
    const textarea=document.createElement('textarea')
    const password=result.innerText
    if(!password){
        return
    }
    textarea.value=password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})