// this is the code which will be injected into a given page...

(function () {

    var element = document.getElementById("mainForm-CreationUserTitleDisplay");
    // incident
    if (typeof (element) != 'undefined' && element != null) {
        var customerName1 = document.getElementById('mainForm-_RaisedUserTitle').value;
        var customerName = customerName1.split(" ")[0];
        var yourName = document.getElementById('mainForm-CreationUserTitleDisplay').value;
        var ticket = document.getElementById('mainForm-_ProcessRef').innerHTML;
    } else {
        //request
        var customerName1 = document.getElementById('mainForm-_RaisedUserTitle').value;
        var customerName = customerName1.split(" ")[0];
        var yourName = document.getElementById('mainForm-_CreateUserDisplay').value;
        var ticket = document.getElementById('mainForm-_ProcessRef').innerHTML;
    }



    var timeToReturn = new Date();
    timeToReturn.setMilliseconds(Math.round(timeToReturn.getMilliseconds() / 1000) * 1000);
    timeToReturn.setSeconds(Math.round(timeToReturn.getSeconds() / 60) * 60);
    timeToReturn.setMinutes(Math.round(timeToReturn.getMinutes() / 15) * 15);
    var reply = 'Hello ' + customerName + ',\n'
        + '\n'
        + 'Please be aware that ticket: '+ ticket + ' has been referred to the Development team. We will send you an update as soon as possible.' +'\n'
        + '\n'
        + 'Kind Regards,\n'
        + yourName
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = reply;
    dummy.select();
    document.execCommand("copy");
})();