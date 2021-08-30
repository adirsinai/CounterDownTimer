const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secondsEl = document.querySelector("#seconds");

const birthDay = "8 Jan 2022";

function countdown() {
  const birthDayDate = new Date(birthDay);
  const currentDate = new Date();

  const totalSeconds = (birthDayDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  // console.log(days, hours, minutes, seconds);
  daysEl.textContent = days;
  hoursEl.textContent = formatTime(hours);
  minsEl.textContent = formatTime(minutes);
  secondsEl.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//init call
countdown();

setInterval(countdown, 1000);
