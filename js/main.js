var winW = $(document).width();
var winH = $(document).height();

if(winW >= winH) {

	if(winW >= 769) {

		var bodyShadow = $("#box-shadow").height();
		var bodyShadowParse = parseInt(bodyShadow);
		var remain = ((winH - bodyShadowParse) / 2) - 20;

		$("#box-shadow").css("margin-top", remain + "px");

	}

} else {

	if(winW <= 425) {

		var bodyShadow = $("#box-shadow").height();
		var bodyShadowParse = parseInt(bodyShadow);
		var remain = ((winH - bodyShadowParse) / 6) - 20;
		alert(winH);
		alert(bodyShadow);
		alert(remain);

		$("#box-shadow").css("margin-top", remain + "px");

	}

}