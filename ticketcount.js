for (i = 0; i < 50; i++) {

    let ticketcounter = document.getElementById("NewGadget0-listBody").getElementsByClassName("listBodyRow")[i].getElementsByClassName("listBodyCell")[3].innerHTML;

    if (ticketcounter.includes("In Progress") || ticketcounter.includes("Provisioning")) {
        counter++
    }
    console.log(counter)
}