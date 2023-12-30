(async () => {
  console.log('dong');
  let solutionsTab;

  const myMain = (e) => {
    let jsInitCheckTimer = setInterval(checkForSol, 10)
    function checkForSol(e) {
      if (typeof solutionsTab !== 'undefined' || document.body.querySelector("[data-layout-path='/ts0/tb2']")) {
        clearInterval(jsInitCheckTimer);
        solutionsTab = document.body.querySelector("[data-layout-path='/ts0/tb2']");
        console.log(solutionsTab);

        solutionsTab.style.display = "none";
      }
    }
  }

  window.addEventListener("load", myMain, false);
})();