var win = $(window).width();

var editorSec = $(".editorSec");
var edSeA = new Array();

for(var i = 0; i < editorSec.length; i++) {
	edSeA[i] = editorSec[i];
}

$(".editorSec").on("swipeleft", function() {

	var n = edSeA.indexOf(this);
	alert(n);
	var swipeMargin = editorSec[n].style.marginLeft;
	$(this).css("margin-left", "-20vw");
	closeSwipe(swipeMargin);

});

function closeSwipe(t) {

	if(t == "-20vw") {

		$(".editorSec").on("swiperight", function() {

			$(this).css("margin-left", "0vw");

		});

	}

}

