import '../common.css';

/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

class Timer {
  constructor({ onTick, selector }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.selector = selector;

    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(this.selector, time);
  }

  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;

      const time = this.getTimeComponents(deltaTime);
      this.onTick(this.selector, time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(this.selector, time);
  }

  pause() {}

  /*
   * - Приймає час в мілісекундах
   * - Вираховує скільки в них вміщається годин/хвилин/секунд
   * - Повертає об'єкт з властивостями hours, mins, secs
   */
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  /*
   * Приймає число, перетворює його в рядок і додає в початок 0, якщо число менше 2-х знаків
   */
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const clockface1 = document.querySelector('.timer-1 .js-clockface');
const startBtn1 = document.querySelector('button[data-action-start="timer-1"]');
const stopBtn1 = document.querySelector('button[data-action-stop="timer-1"]');
const clockface2 = document.querySelector('.timer-2 .js-clockface');
const startBtn2 = document.querySelector('button[data-action-start="timer-2"]');
const stopBtn2 = document.querySelector('button[data-action-stop="timer-2"]');
const clockface3 = document.querySelector('.timer-3 .js-clockface');

const timerOptions1 = {
  onTick: updateClockface,
  selector: clockface1,
};
const timer1 = new Timer(timerOptions1);

startBtn1.addEventListener('click', timer1.start.bind(timer1));
stopBtn1.addEventListener('click', timer1.stop.bind(timer1));

const timerOptions2 = {
  onTick: updateClockface,
  selector: clockface2,
};
const timer2 = new Timer(timerOptions2);
startBtn2.addEventListener('click', timer2.start.bind(timer2));
stopBtn2.addEventListener('click', timer2.stop.bind(timer2));

const timerOptions3 = {
  onTick: updateClockface,
  selector: clockface3,
};
const timer3 = new Timer(timerOptions3);
/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них вміщається годин/хвилин/секунд
 * - Рисує інтерфейс
 */
function updateClockface(selector = clockface1, { hours, mins, secs }) {
  selector.textContent = `${hours}:${mins}:${secs}`;
}
