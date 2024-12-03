document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "getStatus" },
      function (response) {
        const statusDiv = document.getElementById("status");
        if (response && response.sentryPresent !== undefined) {
          statusDiv.textContent = response.sentryPresent
            ? "Sentry is present on this page."
            : "No Sentry scripts found.";
        } else {
          statusDiv.textContent = "Could not determine Sentry status.";
        }
      }
    );
  });
});
