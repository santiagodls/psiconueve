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
	//menu
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
	//go top
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

//FORMS
$(function(){
	//pass select value
	selectedValue();
	$("#formulario-consultar select").change(function(){
		selectedValue();
	});

	//handle submit
	$("#contactar, #consultar").click(function(){
		var value = $(this).attr("value").toLowerCase(),
		form = $("#formulario-"+value),
		message = form.serialize(),
		requireds = form.find("input, textarea, select").filter("[required]"),
		status;
		//Act normal if empty required
		requireds.each(function(i, e){
			if($(e).val() == "") {
				status = true;
				return;
			}
		});
		if (status == true) {
			return;
		}
		//else continue to ajax
		$.ajax({
			url: "https://formspree.io/info@psiconueve.es",
			method: "POST",
			data: message,
			dataType: "json",
			beforeSend: function() {
				form.append('<div id="form-popups"><div class="cssload-thecube"><div class="cssload-cube cssload-c1"></div><div class="cssload-cube cssload-c2"></div><div class="cssload-cube cssload-c4"></div><div class="cssload-cube cssload-c3"></div></div></div>');
				$("body").addClass("no-scroll-modal");
			},
			success: function(data) {
				var wrapper = $("#form-popups");
				wrapper.find('.cssload-thecube').remove();
				wrapper.append('<div class="alert success"><b>Mensaje enviado correctamente!</b><br> Intentaremos responderle en la brevedad</div>');
				removeWrapper(form);
				form[0].reset();
			},
			error: function(err) {
				var wrapper = $("#form-popups");
				wrapper.find('.cssload-thecube').remove();
				wrapper.append('<div class="alert error">Hubo un problema, revisa el formulario...</div>');
				console.log(err)
				removeWrapper(form);
			}
		});
		return false;
	});
});
function removeWrapper(form) {
	$("#form-popups").delay(2000).animate({opacity: 0}, 500, function(){
		$(this).remove();
	});
	$("body").removeClass("no-scroll-modal");
}
function selectedValue() {
	var select = $("#formulario-consultar select"),
			selectTarget = $("#select-target");
	selectTarget.attr("name", select.find(":selected").attr("value"));
}
