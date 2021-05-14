// Initialize button with user's preferred color
let btn = document.getElementById("but");
//Coloring Buttons

chrome.storage.sync.get("redColor", ({ redColor }) => {
  btn.style.backgroundColor = redColor;
});

// When the button is clicked, inject setPageBackgroundColor into current page

btn.addEventListener("click", async () => {
  btn.innerHTML = "Enabled";
  btn.style.backgroundColor = "rgb(100,255,100)";
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: download,
  });
});

function download() {
  setInterval(() => {
    let x = document.querySelectorAll("img");
    let z = document.querySelectorAll("video");
    for (const iterator of x) {
      iterator.style.zIndex = "1";
    }
    for (const iterator of z) {
      iterator.style.zIndex = "2";
      iterator.controls = "enable";
      iterator.loop = "true";
    }
  }, 1000);
}
