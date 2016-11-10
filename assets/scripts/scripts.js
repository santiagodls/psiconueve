$(function(){
	$(".menu-launcher").click(function(){
		$(".menu-launcher, .menu-fs, header").toggleClass("active");
	})
});
$(window).scroll(function(){
	var scrollPos = $(this).scrollTop();
	$("#portada").css("background-position", "0px " + -scrollPos/4 +"px")
});
