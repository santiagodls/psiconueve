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
	$("body").scroll(function(){
		var scrollPos = $("main").offset().top,
				headerH = $("header").innerHeight(),
				newPos = Math.abs(scrollPos-headerH);
		$("#cover").css("background-position", "0px " + -newPos/2 +"px")
	});
})

//LIVERELOAD KEEP SCROLL
$(function(){
	$("body").scroll(function(){
		var scroll = "?"+$("body").scrollTop();
		window.history.pushState("", "" , scroll);
	})
	var match = window.location.href.split("?")[1];
	$('html, body').scrollTop( match );
});
