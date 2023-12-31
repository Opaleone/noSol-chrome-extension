const toggle = document.body.querySelector('.slider');
let storeToggle;
chrome.storage.sync.get(['toggleStore'], function(items) {
  storeToggle = items.toggleStore;
});

toggle.addEventListener('click', async () => {
  console.log(storeToggle);

  switch (storeToggle) {
    case true:
      storeToggle = false;
      chrome.storage.sync.set({ 'toggleStore': false }, () => {
        console.log('ToggleStore set to false');
      })
      break;
    case false:
      storeToggle = true;
      chrome.storage.sync.set({ 'toggleStore': true }, () => {
        console.log('ToggleStore set to true');
      })
      break;
  }
});