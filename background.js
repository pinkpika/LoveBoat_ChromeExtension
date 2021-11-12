chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://pinkpika.github.io/LoveBoat/";
    chrome.tabs.create({ url: newURL });
});