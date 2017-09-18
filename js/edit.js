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

var use = document.querySelectorAll(".use");
var useA = new Array();

var learn = document.querySelectorAll(".learn");
var learnA = new Array();

for(var i = 0; i < learn.length; i++) {
	learnA[i] = learn[i];
	useA[i] = use[i];
}

var tools = $(".tools");

for(var i = 0; i < use.length; i++) {

	$(use[i]).on("tap", function() {

		var n = useA.indexOf(this);
		$("#toolsEditor").css("top", "0vh");

		if(n == 0) {

			$(tools[n]).css("display", "block");

		}

	});

}

for(var i = 0; i < learn.length; i++) {

	$(learn[i]).on("tap", function() {

		var n = learnA.indexOf(this);

	});

}