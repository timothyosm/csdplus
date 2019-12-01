
    if (typeof a != undefined && a != null) {
        var analystName = document.getElementById("mainForm-_CreateUserDisplay").value;
        console.log('%c%s', 'color: #f2ceb6', analystName);
    } else if (typeof b != undefined && b != null) {
        var analystName = document.getElementById("mainForm-UserTitleDisplay").value;
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
    chrome.runtime.sendMessage({ timeToReturn: timeToReturn, analystName: analystName, customerName: customerName, fullCustname: fullCustname, ticket: ticket }, function (response) {
        console.log(response.farewell);
    });

let ttl = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

if (typeof e != undefined && e != null) {
    var title = document.getElementById('contentTitle').textContent;
    if (typeof f != undefined && f != null) {
        var customer = document.getElementById('mainForm-_OrganisationDisplay').value;
        document.title = title + " - " + customer;
    }
    document.getElementById('contentTitle').innerHTML = title + '- Load Time: ' + ttl / 1000.0 + ' seconds.';
}