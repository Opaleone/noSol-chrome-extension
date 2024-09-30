const toggle = document.body.querySelector('.slider');
const slider = document.body.querySelector('#toggle-sol');
let storeToggle;
let cancelDisable;

chrome.storage.sync.get(null, (res) => {
  storeToggle = res.toggleStore;
  cancelDisable = res.cancelDisable;

  if (storeToggle) slider.checked = true;
  else slider.checked = false;

  if (cancelDisable) slider.disabled = false;
})

toggle.addEventListener('click', async () => {
  if (slider.disabled) return;

  switch (storeToggle) {
    case true:
      storeToggle = false;
      chrome.storage.sync.set({ 'toggleStore': false })
      break;
    case false:
      storeToggle = true;
      chrome.storage.sync.set({ 'toggleStore': true })
      break;
  }
});