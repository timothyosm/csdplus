var a = document.getElementById('mainForm-_CreateUserDisplay');
var b = document.getElementById('mainForm-UserTitleDisplay');
var c = document.getElementById('mainForm-_RaisedUserTitle');
var d = document.getElementById('mainForm-_ProcessRef');
var e = document.getElementById('contentTitle');
var f = document.getElementById('mainForm-_OrganisationDisplay');
var g = document.querySelector('#mainForm-CreationUserTitleDisplay');
var h = document.querySelector('#mainForm-CreationUserDisplay');

var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === 'complete') {
    clearInterval(readyStateCheckInterval);

    let ttl = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

    setInterval(function() {
      highlightOld();
      highlightOld2();
      highlightOld3();
      highlightOld4();
      highlightOld5();
      highlightEndUser();

      totalTick();
      highlight('#Gadget3-listBody', 14);
      highlight('#NewGadget0-listBody', 12);
      highlight('#NewGadget2-listBody', 12);
      highlight('#NewGadget6-list-listContainer', 14);
      highlight('#Gadget1-listBody', 14);
      highlight('#NewGadget5-listBody', 12);
      highlight('#NewGadget6-listBody', 12);
      highlight('#NewGadget6-list-listBody', 15);
      highlight('#NewGadget13-listTable', 15);
      highlight('#NewGadget12-listBody', 14);
      highlight('#NewGadget12-listBody', 14);
      highlight('#NewGadget13-listTable', 14);
      highlight('#NewGadget13-listTable', 14);
      highlight('#NewGadget13-listBody', 14);

      alliFrames();
    }, 500);

    function highlight(a, b) {
      if (typeof document.querySelector(a) != undefined && document.querySelector(a) != null) {
        let tableCount = document.querySelector(a).getElementsByClassName('listBodyRow').length;

        for (let i = 0; i < tableCount; i++) {
          let activeTickets = document
            .querySelector(a)
            .getElementsByClassName('listBodyRow')
            [i].getElementsByClassName('listBodyCell')[b].innerHTML;

          if (activeTickets.includes('Priority 3')) {
            document.querySelector(a).getElementsByClassName('listBodyRow')[i].style.backgroundColor = '#B8D8EE';
          } else if (activeTickets.includes('Priority 2')) {
            document.querySelector(a).getElementsByClassName('listBodyRow')[i].style.backgroundColor = '#FBCC6A';
          } else if (activeTickets.includes('Priority 1')) {
            document.querySelector(a).getElementsByClassName('listBodyRow')[i].style.backgroundColor = '#ef6c57';
            document.getElementById('contentContainer').style.backgroundColor = '#ef6c57';
          }
        }
      }
    }

    function totalTick() {
      if (document.querySelector('#NewGadget5 > div.dashboardGadgetHeader.gadgetDraggable > div.dashboardGadgetTitle')) {
        let totalTickets = document.getElementById('NewGadget5-listBody').getElementsByClassName('listBodyRow').length;
        let activeTickercounter = 0;
        for (let i = 0; i < totalTickets; i++) {
          let ticketCount = document
            .getElementById('NewGadget5-listBody')
            .getElementsByClassName('listBodyRow')
            [i].getElementsByClassName('listBodyCell')[3].innerHTML;
          if (ticketCount.includes('In Progress')) {
            activeTickercounter++;
          }

          if (ticketCount.includes('Provisioning')) {
            activeTickercounter++;
          }
          document.querySelector('#NewGadget5 > div.dashboardGadgetHeader.gadgetDraggable > div.dashboardGadgetTitle').innerHTML = 'Active Tickets: ' + activeTickercounter;
        }
      }
    }

    function highlightOld() {
      if (typeof document.querySelector('#NewGadget5-listBody') != undefined && document.querySelector('#NewGadget5-listBody') != null) {
        let tableCount = document.querySelector('#NewGadget5-listBody').getElementsByClassName('listBodyRow').length;
        for (let i = 0; i < tableCount; i++) {
          var date1 = document
            .querySelector('#NewGadget5-listBody')
            .getElementsByClassName('listBodyRow')
            [i].getElementsByClassName('listBodyCell')[9]
            .innerHTML.split('/');
          var newDate = date1[1] + '/' + date1[0] + '/' + date1[2];
          var date = new Date(newDate);
          var endDate = new Date();
          let ticketCount = document
            .getElementById('NewGadget5-listBody')
            .getElementsByClassName('listBodyRow')
            [i].getElementsByClassName('listBodyCell')[3].innerHTML;

          var seconds = (endDate.getTime() - date.getTime()) / 1000;

          if (seconds > 604800 && !ticketCount.includes('With Customer')) {
            document
              .querySelector('#NewGadget5-listBody')
              .getElementsByClassName('listBodyRow')
              [i].getElementsByClassName('listBodyCell')[9].style.backgroundColor = '#b19cd9';
          }
        }
      }
    }

    function highlightOld2() {
      if (typeof document.querySelector('#NewGadget12-listBody') != undefined && document.querySelector('#NewGadget12-listBody') != null) {
        let tableCount = document.querySelector('#NewGadget12-listBody').getElementsByClassName('listBodyRow').length;
        for (let i = 0; i < tableCount; i++) {
          var date1 = document
            .querySelector('#NewGadget12-listBody')
            .getElementsByClassName('listBodyRow')
            [i].getElementsByClassName('listBodyCell')[17]
            .innerHTML.split('/');
          var newDate = date1[1] + '/' + date1[0] + '/' + date1[2];
          var date = new Date(newDate);
          var endDate = new Date();
          var seconds = (endDate.getTime() - date.getTime()) / 1000;

          if (seconds > 604800) {
            document
              .querySelector('#NewGadget12-listBody')
              .getElementsByClassName('listBodyRow')
              [i].getElementsByClassName('listBodyCell')[17].style.backgroundColor = '#b19cd9';
          }
        }
      }
    }

    function highlightOld3() {
      if (typeof document.querySelector('#NewGadget13-listBody') != undefined && document.querySelector('#NewGadget13-listBody') != null) {
        let tableCount = document.querySelector('#NewGadget13-listBody').getElementsByClassName('listBodyRow').length;
        for (let i = 0; i < tableCount; i++) {
          var date1 = document
            .querySelector('#NewGadget13-listBody')
            .getElementsByClassName('listBodyRow')
            [i].getElementsByClassName('listBodyCell')[17]
            .innerHTML.split('/');
          var newDate = date1[1] + '/' + date1[0] + '/' + date1[2];
          var date = new Date(newDate);
          var endDate = new Date();
          var seconds = (endDate.getTime() - date.getTime()) / 1000;

          if (seconds > 604800) {
            document
              .querySelector('#NewGadget13-listBody')
              .getElementsByClassName('listBodyRow')
              [i].getElementsByClassName('listBodyCell')[17].style.backgroundColor = '#b19cd9';
          }
        }
      }
    }

    function highlightOld4() {
      if (typeof document.querySelector('#NewGadget15-listBody') != undefined && document.querySelector('#NewGadget15-listBody') != null) {
        let tableCount = document.querySelector('#NewGadget15-listBody').getElementsByClassName('listBodyRow').length;
        for (let i = 0; i < tableCount; i++) {
          var date1 = document
            .querySelector('#NewGadget15-listBody')
            .getElementsByClassName('listBodyRow')
            [i].getElementsByClassName('listBodyCell')[8]
            .innerHTML.split('/');
          var newDate = date1[1] + '/' + date1[0] + '/' + date1[2];
          var date = new Date(newDate);
          var endDate = new Date();
          var seconds = (endDate.getTime() - date.getTime()) / 1000;

          if (seconds > 604800) {
            document
              .querySelector('#NewGadget15-listBody')
              .getElementsByClassName('listBodyRow')
              [i].getElementsByClassName('listBodyCell')[8].style.backgroundColor = '#b19cd9';
          }
        }
      }
    }

    function highlightOld5() {
      if (typeof document.querySelector('#NewGadget5-listBody') != undefined && document.querySelector('#NewGadget5-listBody') != null) {
        let tableCount = document.querySelector('#NewGadget5-listBody').getElementsByClassName('listBodyRow').length;
        for (let i = 0; i < tableCount; i++) {
          var date1 = document
            .querySelector('#NewGadget5-listBody')
            .getElementsByClassName('listBodyRow')
            [i].getElementsByClassName('listBodyCell')[9]
            .innerHTML.split('/');
          var newDate = date1[1] + '/' + date1[0] + '/' + date1[2];
          var date = new Date(newDate);
          var endDate = new Date();
          var seconds = (endDate.getTime() - date.getTime()) / 1000;

          let ticketCount = document
            .getElementById('NewGadget5-listBody')
            .getElementsByClassName('listBodyRow')
            [i].getElementsByClassName('listBodyCell')[3].innerHTML;

          if (seconds > 1814400 && ticketCount.includes('With Customer')) {
            document
              .querySelector('#NewGadget5-listBody')
              .getElementsByClassName('listBodyRow')
              [i].getElementsByClassName('listBodyCell')[9].style.backgroundColor = '#77dd77';
          }
        }
      }
    }

    function highlightEndUser() {
      if (typeof document.querySelector('#NewGadget5-listBody') != undefined && document.querySelector('#NewGadget5-listBody') != null) {
        let tableCount = document.querySelector('#NewGadget5-listBody').getElementsByClassName('listBodyRow').length;
        for (let i = 0; i < tableCount; i++) {
          if (
            document
              .querySelector('#NewGadget5-listBody')
              .getElementsByClassName('listBodyRow')
              [i].getElementsByClassName('listBodyCell')[10].innerText == 'End User'
          ) {
            document
              .querySelector('#NewGadget5-listBody')
              .getElementsByClassName('listBodyRow')
              [i].getElementsByClassName('listBodyCell')[10].style.backgroundColor = '#ffd1dc';
          }
        }
      }
    }

    function alliFrames() {
      let checker = document.getElementsByTagName('iframe');

      if (typeof checker != undefined && checker != null) {
        for (let i = 0; i < document.getElementsByTagName('iframe').length; i++) {
          var iframeHeight = document.getElementsByTagName('iframe')[i].contentWindow.document.body.scrollHeight + 'px';

          document.getElementsByTagName('iframe')[i].style.height = iframeHeight;
        }
      }
    }
  }
}, 10);
