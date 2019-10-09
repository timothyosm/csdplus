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
document.getElementById('submit').addEventListener('click', injectTheScript5);
function injectTheScript5() {

	var firstUrl = 'https://servicedesk.civica.co.uk/ServiceDesk/wd/Query/List.rails?class_name=Process.Process&query=_ActiveAllModuleSearch&page_size=30&attributes=Colour%3ASLA%2C_ProcessRef%3ARef%2C_CustomerProc.Name%2CRaiseUser.Title%3ARaised%20User%2CTitle%3ASummary%2CStatus.Title%3ACurrent%20Status%2CCreationDate%2C_NewCalcPriority%3APriority%2CCurrentAssignment.Group._DisplayName%3ACurrent%20Assigned%20Group%2CCurrentAssignment.User.Title%3ACurrent%20Assigned%20Analyst%2CLastUpdateUser.Title%3ALast%20Updated%20By%2CLastUpdateUser.UserType.Name%3ALast%20Updated%20User%20Type%2CLastUpdate%3ALast%20Updated%2C_CustomerRef&sort_by=CreationDate%20desc&launch_path=.&hide_filters=False&query_changed=False&currentShortcutItem=35a206d5-931c-4684-a19d-4a016fac7179%2C35a206d5-931c-4684-a19d-4a016fac7179&cns=_CustomerProc._ServiceSystemCol1._ServiceSystem._GroupCol._Group-iwmg_a_Status.IsEnd-e-0_a_Status.IsCompletion-e-1_a_(_ProcessRef-c-2-_a_Title-c-3-_a_Description-c-4-_a_RaiseUser.Title-c-5-_a_CreationDate-ibd-6-_a_LastUpdate-ibd-7-_a_LastUpdateUser.Title-c-8-_a__CategoryLevel1-e-9-_a__CategoryLevel2._DisplayName-c-10-_a__CategoryLevel3._DisplayName-c-11-_a_CurrentAssignment.Group._DisplayName-c-12-_a__CustomerRef-c-13-_a__CustomerProc.Name-c-14-)&c0=False&c1=False&cd2=Reference&c2=';
	var middleUrl = document.getElementById("ticketInput").value;
	var secondUrl = '&cd3=Summary&cd4=Details&cd5=End%20User&cd8=Last%20Updated%20By&cd10=Category%202&cd11=Category%203&cd12=Current%20Assigned%20Group&cd14=Customer%20Name';
	var totalUrl = firstUrl + middleUrl + secondUrl;
	chrome.tabs.create({ url: totalUrl });

};