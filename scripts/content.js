(async () => {
  chrome.storage.sync.set({ "toggleStore": true }, () => {
    console.log('Settings Saved!');
  })
  let storeToggle;
  chrome.storage.sync.get(['toggleStore'], (res) => {
    storeToggle = res.toggleStore;
  })
  let solutionsTab;

  const myMain = (e) => {
    let jsInitCheckTimer = setInterval(checkForSol, 10)
    function checkForSol(e) {
      if (typeof solutionsTab !== 'undefined' || document.body.querySelector("[data-layout-path='/ts0/tb2']")) {
        clearInterval(jsInitCheckTimer);
        solutionsTab = document.body.querySelector("[data-layout-path='/ts0/tb2']");
        solutionsTab.style.display = "none";
      }
    }
  }

  window.addEventListener("load", myMain, false);
})();