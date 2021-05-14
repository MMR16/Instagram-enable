let redColor = "#FE7878";

//store color on extension storage
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ redColor });
});
