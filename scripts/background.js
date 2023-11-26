chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.greeting === 'url') {
    getUrl();
  }
})

const getUrl = () => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    let resUrl = tabs[0].url;
    console.log(resUrl);
  });
}