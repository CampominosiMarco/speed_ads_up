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
});


//Listener on Tab Update
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {

    //Correct Event Selection
    if (changeInfo.title && changeInfo.title != "YouTube") {

        // Prepare some infos
        let temp_title = changeInfo.title.replace(/\s*-\s*YouTube$/, '');
        
        //Sending info to active Tab
        chrome.tabs.sendMessage(tabId, {yt_title: temp_title});

    }
});