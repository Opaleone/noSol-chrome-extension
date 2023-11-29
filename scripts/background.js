chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.greeting === "Hello") {
    console.dir(message);
    sendResponse({ message: "Received!" })
  }
})