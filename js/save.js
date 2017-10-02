/*This will save the code when clicked*/
var winW = $(window).width();
var winH = $(window).height();

if(winH > winW) {

	function fillArray(arrL, arr) {

		for(var i = 0; i < arr.length; i++) {
			arrL[i] = arr[i];
		}

	}

	//THis will sense when the content fot the background 
	//has changed and will prompt for a change.
	var firstBack = $("#first-back").css("background-image");
	var imageSel = $(".in-color");
	var imageSelA = new Array();

	function firstBackF() {

		$("#first-back").on("tap", function() {

			return firstBack;

		});

	}

	firstBackF();

	fillArray(imageSelA, imageSel);

	function imageChangeOne() {

		for(var i = 0; i < imageSel.length; i++) {
			$(imageSel[i]).on("tap", function() {

				var n = imageSelA.indexOf(this);
				var backSel = $(imageSel[n]).css("background-image");

				alert(backSel);

				return backSel;

			});
		}

	}

	var editorMenu = $(".editor-menu");

	$(editorMenu[2]).on("tap", function() {

		//This will open the settings
		$("#save-options").css("bottom", "3em");

	});

	var backChanged = imageChangeOne();

}