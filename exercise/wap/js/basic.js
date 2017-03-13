window.onload = function() {
    var oHtml = document.documentElement;
    getSize();

    function getSize() {
        var screenWidth = oHtml.clientWidth;
        if (screenWidth >= 640) {
            oHtml.style.fontSize = '40px';
        } else if (screenWidth <= 320) {
            oHtml.style.fontSize = '20px';
        } else {
            oHtml.style.fontSize = screenWidth / (640 / 40) + 'px';
        }
    }
    window.onresize = function() {
        getSize();
    };
}