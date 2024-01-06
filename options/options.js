const timerLength = document.body.querySelector("#timer-length");
const timerPower = document.body.querySelector("#timer-power");

const optionsObj = {
  timerLength: timerLength.value,
  timerpower: timerPower.checked
}

module.exports = optionsObj;