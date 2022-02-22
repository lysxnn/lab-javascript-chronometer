const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  return chronometer.computeTwoDigitNumber(minutes);
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  return chronometer.computeTwoDigitNumber(seconds);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let splits = document.getElementById("splits");
  // don't know how to proceed
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.innerText = 'RESET';
  chronometer.reset(); // not working
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.className = 'btn stop';
    btnLeftElement.innerHTML = 'STOP';
    chronometer.start(printTime);
    console.log("Hello, currentTime", chronometer.currentTime);
  } else if (btnLeftElement.classList.contains('stop')) {
    btnLeftElement.className = 'btn start';
    btnLeftElement.innerHTML = 'START';
    chronometer.stop();
  };
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    btnRightElement.className = 'btn split';
    btnRightElement.innerHTML = 'SPLIT';
  } else if (btnRightElement.classList.contains('split')) {
    btnRightElement.className = 'btn reset';
    btnRightElement.innerHTML = 'RESET';
  };
});
