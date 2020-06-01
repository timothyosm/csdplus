var reply = 'Hello ' + customerName + ',\n'
    + '\n'
    + 'Please be aware that ticket ' + ticket + ' has been referred to the Development team. We will send you an update as soon as possible.' + '\n'
    + '\n'
    + 'Kind Regards,\n'
    + analystName
var dummy = document.createElement("textarea");
document.body.appendChild(dummy);
dummy.value = reply;
dummy.select();
document.execCommand("copy");
document.body.removeChild(dummy);