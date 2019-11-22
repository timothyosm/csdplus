document.getElementById("save").addEventListener("click", function ()
    {

        var title = document.getElementById("mainMsg").value ;
        localStorage.setItem("title", title) ;
        console.log("saved: " + title);

        var msg = document.getElementById("mainMsg").value ;
        localStorage.setItem("msg", msg) ;
        console.log("saved: " + msg);

        var storedValue = localStorage.getItem("msg");

        document.getElementById("storedMessages").innerHTML = storedValue;

    } , false);
    var storedValue = localStorage.getItem("msg");

document.getElementById("storedMessages").innerHTML = storedValue;
document.getElementById("storedMessages").innerHTML = storedValue;
