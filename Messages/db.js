var reply =
    'Hello ' + customerName + ',\n' +
    '\n' +
    'Could you please send us a copy of your database, schema, format and license files and upload them here:\n' +
    '\n' +
    'https://sftp.civicaeducation.com.au/filedrop/educationsupport@civica.com.au\n' +
    '\n' +
    'Please zip the schema, format and license files. And put ticket number( ' + ticket + ' ) in the email subject.\n' +
    '\n' +
    'Kind Regards,\n' +
    analystName;
var dummy = document.createElement("textarea");
document.body.appendChild(dummy);
dummy.value = reply;
dummy.select();
document.execCommand("copy");
document.body.removeChild(dummy);