/*This will save the code when clicked*/
var winW = $(window).width();
var winH = $(window).height();

function fillArray(arrL, arr) {

	for(var i = 0; i < arr.length; i++) {
		arrL[i] = arr[i];
	}

}

if(winH > winW) {

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

	});

} else {

	if(winW >= 769) {

		$("#save-tag").click(function() {

			$("#save-options").css("bottom", "1em");

		});

		var sudoPublish = $(".sudo-publish");
		var sudoPublishA = new Array();
		var titlePre = $("#title-preview").children();

		fillArray(sudoPublishA, sudoPublish);

		for(var i = 0; i < sudoPublish.length; i++) {
			$(sudoPublish[i]).click(function() {

				var n = sudoPublishA.indexOf(this);

				if(n == 0) {

					var edit = $("#title-changer").val();

					titlePre[0].innerHTML = edit;

				}

			});
		}

	}

}