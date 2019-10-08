function injectTheScript() {
	chrome.tabs.executeScript(null, { file: 'iReply.js' });
};
function injectTheScript1() {
	chrome.tabs.executeScript(null, { file: 'iCall.js' });
};
function injectTheScript2() {
	chrome.tabs.executeScript(null, { file: 'iDb.js' });
};
function csschanges() {
	chrome.tabs.executeScript(null, { file: 'csschanges.js' });
};
function injectTheScript3() {
	chrome.tabs.executeScript(null, { file: 'iDev.js' });
};
function injectTheScript4() {
	chrome.tabs.executeScript(null, { file: 'iResponce.js' });
};
document.getElementById('iReply').addEventListener('click', injectTheScript);
document.getElementById('iCall').addEventListener('click', injectTheScript1);
document.getElementById('iDb').addEventListener('click', injectTheScript2);
document.getElementById('iDev').addEventListener('click', injectTheScript3);
document.getElementById('iResponce').addEventListener('click', injectTheScript4);

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete') {

		chrome.tabs.executeScript(null, { file: 'csschanges.js' });


	}
})

