//LAUNCHERS
$(function(){
	$(".menu-launcher").click(function(){
		$(".menu-launcher, .menu-fs, header").toggleClass("active");
	})
});

//ANIMATION
function textRotator() {
	var current = $("#dinamic-end b.visible"),
			first = $("#dinamic-end b").first(),
			params = "visible hidden";
	if (current.next().length == 0) {
		current.toggleClass(params);
		first.toggleClass(params);
	}
	else {
		current.toggleClass(params).next().toggleClass(params);
	}
	setTimeout(textRotator, 3500);
}
textRotator();

// PARALLAX
$(function(){
	var element = $(".parallax");
	$("body").scroll(function(){
		if(element.length > 0){
			calculatePosition(element);
		}
	});
	if(element.length > 0){
		calculatePosition(element);
	}
});
function calculatePosition(element) {
	element.each(function(i,e){
		var wHeight = window.innerHeight,
				offset = $(e).offset().top,
				scrollPos = $("body").scrollTop(),
				height = $(e).outerHeight(),
				bottom = (height+offset) - wHeight;
		//if is visible
		if (offset <= wHeight && offset >= -height) {
			bkgPosition($(e), bottom);
		}
	});
}
function bkgPosition(el, pos) {
	var x = el.data("x");
	el.css("background-position", x+" " + pos/2 +"px");
}

//LIVERELOAD KEEP SCROLL
$(function(){
	$("body").scroll(function(){
		var scroll = "?"+$("body").scrollTop();
		window.history.pushState("", "" , scroll);
	})
	var match = window.location.href.split("?")[1];
	$('html, body').scrollTop( match );
});
