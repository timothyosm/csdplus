const a = document.getElementById('mainForm-_CreateUserDisplay')
const b = document.getElementById('mainForm-UserTitleDisplay')
const c = document.getElementById('mainForm-_RaisedUserTitle')
const d = document.getElementById('mainForm-_ProcessRef')
const e = document.getElementById('contentTitle')
const f = document.getElementById('mainForm-_OrganisationDisplay')
const g = document.querySelector('#mainForm-CreationUserTitleDisplay')

if (typeof a != undefined && a != null) {
  analystName = document.getElementById('mainForm-_CreateUserDisplay').value
} else if (typeof b != undefined && b != null) {
  analystName = document.getElementById('mainForm-UserTitleDisplay').value
} else if (typeof g != undefined && g != null) {
  analystName = document.querySelector('#mainForm-CreationUserTitleDisplay')
    .value
}
if (typeof c != undefined && c != null) {
  var fullCustname = document.getElementById('mainForm-_RaisedUserTitle').value
  var customerName = fullCustname.split(' ')[0]
}
if (typeof d != undefined && d != null) {
  var ticket = document.getElementById('mainForm-_ProcessRef').innerHTML
}

let timeToReturn = new Date()
timeToReturn.setMilliseconds(
  Math.round(timeToReturn.getMilliseconds() / 1000) * 1000
)
timeToReturn.setSeconds(Math.round(timeToReturn.getSeconds() / 60) * 60)
timeToReturn.setMinutes(Math.round(timeToReturn.getMinutes() / 15) * 15)

let ttl =
  window.performance.timing.domContentLoadedEventEnd -
  window.performance.timing.navigationStart

if (typeof e != undefined && e != null) {
  var title = document.getElementById('contentTitle').textContent
  if (typeof f != undefined && f != null) {
    var customer = document.getElementById('mainForm-_OrganisationDisplay')
      .value
    document.title = title + ' - ' + customer
  }
  document.getElementById('contentTitle').innerHTML =
    title + '- Load Time: ' + ttl / 1000.0 + ' seconds.'
}

let style = document.createElement('link')
style.rel = 'stylesheet'
style.type = 'text/css'
style.href = chrome.extension.getURL('style.css')
;(document.head || document.documentElement).appendChild(style)

//highlight

setInterval(function () {
  highlight('#Gadget3-listBody', 14)
  highlight('#NewGadget0-listBody', 12)
  highlight('#NewGadget2-listBody', 12)
  highlight('#NewGadget6-list-listContainer', 14)
  highlight('#Gadget1-listBody', 14)
  totalTick()
}, 3000)

function highlight (a, b) {
  if (
    typeof document.querySelector(a) != undefined &&
    document.querySelector(a) != null
  ) {
    let tableCount = document
      .querySelector(a)
      .getElementsByClassName('listBodyRow').length

    for (i = 0; i < tableCount; i++) {
      let activeTickets = document
        .querySelector(a)
        .getElementsByClassName('listBodyRow')
        [i].getElementsByClassName('listBodyCell')[b].innerHTML

      if (activeTickets.includes('Priority 3')) {
        document.querySelector(a).getElementsByClassName('listBodyRow')[
          i
        ].style.backgroundColor = '#B8D8EE'
      } else if (activeTickets.includes('Priority 2')) {
        document.querySelector(a).getElementsByClassName('listBodyRow')[
          i
        ].style.backgroundColor = '#FBCC6A'
      } else if (activeTickets.includes('Priority 1')) {
        document.querySelector(a).getElementsByClassName('listBodyRow')[
          i
        ].style.backgroundColor = '#ef6c57'
        document.getElementById('contentContainer').style.backgroundColor =
          '#ef6c57'
      }
    }
  }
}

function totalTick() {
  if (
    typeof document.getElementById('NewGadget0-listBody') != undefined &&
    document.getElementById('NewGadget0-listBody') != null
  ) {
    let totalTickets = document
      .getElementById('NewGadget0-listBody')
      .getElementsByClassName('listBodyRow').length
    let activeTickercounter = 0
    for (i = 0; i < totalTickets; i++) {
      let ticketCount = document
        .getElementById('NewGadget0-listBody')
        .getElementsByClassName('listBodyRow')
        [i].getElementsByClassName('listBodyCell')[3].innerHTML
      if (ticketCount.includes('In Progress')) {
        activeTickercounter++
      }

      if (ticketCount.includes('Provisioning')) {
        activeTickercounter++
      }
      document.querySelector(
        '#NewGadget0 > div.dashboardGadgetHeader.gadgetDraggable > div.dashboardGadgetTitle'
      ).innerHTML = 'Active Tickets: ' + activeTickercounter
    }
  }
}
