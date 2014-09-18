/*
Developer: themephe 
Name: fist
Version: 0.1.2
Last Compile: 2014-09-18 */

var themephe = function() {
    function docReady() {
        $("html").removeClass("no-js").addClass("has-js ready");
        $(window).load(function() {
            $("html").addClass("load");
        });
    }
    return {
        init: function() {
            docReady();
        }
    };
}();

$(document).ready(function() {
    themephe.init();
});