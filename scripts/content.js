(async () => {
  let getUrl = await chrome.runtime.sendMessage({ greeting: "Hello"});
  const urlReg = /(http|https):\/\/leetcode.com\/problems\/[a-z-/]{1,256}/gi
  let response;

  chrome.runtime.sendMessage({ greeting: "Hello" });

  chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
    if (req.greeting === 'Hello') {
      if (req.url.match(urlReg)) response = true;
      else response = false;
      sendRes({ farewell: 'Goodbye'})
    }
  })

  setTimeout(() => {
    console.log(response);
  }, 1000);

  const solutionsTab = document.body.querySelector("[data-layout-path='/ts0/tb2'");

  console.log('ding');
  console.log(solutionsTab);
})();