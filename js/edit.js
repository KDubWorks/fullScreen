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

	if(mar == 0) {

		$(".editorSec").on("swipeleft", function() {

			var n = edSeA.indexOf(this);
			$(this).css("margin-left", "-20vw");
	
			closeLoop(n);

		});

	}

}

function closeLoop(num) {

	if(num == 0) {

		$(edSeA[num]).on("swiperight", function() {

			var n = edSeA.indexOf(this);
			$(this).css("margin-right", "0vw");
	

		});

	} else if(n == 1) {

		$(edSeA[num]).on("swiperight", function() {

			var n = edSeA.indexOf(this);
			$(this).css("margin-right", "0vw");
	

		});

	} else if(n == 2) {

		$(edSeA[num]).on("swiperight", function() {

			var n = edSeA.indexOf(this);
			$(this).css("margin-right", "0vw");
	

		});
		
	} else if(n == 3) {

		$(edSeA[num]).on("swiperight", function() {

			var n = edSeA.indexOf(this);
			$(this).css("margin-right", "0vw");
	

		});
		
	} else if(n == 4) {

		$(edSeA[num]).on("swiperight", function() {

			var n = edSeA.indexOf(this);
			$(this).css("margin-right", "0vw");
	

		});
		
	} else if(n == 5) {

		$(edSeA[num]).on("swiperight", function() {

			var n = edSeA.indexOf(this);
			$(this).css("margin-right", "0vw");
	

		});
		
	}

}

