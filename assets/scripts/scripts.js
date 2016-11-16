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

//PARALLAX
$(window).scroll(function(){
	var scrollPos = $(this).scrollTop();
	$("#cover").css("background-position", "0px " + -scrollPos/4 +"px")
});
