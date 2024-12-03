chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.sentryPresent !== undefined) {
    const iconPath = request.sentryPresent ? "icon_color.png" : "icon_gray.png";

    // Change the extension icon based on Sentry presence
    chrome.action.setIcon({ path: iconPath, tabId: sender.tab.id });

    const domain = new URL(sender.tab.url).hostname;

    // Send a notification if Sentry is found
    if (request.sentryPresent) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: iconPath,
        title: "Sentry Detected",
        message: `${domain} has loaded Sentry error tracking`,
      });
    }
  }
  sendResponse({ status: "Icon and notification processed" });
});
