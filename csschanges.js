(function () {

	var a = window.performance.timing.domContentLoadedEventEnd
	var b = window.performance.timing.navigationStart
	var c = a - b;
	var d = c + c;
	localStorage.setItem('timeWasted', d)
	var timewaste = localStorage.getItem('timeWasted')
	var title3 = document.getElementById('contentTitle').textContent;
	var result = title3.match(/[0-9]+/g);
	var orga = document.getElementById('mainForm-_OrganisationDisplay').value;
	document.title = result + " - " + orga;
	var title2 = document.getElementById('contentTitle').textContent;
	document.getElementById('contentTitle').innerHTML = title2 + '- Load Time: ' + timewaste / 1000.0 + ' seconds.';
	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.type = 'text/css';
	style.href = chrome.extension.getURL('style.css');
	(document.head || document.documentElement).appendChild(style);


	//WORK IN PROGRESS COLOR CODED ALL MY WORK LOAD
	// for (i = 0; i < 100; i++) {
	// 	var activeTickets = document
	// 		.getElementById("NewGadget0-listBody").getElementsByClassName("listBodyRow")[i].getElementsByClassName("listBodyCell")[12].innerHTML;

	// 	console.log('%c%s', 'color: #00e600', activeTickets);

	// 	if (activeTickets.includes("No SLA")) {
	// 		document.getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#77C148";
	// 	}

	// 	if (activeTickets.includes("Priority 4")) {
	// 		document.getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#29B0EA";
	// 	}

	// 	if (activeTickets.includes("Priority 3")) {
	// 		document.getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#2DAAE0";
	// 	}

	// 	if (activeTickets.includes("Priority 2")) {
	// 		document.getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#FDF018";
	// 	}

	// 	if (activeTickets.includes("Priority 1")) {
	// 		document.getElementsByClassName("listBodyRow")[i].style.backgroundColor = "red";
	// 	}
	// }




})();