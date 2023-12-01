chrome.tabs.onUpdated.addListener((tabId, tab) => {
  let urlReg = /(http|https):\/\/leetcode.com\/problems\/[a-z-/]{1,256}/gi

  console.log(typeof(tab.url));

  // if (tab.url && tab.url.includes(urlReg)) {
  // }
})