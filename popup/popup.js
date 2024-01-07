const toggle = document.body.querySelector('.slider');
let storeToggle;

chrome.storage.sync.get(null, (res) => {
  console.log(res);
  storeToggle = res.toggleStore;
})

toggle.addEventListener('click', async () => {
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