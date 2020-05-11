// for (let key in { ...localStorage }) {
//     if ({ ...localStorage }.hasOwnProperty(key)) {
//         // console.log(key, { ...localStorage }[key]);
//         document.getElementById("replyBtns").innerHTML += "<button id='" + key + "'class='btn btn-dark btn-sm'>" + key + "</button>";
//         var rep = { ...localStorage }[key]
//         document.getElementById(key).addEventListener('click', copyDumb(rep));
//         document.getElementById(key).addEventListener("click", myScript);

//     }
// }

function setData() {
  var CON = document.querySelector("#CON").value;
  var SDP = document.querySelector("#SDP").value;
  var AN = document.querySelector("#AN").value;
  var RD = document.querySelector("#RD").value;

  var table =
    "CON:" + CON + "\n" + "SDP:" + SDP + "\n" + "AN:" + AN + "\n" + "RD" + RD;

  console.log(table);

  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = table;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

function submit() {
  var firstUrl =
    "https://servicedesk.civica.co.uk/ServiceDesk/wd/Query/List.rails?class_name=Process.Process&query=_ActiveAllModuleSearch&page_size=30&attributes=Colour%3ASLA%2C_ProcessRef%3ARef%2C_CustomerProc.Name%2CRaiseUser.Title%3ARaised%20User%2CTitle%3ASummary%2CStatus.Title%3ACurrent%20Status%2CCreationDate%2C_NewCalcPriority%3APriority%2CCurrentAssignment.Group._DisplayName%3ACurrent%20Assigned%20Group%2CCurrentAssignment.User.Title%3ACurrent%20Assigned%20Analyst%2CLastUpdateUser.Title%3ALast%20Updated%20By%2CLastUpdateUser.UserType.Name%3ALast%20Updated%20User%20Type%2CLastUpdate%3ALast%20Updated%2C_CustomerRef&sort_by=CreationDate%20desc&launch_path=.&hide_filters=False&query_changed=False&currentShortcutItem=35a206d5-931c-4684-a19d-4a016fac7179%2C35a206d5-931c-4684-a19d-4a016fac7179&cns=_CustomerProc._ServiceSystemCol1._ServiceSystem._GroupCol._Group-iwmg_a_Status.IsEnd-e-0_a_Status.IsCompletion-e-1_a_(_ProcessRef-c-2-_a_Title-c-3-_a_Description-c-4-_a_RaiseUser.Title-c-5-_a_CreationDate-ibd-6-_a_LastUpdate-ibd-7-_a_LastUpdateUser.Title-c-8-_a__CategoryLevel1-e-9-_a__CategoryLevel2._DisplayName-c-10-_a__CategoryLevel3._DisplayName-c-11-_a_CurrentAssignment.Group._DisplayName-c-12-_a__CustomerRef-c-13-_a__CustomerProc.Name-c-14-)&c0=False&c1=False&cd2=Reference&c2=";
  var middleUrl = document.getElementById("ticketInput").value;
  var secondUrl =
    "&cd3=Summary&cd4=Details&cd5=End%20User&cd8=Last%20Updated%20By&cd10=Category%202&cd11=Category%203&cd12=Current%20Assigned%20Group&cd14=Customer%20Name";
  noSpaceurl = middleUrl.replace(/\s/g, "");
  var totalUrl1 = firstUrl + noSpaceurl + secondUrl;
  chrome.tabs.create({ url: totalUrl1 });
}

function submitpr() {
  var firstUrl =
    "https://servicedesk.civica.co.uk/ServiceDesk/wd/Query/List.rails?class_name=ProblemManagement.Problem&query=_ProblemsSearch&page_size=15&page=-1&attributes=_ProcessRef%3AReference%2CTitle%3ASummary%2CStatus.Title%3AStatus%2C_CustomerProc.Title%3ACustomer%2CRaiseUser.Title%3AEnd%20User%2CCreationDate%3ALogged%2CLatestAssignment.User.Title%3AAnalyst%2CLastUpdate%3AUpdated%2CLastUpdateUser.UserType.Title%3AUpdate_By%2C_ProblemProcess1._ProblemProcess%3AProcess%20Used%2C_ProblemOwnerGroups._DisplayName%3AProblem%20Owner%2C_TFSReference%3ATFS%2FVSTS%20Ref%2C_CustomerRef%2C_Service._Service%3AService%2C_CategoryLevel1._DisplayName%3ACat.1%2C_CategoryLevel2._DisplayName%3ACat.2%2C_CategoryLevel3._DisplayName%3ACat.3%2CConfigurationItem.Title%3AItem%2C_Environment._Environment%3AEnviron.%2C_DescriptionTruncated%3ADetails%2C_FixedinVersion%2C_CalcIncCount%3ALinked%20Incidents%2C_ProblemPriority._ProblemPriority%3AProblem%20Priority%20%2CResponseLevel.Description%3AService%20Level%20Priority%20&sort_by=CreationDate%20desc&launch_path=.&hide_filters=False&query_changed=False&currentShortcutItem=49311b20-3748-4fca-97f7-e4454a2eed2c%2C49311b20-3748-4fca-97f7-e4454a2eed2c&cns=_CustomerProc._ServiceSystemCol1._ServiceSystem._GroupCol._Group-iwmg_a_(Id-e-0-_a_Title-e-1-_a_Description-c-2-_a_RaiseUser.Title-c-3-_a_CreationDate-ibd-4-_a_LastUpdate-ibd-5-_a__CustomerProc.Name-c-6-_a__CustomerRef-c-7-_a__Service._Service-c-8-_a__FixedinVersion-c-9-_a__ProblemOwner.Title-c-10-_a__TFSReference-c-11-_a_Status-e-12-)&c2=";
  var middleUrl = document.getElementById("ticketInputpr").value;
  var secondUrl =
    "&cd7=Customer%20Reference&cd8=Service&cd10=Problem%20Owner&cd11=TFS%20%2F%20VSTS%20Reference";
  var totalUrl3 = firstUrl + middleUrl + secondUrl;
  chrome.tabs.create({ url: totalUrl3 });
}

function submitClosed() {
  var firstUrl =
    "https://servicedesk.civica.co.uk/ServiceDesk/wd/Query/List.rails?class_name=Process.Process&query=_CompletedAllModuleSearch&page_size=30&page=-1&attributes=Colour%3ASLA%2C_ProcessRef%3ARef%2C_CustomerProc.Name%2CRaiseUser.Title%3ARaised%20User%2CTitle%3ASummary%2CStatus.Title%3ACurrent%20Status%2CCreationDate%2C_NewCalcPriority%3APriority%2CLastUpdateUser.Title%3ALast%20Updated%20By%2CLastUpdateUser.UserType.Name%3ALast%20Updated%20User%20Type%2CLastUpdate%3ALast%20Updated%2C_CustomerRef&sort_by=CreationDate%20desc&launch_path=.&hide_filters=False&query_changed=False&currentShortcutItem=6eddf6b0-2357-4576-901d-ee3ee99b65b9%2C6eddf6b0-2357-4576-901d-ee3ee99b65b9&cns=_CustomerProc._ServiceSystemCol1._ServiceSystem._GroupCol._Group-iwmg_a_(Status.IsEnd-e-0_o_Status.IsCompletion-e-1)_a_(_ProcessRef-c-2-_a_Title-c-3-_a_Description-c-4-_a_RaiseUser.Title-c-5-_a_CreationDate-ibd-6-_a_LastUpdate-ibd-7-_a_LastUpdateUser.Title-c-8-_a__CategoryLevel1._DisplayName-c-9-_a__CategoryLevel2._DisplayName-c-10-_a__CategoryLevel3._DisplayName-c-11-_a__CustomerRef-c-12-_a__CustomerProc.Name-c-13-)&c0=True&c1=True&cd2=Reference&c2=";
  var middleUrl = document.getElementById("ticketInput").value;
  var secondUrl =
    "&cd3=Summary&cd4=Details&cd5=End%20User&cd8=Last%20Updated%20By&cd9=Category%201&cd10=Category%202&cd11=Category%203&cd13=Customer%20Name";
  noSpaceurl = middleUrl.replace(/\s/g, "");
  var totalUrl2 = firstUrl + noSpaceurl + secondUrl;
  chrome.tabs.create({ url: totalUrl2 });
}

function injectTheScript() {
  chrome.tabs.executeScript(null, { file: "Messages/noreply.js" });
  csschanges();
}
function injectTheScript1() {
  chrome.tabs.executeScript(null, { file: "Messages/call.js" });
}
function injectTheScript2() {
  chrome.tabs.executeScript(null, { file: "Messages/db.js" });
}
function injectTheScript3() {
  chrome.tabs.executeScript(null, { file: "Messages/dev.js" });
}
function injectTheScript4() {
  chrome.tabs.executeScript(null, { file: "Messages/initial.js" });
}

if (document.getElementById("iResponce")) {
  document
    .getElementById("iResponce")
    .addEventListener("click", injectTheScript4);
}
var input = document.getElementById("ticketInput");

if (document.getElementById("submit")) {
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("submit").click();
    }
  });
}
if (document.getElementById("submit")) {
  document.getElementById("submit").addEventListener("click", submit);
}
if (document.getElementById("submitpr")) {
  document.getElementById("submitpr").addEventListener("click", submitpr);
}
if (document.getElementById("submitclosed")) {
  document
    .getElementById("submitclosed")
    .addEventListener("click", submitClosed);
}
if (document.getElementById("iReply")) {
  document.getElementById("iReply").addEventListener("click", injectTheScript);
}
if (document.getElementById("iCall")) {
  document.getElementById("iCall").addEventListener("click", injectTheScript1);
}
if (document.getElementById("iDb")) {
  document.getElementById("iDb").addEventListener("click", injectTheScript2);
}
if (document.getElementById("iDev")) {
  document.getElementById("iDev").addEventListener("click", injectTheScript3);
}
if (document.getElementById("formGen")) {
  document.getElementById("formGen").addEventListener("click", setData);
}
