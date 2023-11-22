const toggle = document.body.querySelector('.slider');

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  let url = tabs[0].url;
  const siteMatch = /https:\/\/leetcode\.com\/problems\/([a-z-/]{1,256})/gi

  if (url.match(siteMatch)) {
    console.log(true)
  } else console.log(false)
});

toggle.addEventListener('click', () => {
  console.log('ding');
})