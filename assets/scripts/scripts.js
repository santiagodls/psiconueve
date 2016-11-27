//DOM INSERTIONS
$(function(){
	//bkg's for nav05
	var source = $("#equipo-fundador li");
	if(source.length > 0) {
		source.each(function(i,e){
			var e = $(e),
			name = e.find("h2").text(),
			output = name.split(/\s+/).slice(0,2).join("");
			e.append("<i class='bkg'>"+output+"</i>");
		});
	}
});

//CORRECTIONS
$(function(){
	if($("#formularios").length > 0) {
		$("html, body").scrollTop(0);
	}
});

//ACTIONS
$(function(){
	$(".menu-launcher").click(function(){
		$(".menu-launcher, #menu-fs, #quotes, header").toggleClass("active");
		$("body").toggleClass("no-scroll");
		if ($("#quotes").hasClass("active")) {
			quoteRotator();
		}
		else {
			clearInterval(quoteInterval);
		}
	});
	$("#menu-options li").click(function(){
		var link = $(this).children().attr("href");
		location.href = link;
	})
	var goPos = parseInt($(".go-top").css("top"));
	$(".go-top").click(function(){
		$("html, body").animate({scrollTop: 0}, 750, "easeInOutExpo");
	});
});

//ANIMATIONS
var textInterval;
var quoteInterval;
function textRotator() {
	textInterval = setInterval(function(){
		rotator("dinamic-end b");
	}, 3500);
}
function quoteRotator() {
	quoteInterval = setInterval(function(){
		rotator("quotes li");
	}, 5000);
}
function rotator(element) {
	var current = $("#"+element+".visible"),
			first = $("#"+element).first(),
			params = "visible hidden";
	if (current.next().length == 0) {
		current.toggleClass(params);
		first.toggleClass(params);
	}
	else {
		current.toggleClass(params).next().toggleClass(params);
	}
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
