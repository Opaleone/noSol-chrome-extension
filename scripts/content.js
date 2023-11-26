(async () => {
  const { getUrl } = await chrome.runtime.sendMessage({ greeting: "url"});

  console.log(getUrl);

  const toggle = document.body.querySelector('.slider');

  toggle.addEventListener('click', () => {
    console.log('the queen is gone');
  })
})();