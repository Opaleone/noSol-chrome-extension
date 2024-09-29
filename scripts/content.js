(async () => {
  let timerLength;
  let timerPower;
  let storeToggle;
  let solutionsTab;

  chrome.storage.sync.set({ "toggleStore": true }, () => {
    console.log('Settings Saved!');
  })
  await chrome.storage.sync.get(null, async (res) => {
    timerLength = await res.timerLength;
    timerPower = await res.timerPower;
    storeToggle = await res.toggleStore;

    console.log(parseInt(timerLength));
    console.log(timerPower);
  })

  const findSolutions = (element) => {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(findSolutions)
    } else if (element.nodeType === Text.TEXT_NODE && element.textContent === "Solutions") {
      solutionsTab = element;
      return;
    }
  }

  findSolutions(document.body);

  const solCheck = (e) => {
    let jsInitCheckTimer = setInterval(checkForSol, 10);
    function checkForSol(e) {
      if (typeof solutionsTab !== 'undefined' || document.body.querySelector("[data-layout-path='/ts0/tb2']")) {
        console.log("Solutions Removed!")
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
})();