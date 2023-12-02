(async () => {
  let getUrl = await chrome.runtime.sendMessage({ greeting: "Hello"});
})();