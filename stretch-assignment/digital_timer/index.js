// You will be making a timer that:
//   * Counts up to 10 seconds
//   * Increments every 10 ms
//   * Has digits change to red when it gets to 10 seconds
//   * Should not count past 10 seconds
//   * Use window.setInterval


const clock = document.querySelector('.digits');
const secTens = document.querySelector('#secondTens');
const secOnes = document.querySelector('#secondOnes');
const minsHun = document.querySelector('#msHundreds');
const minTens = document.querySelector('#msTens');
const colon = document.querySelector('.colon');

let digitalTimer = setInterval(timer, 1000);

function timer() {
  let sec = 
}

