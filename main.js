const nowTime = new Date().getTime();
const endTime = new Date('2024-01-25 23:34:00').getTime();
// console.log(nowTime);

// // console.log(leftTime);

// const days = Math.floor(leftTime / 3600000 / 24);
// const days = (endTime / 86400000) - (nowTime / 86400000)

// const hours = Math.floor(leftTime / 3600000)
// const seconds = (leftTime /  1000 )% 86400;


// const minutes
// // const hours
// console.log(hours)

const spanDay = document.querySelector('span.d');
const spanHour = document.querySelector('span.h');
const spanMin = document.querySelector('span.m');
const spanSec = document.querySelector('span.s');



setInterval(() => {
  const nowTime = new Date().getTime();

  const leftTime = endTime - nowTime;

  const days = Math.floor((endTime / ( 1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)))
  let hours = Math.floor(((endTime / ( 1000 * 60 * 60)) - (nowTime / (1000 * 60 * 60))) % 24)

  hours = hours < 10 ? `0${hours}` : hours;
  const minutes = Math.floor(((endTime / ( 1000 * 60)) - (nowTime / (1000 * 60))) % (60))
  const seconds = Math.floor(((endTime / ( 1000)) - (nowTime / (1000))) % (60))

  spanDay.textContent = days;
  spanHour.textContent = hours;
  spanMin.textContent = minutes;
  spanSec.textContent = seconds;



}, 1000);
