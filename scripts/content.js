(async () => {
  let getUrl = await chrome.runtime.sendMessage({ greeting: "Hello"});
  const urlReg = /(http|https):\/\/leetcode.com\/problems\/[a-z-/]{1,256}/gi
  let response;
  let solutionsTab;

  chrome.runtime.sendMessage({ greeting: "Hello" });

  chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
    if (req.url) {
      console.log('ding');
      if (req.url.match(urlReg)) response = true;
      else response = false;
      sendRes({ farewell: 'Goodbye'})
    }
  })

  setTimeout(() => {
    console.log(response);
  }, 1000);

  const myMain = (e) => {
    console.log('ding');
    let jsInitCheckTimer = setInterval(checkForSol, 10)

    if (typeof solutionsTab !== 'undefined' || document.body.querySelector("[data-layout-path='/ts0/tb2']")) {
      clearInterval(jsInitCheckTimer);
      solutionsTab = document.body.querySelector("[data-layout-path='/ts0/tb2']");
      console.log(solutionsTab);
    }
  }

  window.addEventListener("load", myMain, false);
})();