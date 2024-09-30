(async () => {
  let storeToggle;
  let solutionsTab;
  let disabledTime = 30;
  const minuteConvert = 60*1000

  chrome.storage.sync.set({ "toggleStore": true });
  chrome.storage.sync.set({ "cancelDisable": false });
  await chrome.storage.sync.get(null, async (res) => {
    storeToggle = await res.toggleStore;
    // disabledTime = await res.setDisabledTime;
  })

  const solCheck = (e) => {
    let jsInitCheckTimer = setInterval(checkForSol, 10);
    function checkForSol(e) {
      if (typeof solutionsTab !== 'undefined' || document.body.querySelector("[data-layout-path='/ts0/tb2']")) {
        clearInterval(jsInitCheckTimer);
        solutionsTab = document.body.querySelector("[data-layout-path='/ts0/tb2']");
        solutionsTab.style.display = "none";
      }
    }
  }

  chrome.storage.onChanged.addListener((change) => {
    storeToggle = change.toggleStore.newValue;

    if (storeToggle) solutionsTab.style.display = "none";
    else solutionsTab.style.display = "block";
  })

  window.addEventListener("load", solCheck, false);
  
  setTimeout(() => {
    chrome.storage.sync.set({ "cancelDisable": true });
  }, disabledTime * minuteConvert)
})();