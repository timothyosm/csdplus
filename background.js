chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete' && tab.active) {
		chrome.tabs.executeScript(null, { file: 'csschanges.js' });
	}
})


function injectTheScript() {
	chrome.tabs.executeScript(null, { file: 'iReply.js' });
};
function injectTheScript1() {
	chrome.tabs.executeScript(null, { file: 'iCall.js' });
};
function injectTheScript2() {
	chrome.tabs.executeScript(null, { file: 'rReply.js' });
};
function injectTheScript3() {
	chrome.tabs.executeScript(null, { file: 'rCall.js' });
};
function injectTheScript4() {
	chrome.tabs.executeScript(null, { file: 'iDb.js' });
};
function injectTheScript5() {
	chrome.tabs.executeScript(null, { file: 'rDb.js' });
};

document.getElementById('iReply').addEventListener('click', injectTheScript);
document.getElementById('iCall').addEventListener('click', injectTheScript1);
document.getElementById('rReply').addEventListener('click', injectTheScript2);
document.getElementById('rCall').addEventListener('click', injectTheScript3);
document.getElementById('iDb').addEventListener('click', injectTheScript4);
document.getElementById('rDb').addEventListener('click', injectTheScript5);