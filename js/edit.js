var winW = $(window).width();
var winH = $(window).height();

/*-------------------------------
This will test when the page is loaded 
if the orientation is portrait or
landscape
-------------------------------*/
if(winW > winH) {



} else {

	//this will be a function that fills arrays
	function fillArray(arrl, arr) {
		for(var i = 0; i < arr.length; i++) {
			arrl[i] = arr[i];
		}
	}

	/*This is the option section that will be swiped*/
	var editTitleCard = $(".edit-title-card");
	var editTitleCardA = new Array();

	fillArray(editTitleCardA, editTitleCard);

	//this is the editor interior title that will be moved
	var editorInterior = $(".editor-interior-option-section");

	/*This is the swipe left on the option to open it*/
	for(var i = 0; i < editTitleCard.length; i++) {
		$(editTitleCard[i]).on("swipeleft", function() {

			//this will get the actual editor option
			var n = editTitleCardA.indexOf(this);

			$(editorInterior[n]).css("margin-left", "-8em");

		});
	}

	/*This is the tap on the option to open it*/
	for(var i = 0; i < editTitleCard.length; i++) {
		$(editTitleCard[i]).on("tap", function() {

			//this will get the actual editor option
			var n = editTitleCardA.indexOf(this);

			$(editorInterior[n]).css("margin-left", "-8em");

		});
	}

	/*This is the swipe right on the option to close it*/
	for(var i = 0; i < editTitleCard.length; i++) {
		$(editTitleCard[i]).on("swiperight", function() {

			//this will get the actual editor option
			var n = editTitleCardA.indexOf(this);

			$(editorInterior[n]).css("margin-left", "0em");

		});
	}

	/*This is the slide close button*/
	var slideOpen = $(".slide-open");
	var slideOpenA = new Array();

	fillArray(slideOpenA, slideOpen);

	/*This is the tap on the option to close it*/
	for(var i = 0; i < slideOpen.length; i++) {
		$(slideOpen[i]).on("tap", function() {

			//this will get the actual editor option
			var n = slideOpenA.indexOf(this);

			$(editorInterior[n]).css("margin-left", "0em");

		});
	}

	/*This will open the learn section*/
	var learn = $(".learn");
	var learnA = new Array();

	fillArray(learnA, learn);
	/*This will grb the close learn button to close 
	the other information*/
	var closeLearn = $(".close-learn");
	var closeLearnA = new Array();

	fillArray(closeLearnA, closeLearn);

	//editor options
	var editorOption = $(".editor-option");

	for(var i = 0; i < learn.length; i++) {
		$(learn[i]).on("tap", function() {

			var n = learnA.indexOf(this);
			$(editorOption[n]).css("height", "auto");
			$(closeLearn[n]).css("display", "block");


		});
	}

	for(var i = 0; i < closeLearn.length; i++) {
		$(closeLearn[i]).on("tap", function() {

			var n = closeLearnA.indexOf(this);
			$(editorOption[n]).css("height", "4em");
			$(closeLearn[n]).css("display", "none");

		});
	}

	/*This will be the bottom selection. It will have the close
	settings, save, publish, and menu button*/
	var editorMenu = $(".editor-menu");
	var editorMenuA = new Array();

	fillArray(editorMenuA, editorMenu);

	for(var i = 0; i < editorMenu.length; i++) {
		$(editorMenu[i]).on("tap", function() {

			var n = editorMenuA.indexOf(this);

			if(n == 0) {

				$("#editor-ext").css("height", "0px");

			}

		});
	}

}