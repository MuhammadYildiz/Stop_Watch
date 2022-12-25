const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const restart = document.querySelector('.restart');
const second= document.querySelector('.second');
const milSecond= document.querySelector('.milSecond');
let sec = 0;
let milSec = 0;
let myInterwal;

const time = ()=>{
    milSec++;
    if (milSec <10){
        milSecond.innerHTML = '0'+ milSec;
    }
    else{
        milSecond.innerHTML = milSec;
    }
    if (milSec > 99){
        sec ++;
        if(sec <10){
            second.innerHTML = '0'+ sec;
        }
        else{
            second.innerHTML = sec;
        }
        milSec = 0;
    }
}

start.addEventListener('click',()=>{
    myInterwal = setInterval(time,10);
    start.style.display = 'none'
})
stop.addEventListener('click',()=>{
    clearInterval(myInterwal)
    start.style.display = 'inline-block'
})
restart.addEventListener('click',()=>{
    clearInterval(myInterwal)
    sec = '00'
    milSec = '00';
    second.innerHTML = sec;
    milSecond.innerHTML = milSec;
    start.style.display = 'inline-block'
})
    
