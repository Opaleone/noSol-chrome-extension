const toggle = document.body.querySelector('.slider');

toggle.addEventListener('click', () => {
  const response = chrome.runtime.sendMessage({ greeting: "Hello" });
  console.log(response);
})