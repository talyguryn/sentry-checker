(function () {
  const scripts = document.getElementsByTagName("script");
  let sentryFound = false;

  for (let script of scripts) {
    if (
      script.src.includes("sentry") ||
      script.src.includes("browser.sentry-cdn.com")
    ) {
      sentryFound = true;
      break;
    }
  }

  // Notify the background script about the result
  chrome.runtime.sendMessage({ sentryPresent: sentryFound });
})();
