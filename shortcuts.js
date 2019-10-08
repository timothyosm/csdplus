// this is the code which will be injected into a given page...

(function () {

    window.addEventListener("keypress", function(event) {
        if (!(event.which == 115 && event.ctrlKey) && !(event.which == 66)) return true
        alert("Ctrl-S pressed")
        event.preventDefault()
        return false
      })

})();