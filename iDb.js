// this is the code which will be injected into a given page...

(function () {
    var customerName = document.getElementById('mainForm-_RaisedUserTitle').value;
    var yourName = document.getElementById('mainForm-UserTitleDisplay').value;
    var ticket = document.getElementById('mainForm-_ProcessRef').innerHTML;

    var reply =
        'Hello ' + customerName + ',\n' +
        '\n' +
        'Could you please send us a copy of your database, schema, format and license files and upload them here:\n' +
         '\n' +
        'https://sftp.civicaeducation.com.au/filedrop/educationsupport@civica.com.au\n' +
         '\n' +
    'Please zip the schema, format and license files. And put ticket number(' + ticket + ') in the email subject.\n' +
         '\n' +
        'Kind Regards,\n' +
        yourName;


    console.log(reply)
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = reply;
    dummy.select();
    document.execCommand("copy");
    console.log(customerName);
    console.log(yourName);
    console.log(reply);

})();