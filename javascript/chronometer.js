class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null; 
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if(callback) { //we have to check if we actually call this function
        callback()
      } this.currentTime++;
      }, 1000);
  }

  getMinutes() {
    this.minutes = Math.floor(this.currentTime / 60);
    return this.minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let twoDigits = value.toString().padStart(2, '0');
    return twoDigits;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
