var win = $(window).width();

var editorSec = $(".editorSec");
var edSeA = new Array();

for(var i = 0; i < editorSec.length; i++) {
	edSeA[i] = editorSec[i];
}

$(".editorSec").on("swipeleft", function() {

	$(this).css("margin-left", "-8em");

});


$(".editorSec").on("swiperight", function() {

	$(this).css("margin-left", "0vw");

});