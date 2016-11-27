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
