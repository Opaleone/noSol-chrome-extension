const toggle = document.body.querySelector('.slider');

toggle.addEventListener('click', () => {
  chrome.runtime.sendMessage({ greeting: "Hello" });
  console.log('the queen is gone');
})