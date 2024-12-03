(function () {
  let sentryFound = false;

  const scripts = document.getElementsByTagName("script");
  for (let script of scripts) {
    if (
      script.src.includes("sentry") ||
      script.src.includes("browser.sentry-cdn.com")
    ) {
      sentryFound = true;
      break;
    }
  }

  chrome.runtime.sendMessage({
    sentryPresent: sentryFound,
  });
})();
