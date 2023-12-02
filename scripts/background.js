chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  if (req.greeting === 'Hello') {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const activeTab = tabs[0];
      const tabUrl = activeTab.url;

      console.log(tabUrl);
      sendRes({ farewell: 'Goodbye' })
    })
  }
})