let history = "";


//Message at installation
chrome.runtime.onInstalled.addListener(function() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString('it-IT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    console.log('[' + formattedDateTime + '] Extension "' + chrome.runtime.getManifest().name + '" installed!');
    history = '[' + formattedDateTime + '] Extension "' + chrome.runtime.getManifest().name + '" installed!';
});


//Listener on Tab Update
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {

    //Correct Event Selection
    if (changeInfo.title && changeInfo.title != "YouTube") {

        // Prepare some infos
        let temp_title = changeInfo.title.replace(/\s*-\s*YouTube$/, '');
        
        history = history + '<br><span style = "color: white;">.:. ' + temp_title + ' .:.</span>';

        //Sending info to active Tab
        chrome.tabs.sendMessage(tabId, {yt_title: temp_title});

    }
});


// Message from content script to update history
chrome.runtime.onMessage.addListener(function(message) {
    if(message.msg){
        history = history + '<br><span style = "color: red; font-weight: bold">' + message.msg + '</span>';
    }
});


// Message from popup to update DIV
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "getHistory") {

        // Send Responce to popup
        sendResponse({ msg: history });
        return true;
        
    }
});