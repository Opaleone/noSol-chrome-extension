const toggle = document.body.querySelector('.slider');

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["../scripts/content.js"]
  });
});

toggle.addEventListener('click', async () => {
});