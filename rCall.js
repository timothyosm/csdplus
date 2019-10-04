// this is the code which will be injected into a given page...

(function () {
var customerName = document.getElementById('mainForm-_RaisedUserTitle').value;
var yourName = document.getElementById('mainForm-_CreateUserDisplay').value;
        var ticket = document.getElementById('mainForm-_ProcessRef').innerHTML;

        var timeToReturn = new Date();

        timeToReturn.setMilliseconds(Math.round(timeToReturn.getMilliseconds() / 1000) * 1000);
        timeToReturn.setSeconds(Math.round(timeToReturn.getSeconds() / 60) * 60);
        timeToReturn.setMinutes(Math.round(timeToReturn.getMinutes() / 15) * 15);
    
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
        + yourName
        
        console.log(reply)
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value =reply;
    dummy.select();
    document.execCommand("copy");

})();