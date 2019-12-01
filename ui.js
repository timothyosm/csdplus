document.getElementById("save").addEventListener("click", function () {
    var title = document.getElementById("title").value;
    var msg = document.getElementById("mainMsg").value;
    localStorage.setItem(title, msg);
    console.log("saved: " + msg);
    messageGen();
}, false);
