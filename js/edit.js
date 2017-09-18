var win = $(window).width();

var editorSec = $(".editorSec");
var edSeA = new Array();

for(var i = 0; i < editorSec.length; i++) {
	edSeA[i] = editorSec[i];
}

/*$(".editorSec").on("swipeleft", function() {

	var n = edSeA.indexOf(this);
	$(this).css("margin-left", "-20vw");

});*/

function loop(mar) {

	if(mar == "0px") {

		$(".editorSec").on("swipeleft", function() {

			var n = edSeA.indexOf(this);
			$(this).css("margin-left", "-20vw");
			var marginSwipe = $(edSeA[n]).css("margin-left");
			loop(marginSwipe);

		});

	} else {

		$(".editorSec").on("swiperight", function() {

			var n = edSeA.indexOf(this);
			$(this).css("margin-left", "0vw");
			var marginSwipe = $(edSeA[n]).css("margin-left");
			loop(marginSwipe);

		});

	}

}

loop(0);


