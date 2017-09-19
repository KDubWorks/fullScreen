var win = $(window).width();

var editorSec = $(".editorSec");
var edSeA = new Array();

for(var i = 0; i < editorSec.length; i++) {
	edSeA[i] = editorSec[i];
}


if(win <= 425) {

	$(".editorSec").on("swipeleft", function() {

		$(this).css("margin-left", "-8em");

	});


	$(".editorSec").on("swiperight", function() {

		$(this).css("margin-left", "0vw");

	});

	var use = document.querySelectorAll(".use");
	var useA = new Array();

	var learn = document.querySelectorAll(".learn");
	var learnA = new Array();

	for(var i = 0; i < learn.length; i++) {
		learnA[i] = learn[i];
		useA[i] = use[i];
	}

	var open = 0;

	var editTitle = $(".editTitle");
	var editTitleA = new Array();

	for(var i = 0; i < editTitle.length; i++) {
		editTitleA[i] = editTitle[i];
	}

	$(".editTitle").on("tap", function() {

		var n = editTitleA.indexOf(this);
		$(editorSec[n]).css("margin-left", "-8em");

	});

	var tools = $(".tools");

	for(var i = 0; i < use.length; i++) {

		$(use[i]).on("tap", function() {

			var n = useA.indexOf(this);
			$("#toolsEditor").css("top", "0vh");

			if(n == 0) {

				$(tools[n]).css("display", "block");

			} else if(n == 1) {

				$(tools[n]).css("display", "block");

			} else if(n == 2) {

				$(tools[n]).css("display", "block");

			} else if(n == 3) {

				$(tools[n]).css("display", "block");

			} else if(n == 4) {

				$(tools[n]).css("display", "block");

			} else if(n == 5) {

				$(tools[n]).css("display", "block");

			}

		});

	}

	for(var i = 0; i < learn.length; i++) {

		$(learn[i]).on("tap", function() {

			var n = learnA.indexOf(this);


		});

	}

	/*This will open the specific tools*/
	var sectools = $(".sectools");
	var sectoolsA = new Array();

	for(var i = 0; i < sectools.length; i++) {
		sectoolsA[i] = sectools[i];
	}

	for(var i = 0; i < sectools.length; i++) {

		$(sectools[i]).on("tap", function() {

			var n = sectoolsA.indexOf(this);
			$(sectools[n]).css("height", "auto");

		});

	}

}
