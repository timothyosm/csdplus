// this is the code which will be injected into a given page...

(function () {

    var element = document.getElementById("mainForm-UserTitleDisplay");

    if (typeof (element) != 'undefined' && element != null) {
        var customerName1 = document.getElementById('mainForm-_RaisedUserTitle').value;
        var customerName = customerName1.split(" ")[0];
        var yourName = document.getElementById('mainForm-UserTitleDisplay').value;
        var ticket = document.getElementById('mainForm-_ProcessRef').innerHTML;
    } else {
        var customerName1 = document.getElementById('mainForm-_RaisedUserTitle').value;
        var customerName = customerName1.split(" ")[0];
        var yourName = document.getElementById('mainForm-CreationUserTitleDisplay').value;
        var ticket = document.getElementById('mainForm-_ProcessRef').innerHTML;
    }
    var reply = 'Hello ' + customerName + ',\n'
        + '\n'
        + 'This Ticket is now under investigation. if you have any further information that could assist in the resolution of this issue please update the ticket or contact the service desk. ' + '\n'
        + '\n'
        + 'Kind Regards,\n'
        + yourName;
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = reply;
    dummy.select();
    document.execCommand("copy");


    
})();



