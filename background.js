chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const domain = new URL(sender.tab.url).hostname;

  if (request.sentryPresent) {
    const iconPath = request.sentryPresent ? "icon_color.png" : "icon_gray.png";

    chrome.action.setIcon({ path: iconPath, tabId: sender.tab.id });
    chrome.notifications.create({
      type: "basic",
      iconUrl: iconPath,
      title: "Sentry Detected",
      message: `${domain} has loaded Sentry error tracking`,
    });
  }
});
