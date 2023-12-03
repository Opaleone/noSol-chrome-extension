const toggle = document.body.querySelector('.slider');
chrome.runtime.sendMessage({ greeting: "Hello" });
let response;
const urlReg = /(http|https):\/\/leetcode.com\/problems\/[a-z-/]{1,256}/gi

chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  if (req.greeting === 'Hello') {
    response = req.url;
    sendRes({ farewell: 'Goodbye'})
  }
})

setTimeout(() => {
  console.log(response);
}, 1000);

toggle.addEventListener('click', async () => {
  // doSomething();
})