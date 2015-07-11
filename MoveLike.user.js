// ==UserScript==
// @name         Move like
// @namespace    https://github.com/KylinWu/MoveLike/
// @version      0.1
// @description  Move the like button position in facebook chat box.
// @author       KylinWu
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==

function GetOutTheWayBitch() {           
    setTimeout(function () {
        x = document.getElementsByClassName('_552n').length;
        for(var i=0; i<x; i++){
            document.getElementsByClassName('_552n')[i].insertBefore(document.getElementsByClassName('_5g2o')[i], 
                document.getElementsByClassName('_6a _552o')[i]);
        }
        GetOutTheWayBitch();
    }, 500)
}
GetOutTheWayBitch();
