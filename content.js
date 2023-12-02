
const scoringSummary_divName = "jsx-254080597 ScoringSummary"
const tableBody_divName = 'Table__TBODY'

console.log("Waiting for DOM to load.")

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
    console.log('Required Elements Loaded')
    var scoringSummaryDiv = document.getElementsByClassName(scoringSummary_divName);
    var parent = scoringSummaryDiv.parentNode
    console.log(typeof(scoringSummaryDiv))
    console.log(typeof(parent))
    //parent.appendChild(scoringSummaryDiv)
}


