const resetButton=document.getElementById('reset')
const playButton=document.getElementById('play')
const timerElement=document.getElementById('timer')
const root=document.querySelector(':root')
const totalSeconds=60
let playing=false
let currentSeconds=totalSeconds
timerElement.innerText=formatTime(totalSeconds)
const timeInterval=setInterval(run,1000)
resetButton.addEventListener('click', resetAll)
playButton.addEventListener('click',()=>{
    playing=!playing
    playButton.classList.toggle('play')
    playButton.classList.toggle('bg-green-500')
    const playIcon=playButton.querySelector('i')
    playIcon.classList.toggle('fa-play')
    playIcon.classList.toggle('fa-pause')

})
function run(){
    if(playing){
        currentSeconds-=1;
        if(currentSeconds<=0){
            clearInterval(timeInterval)
            resetAll()
        }
        timerElement.innerText=formatTime(currentSeconds)
        root.style.setProperty('--degrees', calcDeg())
    }
}
function calcDeg(){
    return `${360-(currentSeconds/totalSeconds)*360}deg`
}
function resetAll(){
    playing=false
    playButton.classList.remove('play')
    playButton.classList.remove('bg-green-500')
    const playIcon=playButton.querySelector('i')
    playIcon.classList.remove('fa-pause')
    playIcon.classList.add('fa-play')
    currentSeconds=totalSeconds
    timerElement.innerText=formatTime(totalSeconds)
    root.style.setProperty('--degrees', '0deg')

}

function formatTime(seconds){
    const minutes = Math.floor((seconds / 60))
    const newSeconds=seconds%60
    return `${minutes.toString().padStart(2,'0')}:${newSeconds.toString().padStart(2,'0')}`

}