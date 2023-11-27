chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.greeting === 'url') {
    console.dir(message);
    sendResponse({ message: "Received!" })
  }
})