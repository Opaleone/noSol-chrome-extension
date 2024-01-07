const timerLength = document.body.querySelector("#timer-length");
const timerPower = document.body.querySelector("#timer-power");

chrome.storage.sync.set({ timerLength: timerLength.value, timerPower: timerPower.checked }, () => {
  console.log("Options set in storage!");
})