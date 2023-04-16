const start=document.querySelector("#start");
const reset=document.querySelector("#reset");
const timerTxt=document.querySelector("#timerTxt");

let time=0;
let active=true;
const stoper=()=>{
    console.log("click");
    if(active){
     active=false;   
    start.textContent="Pause";
    id=setInterval(timer,10);
    }else{
        active=true;
        start.textContent="Start";
        clearInterval(id);
    }
};
const timer=()=>{
    time++;
    timerTxt.textContent=(time/100).toFixed(2);
};
const stop = () => {
    clearInterval(id);
    timerTxt.textContent = "---";
    start.textContent = "Start";
    active = true;
    time = 0;
  };
start.addEventListener("click", stoper);
reset.addEventListener("click",stop);