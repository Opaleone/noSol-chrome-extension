const toggle = document.body.querySelector('.slider');

toggle.addEventListener('click', async () => {
  const response = await chrome.runtime.sendMessage({ greeting: "Hello" });
})