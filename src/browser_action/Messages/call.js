var reply = 'Hello ' + customerName + ',\n'
    + '\n'
    + 'We tried to call around the below time and date but could not get through, could you please return our call on 1300 550 062 and quote ticket number ' + ticket + '\n'
    + '\n'
    + 'Attempted call: \n'
    + '\n'
    + timeToReturn
    + '\n'
    + '\n'
    + 'Kind Regards,\n'
    + analystName
var dummy = document.createElement("textarea");
document.body.appendChild(dummy);
dummy.value = reply;
dummy.select();
document.execCommand("copy");
document.body.removeChild(dummy);