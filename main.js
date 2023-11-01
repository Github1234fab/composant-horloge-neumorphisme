let index = 0;
let secondsDom = document.querySelector(".seconds");
let minutesDom = document.querySelector(".minutes");
let hoursDom = document.querySelector(".hours");

function upDateClock() {
  let now = new Date();
  let secondes = now.getSeconds().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let hours = now.getHours().toString().padStart(2, "0");

  secondsDom.innerText = secondes;
  minutesDom.innerText = minutes;
  hoursDom.innerText = hours;
}
setInterval(upDateClock, 1000);
