function highlight(){
	
	for (i = 0; i < 50; i++) {

		let activeTickets = document.getElementById("NewGadget0-listBody").getElementsByClassName("listBodyRow")[i].getElementsByClassName("listBodyCell")[12].innerHTML;

		console.log('%c%s', 'color: #00e600', activeTickets);
		if (activeTickets.includes("Priority 3")) {
			document.getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#B8D8EE";
		}

		else if (activeTickets.includes("Priority 2")) {
			document.getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#FBCC6A";
		}

		else if (activeTickets.includes("Priority 1")) {
			document.getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#ef6c57";
		}
	}
}

setTimeout(function(){ highlight(); }, 2000);
setTimeout(function(){ highlight(); }, 3000);
setTimeout(function(){ highlight(); }, 4000);
setTimeout(function(){ highlight(); }, 5000);
setTimeout(function(){ highlight(); }, 6000);
setTimeout(function(){ highlight(); }, 7000);
setTimeout(function(){ highlight(); }, 8000);
setTimeout(function(){ highlight(); }, 9000);
setTimeout(function(){ highlight(); }, 10000);
setTimeout(function(){ highlight(); }, 11000);

function highlightUnassigned(){
	
	for (i = 0; i < 50; i++) {

		let activeTicketsUnassigned = document.getElementById("NewGadget2-listBody").getElementsByClassName("listBodyRow")[i].getElementsByClassName("listBodyCell")[12].innerHTML;

		if (activeTicketsUnassigned.includes("Priority 3")) {
			document.getElementById("NewGadget2-listBody").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#B8D8EE";
		}

		else if (activeTicketsUnassigned.includes("Priority 2")) {
			document.getElementById("NewGadget2-listBody").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#FBCC6A";
		}

		else if (activeTicketsUnassigned.includes("Priority 1")) {
			document.getElementById("NewGadget2-listBody").getElementsByClassName("listBodyRow")[i].style.backgroundColor = "#ef6c57";
			document.getElementById("contentContainer").style.backgroundColor = "#ef6c57";
		}
	}
}

setTimeout(function(){ highlightUnassigned(); }, 2000);
setTimeout(function(){ highlightUnassigned(); }, 3000);
setTimeout(function(){ highlightUnassigned(); }, 4000);
setTimeout(function(){ highlightUnassigned(); }, 5000);
setTimeout(function(){ highlightUnassigned(); }, 6000);
setTimeout(function(){ highlightUnassigned(); }, 7000);
setTimeout(function(){ highlightUnassigned(); }, 8000);
setTimeout(function(){ highlightUnassigned(); }, 9000);
setTimeout(function(){ highlightUnassigned(); }, 10000);
setTimeout(function(){ highlightUnassigned(); }, 11000);