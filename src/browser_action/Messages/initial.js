var reply = 'Hello ' + customerName + ',\n'
    + '\n'
    + 'This Ticket is now under investigation. if you have any further information that could assist in the resolution of this issue please update the ticket or contact the service desk. ' + '\n'
    + '\n'
    + 'Kind Regards,\n'
    + analystName;
var dummy = document.createElement("textarea");
document.body.appendChild(dummy);
dummy.value = reply;
dummy.select();
document.execCommand("copy");
document.body.removeChild(dummy);