'use strict';

export default function timer(id, deadLine) {
  function getTimeRemainig(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    let timer = document.querySelector(selector);
    let days = timer.querySelector(`#days`);
    let hours = timer.querySelector(`#hours`);
    let minutes = timer.querySelector(`#minutes`);
    let seconds = timer.querySelector(`#seconds`);
    let timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      let t = getTimeRemainig(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(id, deadLine);
}
