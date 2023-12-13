const myButton : Element | null = document.querySelector("#myButton");
myButton?.addEventListener("click",() =>{
    const audioSnow : any = document.querySelector("#player") as HTMLAudioElement;
    audioSnow.src = 'audioSnow.mp3';
    audioSnow.play();

    // 2 способ
    // const audio : any = (<HTMLAudioElement>document.querySelector("#player"));
    // audio.src = 'audioSnow.mp3';
    // audio.play();

    // 3 способ
    // const audio : any  = new Audio('audioSnow.mp3').play();

    // 4 способ
    // const audio = new Audio;
    // audio.src ='audioSnow.mp3';
    // audio.play();
    
    const video : any = document.querySelector("#myVideo") as HTMLVideoElement;
    video.src = 'videoSnow.mp4';
    video.play();

    // 2 способ
    // const video : any = (<HTMLVideoElement>document.querySelector("#myVideo"));
    // video.src = 'videoSnow.mp4';
    // video.play();
})

const timerSnow : number = 5;
let amountTimeSnow : number = timerSnow *60;

function calculateTimeSnow(){
    const countdownSnow : Element | null  = document.querySelector('#countdown');
    let minutes : number = Math.floor(amountTimeSnow/60);
    // let seconds : any = amountTime%60;
    let seconds : string | number = amountTimeSnow%60;
    if (seconds < 10){
        seconds = '0' + seconds;
    }

    (countdownSnow as HTMLElement).textContent = `${minutes} :${seconds}`;
    amountTimeSnow --;

    if (amountTimeSnow < 0 ){
        stopTimerSnow();
        amountTimeSnow = 0;
    }
    
    function stopTimerSnow(){
        clearInterval(timerIdSnow);

    }
    
}

let timerIdSnow : number = setInterval(calculateTimeSnow, 1000)
