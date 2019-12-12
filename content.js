let a = document.getElementById("mainForm-_CreateUserDisplay");
let b = document.getElementById("mainForm-UserTitleDisplay");
let c = document.getElementById("mainForm-_RaisedUserTitle");
let d = document.getElementById("mainForm-_ProcessRef");
let e = document.getElementById('contentTitle');
let f = document.getElementById('mainForm-_OrganisationDisplay');

if (typeof a != undefined && a != null) {
    analystName = document.getElementById("mainForm-_CreateUserDisplay").value;
    console.log('%c%s', 'color: #f2ceb6', analystName);
} else if (typeof b != undefined && b != null) {
    analystName = document.getElementById("mainForm-UserTitleDisplay").value;
    console.log('%c%s', 'color: #00e600', analystName);
}
if (typeof c != undefined && c != null) {
    var fullCustname = document.getElementById("mainForm-_RaisedUserTitle").value;
    console.log('%c%s', 'color: #00a3cc', fullCustname);
    var customerName = fullCustname.split(" ")[0];
    console.log('%c%s', 'color: #aa00ff', customerName);
}
if (typeof d != undefined && d != null) {
    var ticket = document.getElementById("mainForm-_ProcessRef").innerHTML;
    console.log('%c%s', 'color: #e50000', ticket);

}

let timeToReturn = new Date();
timeToReturn.setMilliseconds(
    Math.round(timeToReturn.getMilliseconds() / 1000) * 1000
);
timeToReturn.setSeconds(Math.round(timeToReturn.getSeconds() / 60) * 60);
timeToReturn.setMinutes(Math.round(timeToReturn.getMinutes() / 15) * 15);

let ttl = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

if (typeof e != undefined && e != null) {
    var title = document.getElementById('contentTitle').textContent;
    if (typeof f != undefined && f != null) {
        var customer = document.getElementById('mainForm-_OrganisationDisplay').value;
        document.title = title + " - " + customer;
    }
    document.getElementById('contentTitle').innerHTML = title + '- Load Time: ' + ttl / 1000.0 + ' seconds.';

}

let style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('style.css');
(document.head || document.documentElement).appendChild(style);

//highlight


function highlight() {
    let tableCount = document.getElementById("NewGadget0-listBody").getElementsByClassName("listBodyRow").length;

    for (i = 0; i < tableCount; i++) {

        let activeTickets = document.getElementById("NewGadget0-listBody").getElementsByClassName("listBodyRow")[i].getElementsByClassName("listBodyCell")[12].innerHTML;

        if (activeTickets.includes("Priority 3")) {
            document.getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#B8D8EE";
        }

        else if (activeTickets.includes("Priority 2")) {
            document.getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#FBCC6A";
        }

        else if (activeTickets.includes("Priority 1")) {
            document.getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#ef6c57";
        }
    }
}



function highlightUnassigned() {
    let tableCountUnassigned = document.getElementById("NewGadget2-listBody").getElementsByClassName("listBodyRow").length;

    for (i = 0; i < tableCountUnassigned; i++) {

        let activeTicketsUnassigned = document.getElementById("NewGadget2-listBody").getElementsByClassName("listBodyRow")[i].getElementsByClassName("listBodyCell")[12].innerHTML;

        if (activeTicketsUnassigned.includes("Priority 3")) {
            document.getElementById("NewGadget2-listBody").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#B8D8EE";
        }

        else if (activeTicketsUnassigned.includes("Priority 2")) {
            document.getElementById("NewGadget2-listBody").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#FBCC6A";
        }

        else if (activeTicketsUnassigned.includes("Priority 1")) {
            document.getElementById("NewGadget2-listBody").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#ef6c57";
            document.getElementById("contentContainer").style.backgroundColor = "#ef6c57";
        }
    }
}

function highlight1() {
    let tableCount = document.querySelector("#Gadget3-listBody").getElementsByClassName("listBodyRow").length;

    for (i = 0; i < tableCount; i++) {

        let activeTicketsUnassigned = document.querySelector("#Gadget3-listBody").getElementsByClassName("listBodyRow")[i].getElementsByClassName("listBodyCell")[14].innerHTML;

        if (activeTicketsUnassigned.includes("Priority 3")) {
            document.querySelector("#Gadget3-listBody").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#B8D8EE";
        }

        else if (activeTicketsUnassigned.includes("Priority 2")) {
           document.querySelector("#Gadget3-listBody").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#FBCC6A";
        }

        else if (activeTicketsUnassigned.includes("Priority 1")) {
            document.querySelector("#Gadget3-listBody").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#ef6c57";
            document.getElementById("contentContainer").style.backgroundColor = "#ef6c57";
        }
    }
}

function highlight2() {
    let tableCount = document.querySelector("#NewGadget6-list-listContainer").getElementsByClassName("listBodyRow").length;

    for (i = 0; i < tableCount; i++) {

        let activeTicketsUnassigned = document.querySelector("#NewGadget6-list-listContainer").getElementsByClassName("listBodyRow")[i].getElementsByClassName("listBodyCell")[14].innerHTML;

        if (activeTicketsUnassigned.includes("Priority 3")) {
           document.querySelector("#NewGadget6-list-listContainer").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#B8D8EE";
        }

        else if (activeTicketsUnassigned.includes("Priority 2")) {
          document.querySelector("#NewGadget6-list-listContainer").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#FBCC6A";
        }

        else if (activeTicketsUnassigned.includes("Priority 1")) {
           document.querySelector("#NewGadget6-list-listContainer").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#ef6c57";
            document.getElementById("contentContainer").style.backgroundColor = "#ef6c57";
        }
    }
}

function highlight3() {
    let tableCount = document.querySelector("#Gadget1-listBody").getElementsByClassName("listBodyRow").length;

    for (i = 0; i < tableCount; i++) {

        let activeTicketsUnassigned = document.querySelector("#Gadget1-listBody").getElementsByClassName("listBodyRow")[i].getElementsByClassName("listBodyCell")[14].innerHTML;

        if (activeTicketsUnassigned.includes("Priority 3")) {
           document.querySelector("#Gadget1-listBody").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#B8D8EE";
        }

        else if (activeTicketsUnassigned.includes("Priority 2")) {
          document.querySelector("#Gadget1-listBody").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#FBCC6A";
        }

        else if (activeTicketsUnassigned.includes("Priority 1")) {
         document.querySelector("#Gadget1-listBody").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#ef6c57";
            document.getElementById("contentContainer").style.backgroundColor = "#ef6c57";
        }
    }
}


setInterval(function () { highlightUnassigned(); }, 3000);
setInterval(function () { highlight(); }, 3000);
setInterval(function () { totalTick(); }, 3000);
setInterval(function () { highlight1(); }, 3000);
setInterval(function () { highlight2(); }, 3000);
setInterval(function () { highlight3(); }, 3000);

function totalTick() {
    let totalTickets = document.getElementById("NewGadget0-listBody").getElementsByClassName("listBodyRow").length;
    let activeTickercounter = 0;
    for (i = 0; i < totalTickets; i++) {
        let ticketCount = document.getElementById("NewGadget0-listBody").getElementsByClassName("listBodyRow")[i].getElementsByClassName("listBodyCell")[3].innerHTML;
        if (ticketCount.includes("In Progress")) {
            activeTickercounter++
        }

        if (ticketCount.includes("Provisioning")) {
            activeTickercounter++
        }
        document.querySelector("#NewGadget0 > div.dashboardGadgetHeader.gadgetDraggable > div.dashboardGadgetTitle").innerHTML = "Active Tickets: " + activeTickercounter
    }
}