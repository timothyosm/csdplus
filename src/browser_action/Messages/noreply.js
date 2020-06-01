var reply = 'Hello ' + customerName + ',\n'
    + '\n'
    + "As I haven't heard from you in a while, I will close this ticket off. If this issue is not resolved or you need help with anything else please get in contact with us using the below information.\n"
    + '\n'
    + '-Log a ticket though the CSD https://civicaeducation.com.au/support/online-support-portal/\n'
    + '\n'
    + '-Email details of your problem to educationsupport@civica.com.au with attached screenshots, if relevant\n'
    + '\n'
    + '-Phone the dedicated Help Desk line on 1300 550 062\n'
    + '\n'
    + 'Kind Regards,\n'
    + analystName;
var dummy = document.createElement("textarea");
document.body.appendChild(dummy);
dummy.value = reply;
dummy.select();
document.execCommand("copy");