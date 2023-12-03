chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  if (req.greeting === 'Hello') {
    sendUrl();
    sendRes({ farewell: 'Goodbye' })
  }
})

const sendUrl = () => {  
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const activeTab = tabs[0];
    const tabUrl = activeTab.url;

    chrome.runtime.sendMessage({ greeting: 'Hello', url: tabUrl })
  })
}