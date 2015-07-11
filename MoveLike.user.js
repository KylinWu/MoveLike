// ==UserScript==
// @name Move Facebook Like Button
// @version 1.0.0
// @match https://*.facebook.com/*
// ==/UserScript==
(function (){
    setTimeout(function () {
        x = document.getElementsByClassName('_552n').length;
        for(var i=0; i<x; i++){
            document.getElementsByClassName('_552n')[i].insertBefore(document.getElementsByClassName('_5g2o')[i], 
                document.getElementsByClassName('_6a _552o')[i]);
        }
        GetOutTheWayBitch();
    }, 500)
})();
