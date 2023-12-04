
const scoringSummary_divName = "jsx-254080597 ScoringSummary"
const tableBody_divName = 'Table__TBODY'

console.log("Waiting for DOM to load.")

//Get ESPN login cookies for private leagues
/*
chrome.cookies.get({"url": "https://fantasy.espn.com", "name": "espn_s2"}, function(cookie) {
    console.log(cookie.value)
    sessionStorage.setItem('espn_s2') = cookie.value;
});
chrome.cookies.get({"url": "https://fantasy.espn.com", "name": "SWID"}, function(cookie) {
    console.log(cookie.value)
    sessionStorage.setItem('SWID') = cookie.value;
}); 
*/


//Wait for needed elements to load...
const observer = new MutationObserver((mutations, obs) => {
    const isLoaded = document.getElementsByClassName(scoringSummary_divName)[0];
    if (isLoaded) {
        obs.disconnect();
        doInjection();
        return;
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true
  });

function doInjection() {

    //Make a copy of the daily scoreboard element
    console.log('Required Elements Loaded')

    //Get ESPN league information for private leagues
    var swid
    var espn_s2
    chrome.runtime.sendMessage({url: "https://fantasy.espn.com", cookie: "SWID"}, function(response) {
        swid = response["cookie"]
        console.log("SWID: ", swid);
    });
    chrome.runtime.sendMessage({url: "https://fantasy.espn.com", cookie: "espn_s2"}, function(response) {
        espn_s2 = response["cookie"]
        console.log("espn_s2: ", espn_s2);
    });

    //Start creation of projection-div
    var projectionDiv = document.getElementsByClassName(scoringSummary_divName)[0].cloneNode(true);
    projectionDiv.className = "projection-div"
    
    //Go through the projection div and update the projection values
    tableBodyChildren = projectionDiv.getElementsByClassName(tableBody_divName)[0]

    
    //Append to the parent Node
    var parent = document.getElementsByClassName(scoringSummary_divName)[0].parentNode
    parent.appendChild(projectionDiv)
}


