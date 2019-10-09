// this is the code which will be injected into a given page...

(function () {

    
    var element = document.getElementById('mainForm-DescriptionReadOnly');

    if (typeof (element) != 'undefined' && element != null) {
        document.getElementById('mainForm-DescriptionReadOnly').style.height = "2000px"
    }
    var element1 = document.getElementById('dashboard-column-1')
    if (typeof (element1) != 'undefined' && element1 != null) {
        document.getElementById('dashboard-column-1').style.position = "relative"
    }

    var element2 = document.getElementById('mainForm-Description2ReadOnly')
    if (typeof (element2) != 'undefined' && element2 != null) {
        document.getElementById('mainForm-Description2ReadOnly').style.height = "2000px"
    }
    var element = document.getElementById("mainForm-UserTitleDisplay");
    if (typeof (element) != 'undefined' && element != null) {
        var customerName1 = document.getElementById('mainForm-_RaisedUserTitle').value;
        var customerName = customerName1.split(" ")[0];
        var yourName = document.getElementById('mainForm-UserTitleDisplay').value;
        var ticket = document.getElementById('mainForm-_ProcessRef').innerHTML;
    } else {
        var customerName1 = document.getElementById('mainForm-_RaisedUserTitle').value;
        var customerName = customerName1.split(" ")[0];
        var yourName = document.getElementById('mainForm-_CreateUserDisplay').value;
        var ticket = document.getElementById('mainForm-_ProcessRef').innerHTML;
    }
    var reply = 'Hello ' + customerName + ',\n'
        + '\n'
        + 'As i havent heard from you in a while, i will close this ticket off. If this issue is not resolved or you need help with anything else please get in contact with us using the below information.\n'
        + '\n'
        + '- Log a ticket though the CSD https://civicaeducation.com.au/support/online-support-portal/\n'
        + '\n'
        + '-Email details of your problem to educationsupport@civica.com.au with attached screenshots, if relevant\n'
        + '\n'
        + '-Phone the dedicated Help Desk line on 1300 550 062\n'
        + '\n'
        + 'Kind Regards,\n'
        + yourName;
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = reply;
    dummy.select();
    document.execCommand("copy");

})();