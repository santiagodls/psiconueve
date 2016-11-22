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
	$('.jarallax').jarallax({
		speed: 0.5,
		noAndroid: true
	});
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	var isEdge = !isIE && !!window.StyleMedia;
	if (isIE || isEdge) {
		$(".jarallax").addClass("ms").jarallax("destroy");
	}
});

//LIVERELOAD KEEP SCROLL
var timer;
$(function(){
	$(window).scroll(function(){
		if(timer) {
			window.clearTimeout(timer);
		}
		timer = window.setTimeout(function(){
			var scroll = "?"+$(window).scrollTop();
			window.history.pushState("", "" , scroll);
		}, 100);
	});
	var match = window.location.href.split("?")[1];
	$('html, body').scrollTop( match );
});
