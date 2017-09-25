var win = $(window).width();
var winH = $(window).height();

var editorSec = $(".editorSec");
var edSeA = new Array();

for(var i = 0; i < editorSec.length; i++) {
	edSeA[i] = editorSec[i];
}

if(win > winH) {



} else {

	if(win <= 425) {

	/*This will calculate the height of the body*/
	var bodyAreaH = $("#body-area").height();
	var boxShadowH = $("#box-shadow").height();

	var remaining = (bodyAreaH - boxShadowH - 65) / 2;

	$("#box-shadow").css("margin-top", remaining + "px");

	var use = $(".use");
	var useA = new Array();

	var learn = $(".learn");
	var learnA = new Array();

	/*This will close the title section cards*/
	var slideOpen = $(".slide-open");
	var slOpC = slideOpen.children();
	var slideOpenA = new Array();

	for(var i = 0; i < slideOpen.length; i++) {
		slideOpenA[i] = slideOpen[i];
	}


	for(var i = 0; i < slideOpen.length; i++) {

		$(slideOpen[i]).on("tap", function() {

			var n = slideOpenA.indexOf(this);
			$(editorSec[n]).css("margin-left","0em");
			slOpC[n].setAttribute("src", "img/closeHigh.png");

		});

	}

	for(var i = 0; i < learn.length; i++) {
		learnA[i] = learn[i];
		useA[i] = use[i];
	}

	$(".editorSec").on("swipeleft", function() {

		var n = edSeA.indexOf(this);
		$(this).css("margin-left", "-8em");
		slOpC[n].setAttribute("src", "img/close.png");

	});


	$(".editorSec").on("swiperight", function() {

		var n = edSeA.indexOf(this);
		$(this).css("margin-left", "0vw");
		slOpC[n].setAttribute("src", "img/closeHigh.png");

	});

	var editTitle = $(".editTitle");
	var editTitleA = new Array();

	for(var i = 0; i < editTitle.length; i++) {
		editTitleA[i] = editTitle[i];
	}

	$(".editTitle").on("tap", function() {

		var n = editTitleA.indexOf(this);
		$(editorSec[n]).css("margin-left", "-8em");
		slOpC[n].setAttribute("src", "img/close.png");

	});

	var tools = $(".tools");

	for(var i = 0; i < use.length; i++) {

		$(use[i]).on("tap", function() {

			var n = useA.indexOf(this);
			$("#toolsEditor").css("top", "0vh");
			$("#close-tool").css("display", "block");

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

	/*This will close the tools*/
	$("#close-tool").on("tap", function() {

		$("#toolsEditor").css("top", "-100vh");
		setTimeout(function() {
			$(".tools").css("display", "none");
		}, 800);
		$(this).css("display", "none");

	});

	for(var i = 0; i < learn.length; i++) {

		$(learn[i]).on("tap", function() {

			var n = learnA.indexOf(this);


		});

	}

	/*This will open the specific tools*/
	var headsec = $(".head-section");
	var headsecA = new Array();
	var closeDiv = $(".close-div");
	var closeDivA = new Array();
	var sectools = $(".sectools");

	for(var i = 0; i < headsec.length; i++) {
		headsecA[i] = headsec[i];
		closeDivA[i] = closeDiv[i];
	}

	/*This is the code to open the tools*/
	for(var i = 0; i < headsec.length; i++) {

		$(headsec[i]).on("tap", function() {

			var n = headsecA.indexOf(this);
			$(sectools[n]).css("height", "auto");
			setTimeout(function() {
				$(closeDiv[n]).css("display", "block");
			}, 10);

		});

	}

	/*This will close the specific tools opened*/
	for(var i = 0; i < closeDiv.length; i++) {

		$(closeDiv[i]).on("tap", function() {

			var n = closeDivA.indexOf(this);
			sectools[n].removeAttribute("style");
			setTimeout(function() {
				$(closeDiv[n]).css("display", "none");
			}, 10);

		});

	}

	/*-------------------------------
	This closes the entire editor
	-------------------------------*/

	/*this will open the editor*/
	$("#open-editor").on("tap", function() {

		$(this).css("color", "#000");
		$(this).css("background-color", "#fff");

		$("#editor-ext").css("height", "100vh");

		setTimeout(function() {

			$("#open-editor").css("color", "#fff");
			$("#open-editor").css("background-color", "transparent");

		}, 760);

	});

	/*this will manage the bottom of the selection*/
	var selections = $(".selection").children();
	var selA = new Array();

	for(var i = 0; i < selections.length; i++) {
		selA[i] = selections[i];
	}

	for(var i = 0; i < selA.length; i++) {

		$(selections[i]).on("tap", function() {

			var n = selA.indexOf(this);

			if(n == 0) {
				$("#editor-ext").css("height", "0px");
			}

		});

	}

	/*-------------------------------
	This will change editor for the background
	-------------------------------*/

	/*-----This will change the
	background count-----*/
	/*This is the array to get the background-count*/
	$("#change-up-count").on("tap", function() {

		var bct = document.getElementById("count-pre").innerHTML;
		var bcti = parseInt(bct);
		bcti = bcti + 1;

		if(bcti < 6) {
			document.getElementById("count-pre").innerHTML = bcti;
		}

	});

	$("#change-down-count").on("tap", function() {

		var bct = document.getElementById("count-pre").innerHTML;
		var bcti = parseInt(bct);
		bcti = bcti - 1;

		if(bcti > 0) {
			document.getElementById("count-pre").innerHTML = bcti;
		}

	});


	/*-----This will select the 
	images or colors for the 
	backgrouund-----*/
	$("#backcolorsel").on("tap", function() {

		$(this).css("margin-left", "-100vw");

		setTimeout(function() {

			$("#backgroundimgsel").css("margin-left", "-100vw");

		}, 50);

		setTimeout(function() {

			$("#color-select").css("left", "0px");

		}, 800);

	});

	$("#backgroundimgsel").on("tap", function() {

		$(this).css("margin-left", "-100vw");

		setTimeout(function() {

			$("#backcolorsel").css("margin-left", "-100vw");

		}, 50);

		setTimeout(function() {

			$("#img-select").css("left", "0px");

		}, 800);

	});

	/*-----This will select the background images
	and swipe through them-----*/
	var inImgWid = $("#in-img-select").width();
	var inImgWidP = parseInt(inImgWid);
	var imgSel = $(".imgs-to-sel");
	var imgSelA = new Array();

	for(var i = 0; i < imgSel.length; i++) {
		imgSelA[i] = imgSel[i];
	}

	var imgSelL = $(imgSel[0]).width();
	var whileConst = inImgWidP - imgSelL;

	//This will slide the image selection left
	for(var i = 0; i < imgSel.length; i++) {

		$(imgSel[i]).on("swipeleft", function() {

			var n = imgSelA.indexOf(this);

			if(n == 0) {
				$("#in-img-select").css("margin-left", "-90vw");
			} else if(n == 1) {
				$("#in-img-select").css("margin-left", "-180vw");
			} else if(n == 2) {
				$("#in-img-select").css("margin-left", "-270vw");
			} else if(n == 3) {
				$("#in-img-select").css("margin-left", "-360vw");
			} else if(n == 4) {
				$("#in-img-select").css("margin-left", "-450vw");
			}

		});
		
	}

	//This will slide the image selection right
	for(var i = 0; i < imgSel.length; i++) {

		$(imgSel[i]).on("swiperight", function() {

			var n = imgSelA.indexOf(this);

			if(n == 5) {
				$("#in-img-select").css("margin-left", "-360vw");
			} else if(n == 4) {
				$("#in-img-select").css("margin-left", "-270vw");
			} else if(n == 3) {
				$("#in-img-select").css("margin-left", "-180vw");
			} else if(n == 2) {
				$("#in-img-select").css("margin-left", "-90vw");
			} else if(n == 1) {
				$("#in-img-select").css("margin-left", "0vw");
			}

		});
		
	}

	/*-------------------------------
	This will change the icon image
	-------------------------------*/

	/*-----This will change the 
	icon size-----*/

	/*-------------------------------
	This will change editor for the title
	-------------------------------*/

	/*-----This will change the 
	font size of the title text-----*/
	$("#change-up").on("tap", function() {

		var fpt = document.getElementById("font-pre-text").innerHTML;
		var fpti = parseInt(fpt);
		fpti = fpti + 1;

		if(fpti < 30) {
			document.getElementById("font-pre-text").innerHTML = fpti;
		}

	});

	$("#change-down").on("tap", function() {

		var fpt = document.getElementById("font-pre-text").innerHTML;
		var fpti = parseInt(fpt);
		fpti = fpti - 1;

		if(fpti > 11) {
			document.getElementById("font-pre-text").innerHTML = fpti;
		}

	});

	/*-------------------------------
	This will change editor for the date
	-------------------------------*/

	/*-----This will choose the date setup-----*/
	$("#multiple-dates").on("tap", function() {

		$(this).css("background-color", "#484848");
		$(this).css("color", "#f3f3f3");

		$("#single-date").css("background-color", "#f3f3f3");
		$("#single-date").css("color", "#484848");

		$("#sdsect").css("margin-left", "-100vw");
		setTimeout(function() {

			$("#sdsect").css("display", "none");

		} , 800);

		setTimeout(function() {

			$("#stdtsect").css("margin-left", "5vw");

		}, 810);

		setTimeout(function() {

			$("#endtsect").css("margin-left", "5vw");

		}, 820);

		setTimeout(function() {

			$("#bttxtsect").css("margin-left", "5vw");

		}, 830);

	});

	$("#single-date").on("tap", function() {

		$(this).css("background-color", "#484848");
		$(this).css("color", "#f3f3f3");

		$("#multiple-dates").css("background-color", "#f3f3f3");
		$("#multiple-dates").css("color", "#484848");

		$("#stdtsect").css("margin-left", "-100vw");

		setTimeout(function() {

			$("#endtsect").css("margin-left", "-100vw");

		}, 10);

		setTimeout(function() {

			$("#bttxtsect").css("margin-left", "-100vw");
			
		}, 20);

		setTimeout(function() {

			$("#sdsect").css("display", "block");

		}, 800);

		setTimeout(function() {

			$("#sdsect").css("margin-left", "5vw");

		}, 810);

	});



	} else if(win >= 426 && win <= 768) {

		var editorTitle = $(".editTitle");
		var edTiA = new Array();

		for(var i = 0; i < editorTitle.length; i++) {
			edTiA[i] = editorTitle[i];
		}

		$(editorTitle).on("swipeleft", function() {

			var n = edTiA.indexOf(this);
			$(editorSec[n]).css("margin-left", "-12em");

		});

		$(editorTitle).on("tap", function() {

			var n = edTiA.indexOf(this);
			$(editorSec[n]).css("margin-left", "-12em");

		});

		$(editorTitle).on("swiperight", function() {

			var n = edTiA.indexOf(this);
			$(editorSec[n]).css("margin-left", "0em");

		});

		var slideOpen = $(".slide-open");
		var slideOpenA = new Array();

		for(var i = 0; i < slideOpen.length; i++) {
			slideOpenA[i] = slideOpen[i];
		}

		for(var i = 0; i < slideOpen.length; i++) {

			$(slideOpen[i]).on("tap", function() {

				var n = slideOpenA.indexOf(this);
				$(editorSec[n]).css("margin-left", "0em");

			});

		}

		/*This will open the tools*/
		var headSection = $(".head-section");
		var headSectionA = new Array();
		var sectools = $(".sectools");

		for(var i = 0; i < headSection.length; i++) {
			headSectionA[i] = headSection[i];
		}

		for(var i = 0; i < headSection.length; i++) {

			$(headSection).on("tap", function() {

				var n = headSectionA.indexOf(this);
				$(sectools[n]).css("height", "auto");

			});

		}

		/*Open Sections*/
		var use = $(".use");
		var useA = new Array();

		for(var i = 0; i < use.length; i++) {
			useA[i] = use[i]
		}

		var tools = $(".tools");

		for(var i = 0; i < use.length; i++) {

			$(use).on("tap", function() {

				$("#toolsEditor").css("top", "0vh");
				var n = useA.indexOf(this);
				$(tools[n]).css("display", "block");

			});

		}

	}

}
