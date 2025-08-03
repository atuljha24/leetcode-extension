
document.getElementById("range").addEventListener("change", updateStats);
document.addEventListener("DOMContentLoaded", updateStats);

function updateStats() {
  const range = document.getElementById("range").value;

  chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: extractLeetCodeData,
      args: [range]
    }, (injectionResults) => {
      const result = injectionResults[0].result;
      document.getElementById("avgSolved").textContent = result.avg;

      const total = result.easy + result.medium + result.hard;
      document.getElementById("easy").style.width = (result.easy / total * 100) + "%";
      document.getElementById("medium").style.width = (result.medium / total * 100) + "%";
      document.getElementById("hard").style.width = (result.hard / total * 100) + "%";
    });
  });
}
