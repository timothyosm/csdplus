(function () {

    function load() {
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
    }
    load();

})();