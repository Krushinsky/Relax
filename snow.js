"use strict";
const myButton = document.querySelector("#myButton");
myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener("click", () => {
    const audioSnow = document.querySelector("#player");
    audioSnow.src = 'audioSnow.mp3';
    audioSnow.play();
    const video = document.querySelector("#myVideo");
    video.src = 'videoSnow.mp4';
    video.play();
});
const timerSnow = 5;
let amountTimeSnow = timerSnow * 60;
function calculateTimeSnow() {
    const countdownSnow = document.querySelector('#countdown');
    let minutes = Math.floor(amountTimeSnow / 60);
    let seconds = amountTimeSnow % 60;
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    countdownSnow.textContent = `${minutes} :${seconds}`;
    amountTimeSnow--;
    if (amountTimeSnow < 0) {
        stopTimerSnow();
        amountTimeSnow = 0;
    }
    function stopTimerSnow() {
        clearInterval(timerIdSnow);
    }
}
let timerIdSnow = setInterval(calculateTimeSnow, 1000);
