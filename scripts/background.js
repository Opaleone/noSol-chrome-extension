chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  if (req.greeting === 'Hello') {
    const urlReg = /(http|https):\/\/leetcode.com\/problems\/[a-z-/]{1,256}/gi
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const activeTab = tabs[0];
      const tabUrl = activeTab.url;

      console.log(activeTab);
      console.log(tabUrl.match(urlReg));
      sendRes({ farewell: 'Goodbye' })
    })
  }
})