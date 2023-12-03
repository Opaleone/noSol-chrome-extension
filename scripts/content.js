(async () => {
  let getUrl = await chrome.runtime.sendMessage({ greeting: "Hello"});

  const solutionsTab = document.body.querySelector("[data-layout-path='/ts0/tb2'");

})();