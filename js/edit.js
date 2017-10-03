var winW = $(window).width();
var winH = $(window).height();

/*-------------------------------
This will test when the page is loaded 
if the orientation is portrait or
landscape
-------------------------------*/
if(winW > winH) {

	if(winW >= 769) {

		/*This is the fill array function*/
		function fillArray(arrA, arr) {

			for(var i = 0; i < arr.length; i++) {
				arrA[i] = arr[i];
			}

		}

		/*--------------------------------
		-----This is the hover command 
		for the other menu options-----
		--------------------------------*/
		$("#editor-open").mouseover(function() {

			$(this).css("background-color", "#f3f3f3");
			var child = $(this).children();
			child[0].setAttribute("src", "img/editor.png");

		});

		$("#editor-open").mouseout(function() {

			$(this).css("background-color", "transparent");
			var child = $(this).children();
			child[0].setAttribute("src", "img/whiteEditor.png");

		});

		$("#save-tag").mouseover(function() {

			$(this).css("background-color", "#f3f3f3");
			var child = $(this).children();
			child[0].setAttribute("src", "img/save.png");

		});

		$("#save-tag").mouseout(function() {

			$(this).css("background-color", "transparent");
			var child = $(this).children();
			child[0].setAttribute("src", "img/whiteSave.png");

		});

		$("#publish-tag").mouseover(function() {

			$(this).css("background-color", "#f3f3f3");
			var child = $(this).children();
			child[0].setAttribute("src", "img/publish.png");

		});

		$("#publish-tag").mouseout(function() {

			$(this).css("background-color", "transparent");
			var child = $(this).children();
			child[0].setAttribute("src", "img/whitePublish.png");

		});

		/*--------------------------------
		-----This will open the editor-----
		--------------------------------*/
		/*This is the editor option variable*/
		var editorOption = $(".editor-option");
		var editTitleCard = $(".edit-title-card").children();

		$("#editor-open").click(function() {

			$(this).css("background-color", "#f3f3f3");
			$(this).css("color", "#484848");

			$("#editor-ext").css("height", "100vh");
			$("#editor").css("top", "3em");
			$(editTitleCard[0]).css("color", "#f3f3f3");
			$(editorOption[0]).css("background-color", "#484848");

		});

		/*This will open different tools in the editor*/
		/*These are the tools*/
		var tools = $(".tools");
		editorOptionsA = new Array();
		fillArray(editorOptionsA, editorOption);
		for(var i = 0; i < editorOption.length; i++) {
			$(editorOption[i]).click(function() {

				var n = editorOptionsA.indexOf(this);

				if(n == 0) {

					$("#in-tools").css("margin-left", "0vw");
					$(editTitleCard[0]).css("color", "#f3f3f3");
					$(editorOption[0]).css("background-color", "#484848");
					$(editTitleCard[1]).css("color", "#484848");
					$(editorOption[1]).css("background-color", "#f3f3f3");
					$(editTitleCard[2]).css("color", "#484848");
					$(editorOption[2]).css("background-color", "#f3f3f3");
					$(editTitleCard[3]).css("color", "#484848");
					$(editorOption[3]).css("background-color", "#f3f3f3");
					$(editTitleCard[4]).css("color", "#484848");
					$(editorOption[4]).css("background-color", "#f3f3f3");
					$(editTitleCard[5]).css("color", "#484848");
					$(editorOption[5]).css("background-color", "#f3f3f3");

				} else if(n == 1) {

					$("#in-tools").css("margin-left", "-100vw");
					$(editTitleCard[1]).css("color", "#f3f3f3");
					$(editorOption[1]).css("background-color", "#484848");
					$(editTitleCard[0]).css("color", "#484848");
					$(editorOption[0]).css("background-color", "#f3f3f3");
					$(editTitleCard[2]).css("color", "#484848");
					$(editorOption[2]).css("background-color", "#f3f3f3");
					$(editTitleCard[3]).css("color", "#484848");
					$(editorOption[3]).css("background-color", "#f3f3f3");
					$(editTitleCard[4]).css("color", "#484848");
					$(editorOption[4]).css("background-color", "#f3f3f3");
					$(editTitleCard[5]).css("color", "#484848");
					$(editorOption[5]).css("background-color", "#f3f3f3");

				} else if(n == 2) {

					$("#in-tools").css("margin-left", "-200vw");
					$(editTitleCard[2]).css("color", "#f3f3f3");
					$(editorOption[2]).css("background-color", "#484848");
					$(editTitleCard[1]).css("color", "#484848");
					$(editorOption[1]).css("background-color", "#f3f3f3");
					$(editTitleCard[0]).css("color", "#484848");
					$(editorOption[0]).css("background-color", "#f3f3f3");
					$(editTitleCard[3]).css("color", "#484848");
					$(editorOption[3]).css("background-color", "#f3f3f3");
					$(editTitleCard[4]).css("color", "#484848");
					$(editorOption[4]).css("background-color", "#f3f3f3");
					$(editTitleCard[5]).css("color", "#484848");
					$(editorOption[5]).css("background-color", "#f3f3f3");

				} else if(n == 3) {

					$("#in-tools").css("margin-left", "-300vw");
					$(editTitleCard[3]).css("color", "#f3f3f3");
					$(editorOption[3]).css("background-color", "#484848");
					$(editTitleCard[1]).css("color", "#484848");
					$(editorOption[1]).css("background-color", "#f3f3f3");
					$(editTitleCard[2]).css("color", "#484848");
					$(editorOption[2]).css("background-color", "#f3f3f3");
					$(editTitleCard[0]).css("color", "#484848");
					$(editorOption[0]).css("background-color", "#f3f3f3");
					$(editTitleCard[4]).css("color", "#484848");
					$(editorOption[4]).css("background-color", "#f3f3f3");
					$(editTitleCard[5]).css("color", "#484848");
					$(editorOption[5]).css("background-color", "#f3f3f3");

				} else if(n == 4) {

					$("#in-tools").css("margin-left", "-400vw");
					$(editTitleCard[4]).css("color", "#f3f3f3");
					$(editorOption[4]).css("background-color", "#484848");
					$(editTitleCard[1]).css("color", "#484848");
					$(editorOption[1]).css("background-color", "#f3f3f3");
					$(editTitleCard[2]).css("color", "#484848");
					$(editorOption[2]).css("background-color", "#f3f3f3");
					$(editTitleCard[3]).css("color", "#484848");
					$(editorOption[3]).css("background-color", "#f3f3f3");
					$(editTitleCard[0]).css("color", "#484848");
					$(editorOption[0]).css("background-color", "#f3f3f3");
					$(editTitleCard[5]).css("color", "#484848");
					$(editorOption[5]).css("background-color", "#f3f3f3");

				} else {

					$("#in-tools").css("margin-left", "-500vw");
					$(editTitleCard[5]).css("color", "#f3f3f3");
					$(editorOption[5]).css("background-color", "#484848");
					$(editTitleCard[1]).css("color", "#484848");
					$(editorOption[1]).css("background-color", "#f3f3f3");
					$(editTitleCard[2]).css("color", "#484848");
					$(editorOption[2]).css("background-color", "#f3f3f3");
					$(editTitleCard[3]).css("color", "#484848");
					$(editorOption[3]).css("background-color", "#f3f3f3");
					$(editTitleCard[4]).css("color", "#484848");
					$(editorOption[4]).css("background-color", "#f3f3f3");
					$(editTitleCard[0]).css("color", "#484848");
					$(editorOption[0]).css("background-color", "#f3f3f3");

				}

			});
		}

	}

	/*---------------------------------
	---------------------------------
	This will open the individual section
	---------------------------------
	---------------------------------*/
	/*This is the head section variable*/
	var headSec = $(".head-section");
	var headSecA = new Array();

	fillArray(headSecA, headSec);

	/*This is open indicator*/
	var openIndicator = $(".open-indicator");
	var openIndicatorA = new Array();

	fillArray(openIndicatorA, openIndicator);

	/*This is the close indicator*/
	var closeIndicator = $(".close-indicator");
	var closeIndicatorA = new Array();

	fillArray(closeIndicatorA, closeIndicator);

	/*This is the section tool*/
	var secTools = $(".sectools");

	/*----------------------------
	This is to open the section tool by 
	clicking the head section
	----------------------------*/
	for(var i = 0; i < headSec.length; i++) {
		$(headSec[i]).click(function() {

			var n = headSecA.indexOf(this);

			$(secTools[n]).css("height", "auto");
			openIndicator[n].setAttribute("src", "img/closeUp.png");

			setTimeout(function() {

				$(closeIndicator[n]).css("display", "block");
				$(openIndicator[n]).css("display", "none");

			}, 100);

		});
	}

	/*----------------------------
	This is to open the section tool by 
	clicking the open indicator
	----------------------------*/
	for(var i = 0; i < openIndicator.length; i++) {
		$(openIndicator[i]).click(function() {

			var n = openIndicatorA.indexOf(this);

			$(secTools[n]).css("height", "auto");
			openIndicator[n].setAttribute("src", "img/closeUp.png");

			setTimeout(function() {

				$(closeIndicator[n]).css("display", "block");
				$(openIndicator[n]).css("display", "none");

			}, 100);

		});
	}

	/*----------------------------
	This is to close the section tool by 
	clicking the close indicator
	----------------------------*/
	for(var i = 0; i < closeIndicator.length; i++) {
		$(closeIndicator[i]).click(function() {

			var n = closeIndicatorA.indexOf(this);

			$(secTools[n]).css("height", "3em");
			closeIndicator[n].setAttribute("src", "img/open.png");

			setTimeout(function() {

				$(openIndicator[n]).css("display", "block");
				$(closeIndicator[n]).css("display", "none");

			}, 100);

		});
	}

	/*----------------------------
	This is to close the section tool by 
	clicking the close div
	----------------------------*/
	var closeDiv = $(".close-div");
	var closeDivA = new Array();

	fillArray(closeDivA, closeDiv);

	for(var i = 0; i < closeDiv.length; i++) {
		$(closeDiv[i]).click(function() {

			var n = closeDivA.indexOf(this);

			$(secTools[n]).css("height", "3em");
			closeIndicator[n].setAttribute("src", "img/open.png");

			setTimeout(function() {

				$(openIndicator[n]).css("display", "block");
				$(closeIndicator[n]).css("display", "none");

			}, 100);

		});
	}

	/*---------------------------------
	---------------------------------
	This will be the background tools
	---------------------------------
	---------------------------------*/
	var sel = $("#selection");
	var backCol = $("#backcolorsel");
	var backImg = $("#backimgsel");

	$(backCol).click(function() {

		$(this).css("margin-left", "-45vw");

		setTimeout(function() {

			$(backImg).css("margin-left", "-45vw");
			$(sel).css("height", "36vw");

		}, 100);

	});

	$(backImg).click(function() {

		$(this).css("margin-left", "-45vw");
		$("#img-select").css("display", "block");

		setTimeout(function() {

			$(backCol).css("margin-left", "-45vw");
			$(sel).css("height", "36vw");

		}, 100);

	});


} else {

	if(winW <= 425) {

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

		/*This is the slide close button*/
		var slideOpen = $(".slide-open");
		var slideOpenA = new Array();

		fillArray(slideOpenA, slideOpen);

		//this is the editor interior title that will be moved
		var editorInterior = $(".editor-interior-option-section");

		/*This is the swipe left on the option to open it*/
		for(var i = 0; i < editTitleCard.length; i++) {
			$(editTitleCard[i]).on("swipeleft", function() {

				//this will get the actual editor option
				var n = editTitleCardA.indexOf(this);

				$(editorInterior[n]).css("margin-left", "-8em");
				//This is getting the img tag to add the colored close
				var slideOpenImg = slideOpen.children();
				slideOpenImg[n].setAttribute("src", "img/close.png");

			});
		}

		/*This is the tap on the option to open it*/
		for(var i = 0; i < editTitleCard.length; i++) {
			$(editTitleCard[i]).on("tap", function() {

				//this will get the actual editor option
				var n = editTitleCardA.indexOf(this);

				$(editorInterior[n]).css("margin-left", "-8em");
				//This is getting the img tag to add the colored close
				var slideOpenImg = slideOpen.children();
				slideOpenImg[n].setAttribute("src", "img/close.png");

			});
		}

		/*This is the swipe right on the option to close it*/
		for(var i = 0; i < editTitleCard.length; i++) {
			$(editTitleCard[i]).on("swiperight", function() {

				//this will get the actual editor option
				var n = editTitleCardA.indexOf(this);

				$(editorInterior[n]).css("margin-left", "0em");

				//This is getting the img tag to remove the colored close
				var slideOpenImg = slideOpen.children();
				slideOpenImg[n].setAttribute("src", "img/closeHigh.png");

			});
		}

		//This uses the slide open variable
		/*This is the tap on the option to close it*/
		for(var i = 0; i < slideOpen.length; i++) {
			$(slideOpen[i]).on("tap", function() {

				//this will get the actual editor option
				var n = slideOpenA.indexOf(this);

				$(editorInterior[n]).css("margin-left", "0em");
				//This is getting the img tag to remove the colored close
				var slideOpenImg = slideOpen.children();
				slideOpenImg[n].setAttribute("src", "img/closeHigh.png");

			});
		}

		/*This will open the tool editor section*/
		var use = $(".use");
		var useA = new Array();

		var tools = $(".tools");

		fillArray(useA, use);

		for(var i = 0; i < use.length; i++) {
			$(use[i]).on("tap", function() {

				//This pulls the close editor down
				$("#toolsEditor").css("top", "0px");

				//This will open the close button
				$("#close-tool").css("display", "block");

				var n = useA.indexOf(this);

				$(tools[n]).css("display", "block");

			});
		}

		/*This will close the tools editor*/
		$("#close-tool").on("tap", function() {

			$("#toolsEditor").css("top", "-100vh");
			$(this).css("display", "none");
			$(tools).css("display", "none");

		});

		/*This will open the individual section tools by clicking
		the acutal head section or open indicator*/
		var headSection = $(".head-section");
		var headSectionA = new Array();

		var openIndicator = $(".open-indicator");
		var openIndicatorA = new Array();

		var closeIndicator = $(".close-indicator");
		var closeIndicatorA = new Array();

		var closeDiv = $(".close-div");
		var closeDivA = new Array();

		var secTool = $(".sectools");

		fillArray(headSectionA, headSection);
		fillArray(openIndicatorA, openIndicator);
		fillArray(closeIndicatorA, closeIndicator);
		fillArray(closeDivA, closeDiv);

		for(var i = 0; i < headSection.length; i++) {
			$(headSection[i]).on("tap", function() {

				var n = headSectionA.indexOf(this);

				$(secTool[n]).css("height", "auto");
				openIndicator[n].setAttribute("src", "img/closeUp.png");

				setTimeout(function() {

					$(closeIndicator[n]).css("display", "block");
					$(openIndicator[n]).css("display", "none");
					$(closeDiv[n]).css("display", "block");

				}, 100);

			});
		}

		for(var i = 0; i < openIndicator.length; i++) {
			$(openIndicator[i]).on("tap", function() {

				var n = openIndicatorA.indexOf(this);

				$(secTool[n]).css("height", "auto");
				openIndicator[n].setAttribute("src", "img/closeUp.png");

				setTimeout(function() {

					$(closeIndicator[n]).css("display", "block");
					$(openIndicator[n]).css("display", "none");
					$(closeDiv[n]).css("display", "block");

				}, 100);

			});
		}

		/*----------------------------------------------
		----------------------------------------------
		This will be the code for the title editor tool
		----------------------------------------------
		----------------------------------------------*/
		/*This is to open title editor tool*/
		$("#title-edit-sec-head").on("tap", function() {

			setTimeout(function() {
				$("#title-changer").focus();
				$("#title-changer").css("bottom", "5px");
			}, 200);

		});

		/*This will change the font size tools*/
		/*This will change the font size up*/
		$("#font-up-change").on("tap", function() {

			var fontPre = document.getElementById("font-pre").innerHTML;
			var fontPreIng = parseInt(fontPre);
			fontPreIng++;

			if(fontPreIng < 31) {

				document.getElementById("font-pre").innerHTML = fontPreIng;

			}

		});

		/*This will change the font size down*/
		$("#font-down-change").on("tap", function() {

			var fontPre = document.getElementById("font-pre").innerHTML;
			var fontPreIng = parseInt(fontPre);
			fontPreIng--;

			if(fontPreIng > 9) {

				document.getElementById("font-pre").innerHTML = fontPreIng;

			}

		});

		/*This is will change the border option for 
		the text title*/
		var borderO = 0;

		/*This will open the options for the text border*/
		function borderOn(o) {

			if(o == 0) {

				$("#border-button").on("tap", function() {

					document.getElementById("border-button").innerHTML = "No Border";
					$("#border-button").css("background-color", "#484848");
					$("#border-button").css("color", "#f3f3f3");

					$("#border-options").css("display", "block");

					borderO = 1;
					borderOff(borderO);

				});

			}

		}

		/*This will close the options for the text border*/
		function borderOff(c) {

			if(c == 1) {

				$("#border-button").on("tap", function() {

					document.getElementById("border-button").innerHTML = "Use Border";
					$("#border-button").css("background-color", "transparent");
					$("#border-button").css("color", "#484848");

					$("#border-options").css("display", "none");

					borderO = 0;
					borderOn(borderO);

				});

			}

		}

		/*This will initialize the the border open and close*/
		borderOn(borderO);

		/*----------------------------------------------
		----------------------------------------------
		This will acitvate the border editor adn tools
		----------------------------------------------
		----------------------------------------------*/
		/*This is the multipe dates section, this opens the single date*/
		/*This will get the date when the page is loaded*/
		$(window).on("load", function() {

			var dateSel = document.getElementById("date-area").innerHTML;

			document.getElementById("date-already").innerHTML = dateSel;

		});

		var multipleDates = $(".multiple-dates");

		$("#single-date-button").on("tap", function() {

			$("#single-date-button").css("background-color", "#484848");
			$("#single-date-button").css("color", "#f3f3f3");

			$("#multiple-dates").css("background-color", "transparent");
			$("#multiple-dates").css("color", "#484848");

			$(multipleDates[0]).css("margin-left", "-100vw");

			setTimeout(function() {

				$(multipleDates[1]).css("margin-left", "-100vw");

			}, 25);

			setTimeout(function() {

				$(multipleDates[2]).css("margin-left", "-100vw");

			}, 50);

			setTimeout(function() {

				$("#single-date-section").css("display", "block");

			}, 800);

			setTimeout(function() {

				$("#single-date-section").css("margin-left", "5vw");

			}, 820);

		});

		$("#multiple-dates").on("tap", function() {

			$("#multiple-dates").css("background-color", "#484848");
			$("#multiple-dates").css("color", "#f3f3f3");
			
			$("#single-date-button").css("background-color", "transparent");
			$("#single-date-button").css("color", "#484848");

			$("#single-date-section").css("margin-left", "-100vw");

			setTimeout(function() {

				$("#single-date-section").css("display", "none");

			}, 810);

			setTimeout(function() {

				$(multipleDates[0]).css("margin-left", "5vw");

			}, 820);

			setTimeout(function() {

				$(multipleDates[1]).css("margin-left", "5vw");

			}, 830);

			setTimeout(function() {

				$(multipleDates[2]).css("margin-left", "5vw");

			}, 840);

		});

		/*----------------------------------------------
		----------------------------------------------
		This will open and close the check button to 
		save the font color and font family to the rest
		of the site
		----------------------------------------------
		----------------------------------------------*/
		/*This is the variable that will open and close
		the check*/
		var checkO = 0;

		/*This will open the check*/
		function openCheck(o) {

			if(o == 0) {

				$(".check").on("tap", function() {

					var checkImg = $(".check").children();

					$(checkImg[0]).css("display", "block");

					checkO = 1;

					closeCheck(checkO);

				});

			}

		}

		/*This will close the check*/
		function closeCheck(c) {

			if(c == 1) {

				$(".check").on("tap", function() {

					var checkImg = $(".check").children();

					$(checkImg[0]).css("display", "none");

					checkO = 0;

					openCheck(checkO);

				});

			}

		}

		/*This will initialize the check open and close*/
		openCheck(checkO);

		/*----------------------------------------------
		----------------------------------------------
		This is specifically the button editor tools
		----------------------------------------------
		----------------------------------------------*/
		/*This section is where you type the text for 
		the button*/
		$("#button-text-section").on("tap", function() {

			setTimeout(function() {
				$("#button-text-changer").focus();
				$("#button-text-changer").css("bottom", "5px");
			}, 200);

		});

		/*------------------------------------
		This will open the border options
		------------------------------------*/
		/*This will open the border choice for the button*/
		function openChooseButton(o) {

			if(o == 0) {

				$("#choose-button-border").on("tap", function() {

					$(this).css("background-color", "#484848");
					$(this).css("color", "#f3f3f3");
					this.innerHTML = "No Border";

					closeChooseButton(1);

				});

			}
		}

		/*This will close the border choice for the button*/
		function closeChooseButton(c) {

			if(c == 1) {

				$("#choose-button-border").on("tap", function() {

					$(this).css("background-color", "transparent");
					$(this).css("color", "#484848");
					this.innerHTML = "Use Border";

					openChooseButton(0);

				});

			}

		}

		openChooseButton(0);

		/*This will change the font size of the border*/
		/*This will change the font size up*/
		$("#border-font-up-change").on("tap", function() {

			var borderFontPre = document.getElementById("border-font-pre").innerHTML;
			var borderFontPreInt = parseInt(borderFontPre);
			borderFontPreInt++;

			if(borderFontPreInt < 31) {

				document.getElementById("border-font-pre").innerHTML = borderFontPreInt;

			}

		});

		/*This will change the font size down*/
		$("#border-font-down-change").on("tap", function() {

			var borderFontPre = document.getElementById("border-font-pre").innerHTML;
			var borderFontPreInt = parseInt(borderFontPre);
			borderFontPreInt--;

			if(borderFontPreInt > 9) {

				document.getElementById("border-font-pre").innerHTML = borderFontPreInt;

			}

		});

		/*This section is where you type the text for
		the web link*/
		$("#web-link-section").on("tap", function() {

			setTimeout(function() {
				$("#web-link-text-area").focus();
				$("#web-link-text-changer").css("bottom", "5px");
			}, 200);

		});

		/*This will close the individual section tools by clicking
		the acutal head section or close indicator*/
		for(var i = 0; i < closeIndicator.length; i++) {
			$(closeIndicator[i]).on("tap", function() {

				var n = closeIndicatorA.indexOf(this);

				$(secTool[n]).css("height", "3em");
				closeIndicator[n].setAttribute("src", "open.png");

				setTimeout(function() {

					$(closeIndicator[n]).css("display", "none");
					$(openIndicator[n]).css("display", "block");
					$(closeDiv[n]).css("display", "none");

				}, 100);

			});
		}

		for(var i = 0; i < closeDiv.length; i++) {
			$(closeDiv[i]).on("tap", function() {

				var n = closeDivA.indexOf(this);

				$(secTool[n]).css("height", "3em");
				closeIndicator[n].setAttribute("src", "open.png");

				setTimeout(function() {

					$(closeIndicator[n]).css("display", "none");
					$(openIndicator[n]).css("display", "block");
					$(closeDiv[n]).css("display", "none");

				}, 100);

			});
		}

		/*----------------------------------------------
		----------------------------------------------
		This will open the learn description by changing the
		editor options height
		----------------------------------------------
		----------------------------------------------*/
		/*This will open the learn section*/
		var learn = $(".learn");
		var learnA = new Array();

		fillArray(learnA, learn);

		//editor options is where the description
		//is stored
		var editorOption = $(".editor-option");

		//This is the learn description, and 
		//will appear when the learn button is
		//is clicked
		var learnDesc = $(".learn-desc");

		for(var i = 0; i < learn.length; i++) {
			$(learn[i]).on("tap", function() {

				var n = learnA.indexOf(this);
				$(editorInterior[n]).css("margin-left", "-12em");
				$(editorOption[n]).css("height", "auto");

			});
		}

		/*----------------------------------------------
		----------------------------------------------
		This will close the learning section of the 
		editor
		----------------------------------------------
		----------------------------------------------*/
		/*This will grab the close learn button to close 
		the other information*/
		var closeLearn = $(".close-learn");
		var closeLearnA = new Array();

		fillArray(closeLearnA, closeLearn);

		//This is the close code for learn
		for(var i = 0; i < closeLearn.length; i++) {
			$(closeLearn[i]).on("tap", function() {

				var n = closeLearnA.indexOf(this);
				$(editorInterior[n]).css("margin-left", "-8em");
				$(editorOption[n]).css("height", "4em");

			});
		}

		/*This will be the bottom selection. It will have the close
		settings, save, publish, and menu button*/

		/*----------------------------------------------
		----------------------------------------------
		This is the open and close function for the whole
		editor
		----------------------------------------------
		----------------------------------------------*/

		/*This is the open close function for the editor*/
		var open = 0;

		/*This will be the variables for the editor*/
		var editorMenu = $(".editor-menu");
		var editorMenuA = new Array();

		fillArray(editorMenuA, editorMenu);

		/*----------------------------------------
		This is the opening function for the entire
		editor
		----------------------------------------*/
		function openEditor(o) {

			if(o == 0) {

				$(editorMenu[0]).on("tap", function() {

					var editorImg = $(editorMenu[0]).children();
					editorImg[0].setAttribute("src", "img/closeButton.png");
					$("#editor-ext").css("height", "100vh");
					open = 1;
					closeEditor(open);

				});

			}

		}

		/*----------------------------------------
		This is the closing function for the entire
		editor
		----------------------------------------*/
		function closeEditor(c) {

			if(c == 1) {

				$(editorMenu[0]).on("tap", function() {

					var editorImg = $(editorMenu[0]).children();
					editorImg[0].setAttribute("src", "img/power.png");
					$("#editor-ext").css("height", "0vh");
					open = 0;
					openEditor(open);

				});

			}

		}

		/*----------------------------------------
		This will start the opening editor
		----------------------------------------*/
		openEditor(open);
	
	} 	

}