
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    
    console.log("Getting " + msg["cookie"] + "cookie from " + msg["url"])

    chrome.cookies.get({url: msg["url"], name: msg["cookie"]}, ({value: cookie}) => {
        console.log(cookie)
        sendResponse({"cookie": cookie});
    });

    // keep sendResponse channel open
    return true;
});
