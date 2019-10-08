(function () {

    function load() {
        var a = window.performance.timing.domContentLoadedEventEnd
        var b = window.performance.timing.navigationStart
        var c = a - b;
        var d = c + c;
        localStorage.setItem('timeWasted', d)
        var timewaste = localStorage.getItem('timeWasted')
        document.getElementById('contentTitle').innerHTML = ' Load Time: ' + timewaste / 1000.0 + ' seconds.';

        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = chrome.extension.getURL('style.css');
        (document.head||document.documentElement).appendChild(style);

    }
    load();

})();