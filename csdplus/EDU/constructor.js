class Reply {
  constructor(reqOrinc, analyst, customer, ticketNum, timeDate, summary) {
    this.reqOrinc = function() {
      let element = document.getElementById("mainForm-UserTitleDisplay");
      if (typeof element != "undefined" && element != null) {
        return true;
      } else {
        return false;
      }
    };
    this.analyst = function() {
      if (reqOrinc) {
        var analystName = document.getElementById("mainForm-_CreateUserDisplay")
          .value;
        return analystName;
      } else {
        let analystName = document.getElementById("mainForm-UserTitleDisplay")
          .value;
        return analystName;
      }
    };
    this.customer = function() {
      var customerNametosplit = document.getElementById(
        "mainForm-_RaisedUserTitle"
      ).value;
      var customerName = customerNametosplit.split(" ")[0];
      return customerName;
    };
    this.ticketNum = function() {
      var ticket = document.getElementById("mainForm-_ProcessRef").innerHTML;
      return ticket;
    };
    this.timeDate = function() {
      var timeToReturn = new Date();
      timeToReturn.setMilliseconds(
        Math.round(timeToReturn.getMilliseconds() / 1000) * 1000
      );
      timeToReturn.setSeconds(Math.round(timeToReturn.getSeconds() / 60) * 60);
      timeToReturn.setMinutes(Math.round(timeToReturn.getMinutes() / 15) * 15);
      return timeToReturn;
    };
  }
}

let rP = new Reply();
rP;

class Message {
  constructor(message) {
    this.Message = function() {
      return "Hello " + rP.customer();
    };
  }
}

let msg = new Message();
