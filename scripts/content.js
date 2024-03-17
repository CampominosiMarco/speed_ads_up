let song = "";
let count = 0;
let next = 0;


//Listener for message from background
chrome.runtime.onMessage.addListener(function(message) {
  if (message.yt_title) {
    song = message.yt_title;
    count = 0;
    next = 0;
  }
});


// Function to check if class "ytp-ad-simple-ad-badge" is present in DOM
function checkForAdBadgeAndSpeed() {
  const adBadgeElement = document.querySelector('.ytp-ad-simple-ad-badge');

  if (adBadgeElement) {

/*
    if (adBadgeElement.style.display === "none") {
      count = 0;
      return;
    }
*/

    const controller = document.querySelector('.vsc-controller');

    if (controller) {

      const shadowRoot = controller.shadowRoot;
  
      if (shadowRoot) {

        const controllerDiv = shadowRoot.querySelector('div#controller');

        if (controllerDiv) {

          const button = controllerDiv.querySelector('button[data-action="faster"]');

          if (button && (count <= 51)) {

            for (count; count <= 51; count++) {
              button.click();
            }

            chrome.runtime.sendMessage({ msg: "AD SPEED UP!" });

      //      console.log("AD SPEED UP!");

          }
        }
      }
    }
  }
}


//Function to check if class "ytp-ad-skip-button-modern" is present in DOM
function checkForSkipButtonAndClick() {
  const skipButton = document.querySelector('.ytp-ad-skip-button-modern');

  if (skipButton) {
    skipButton.click();
    chrome.runtime.sendMessage({ msg: "SKIP AD button clicked" });
  //  console.log("SKIP AD button clicked");
  }
}


//Function to check if class "ytp-autonav-endscreen-upnext-header" is present in DOM to skid to next video
function checkForSkipNextAndClick() {
  const headerDiv = document.querySelector('.ytp-autonav-endscreen-upnext-header');

  if (headerDiv) {

    const spanChild = headerDiv.querySelector('span');

    if (spanChild && next == 0) {

      const buttonNext = document.querySelector('a.ytp-autonav-endscreen-upnext-button');
      buttonNext.click();
      chrome.runtime.sendMessage({ msg: "NEXT button clicked" });
    //  console.log("NEXT button clicked");
      next = 1
    }
  }
}


// Callback for Observer
function mutationCallback(mutationsList) {
  for(const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        checkForSkipButtonAndClick();
        checkForSkipNextAndClick();
        checkForAdBadgeAndSpeed();
      }
  }
}

// MutationObserver
const observer = new MutationObserver(mutationCallback);

// Observer Configuration DOM
const observerConfig = {
  childList: true,
  subtree: true
};

// Observer Start
observer.observe(document.documentElement, observerConfig);