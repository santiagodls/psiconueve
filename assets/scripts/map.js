var map;
$(function(){
	if($(".nav08").length > 0) {
		var mapOptions = {
				center: new google.maps.LatLng(40.44418,-3.696223),
				zoom: 16,
				zoomControl: true,
				zoomControlOptions: {
						style: google.maps.ZoomControlStyle.SMALL,
				},
				disableDoubleClickZoom: true,
				mapTypeControl: false,
				scaleControl: false,
				scrollwheel: false,
				panControl: true,
				streetViewControl: false,
				draggable : true,
				overviewMapControl: true,
				overviewMapControlOptions: {
						opened: true,
				},
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}],
		}
		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var locations = [
			['PsicoNueve', 'C/María de Guzmán 61, Madrid', '695642851', 'info@psiconueve.es', 'psiconueve.es', 40.4440553, -3.6962432, 'https://mapbuildr.com/assets/img/markers/solid-pin-blue.png']
		];
		for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
					 if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
					 if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
						marker = new google.maps.Marker({
								icon: markericon,
								position: new google.maps.LatLng(locations[i][5], locations[i][6]),
								map: map,
								title: locations[i][0],
								desc: description,
								tel: telephone,
								email: email,
								web: web
						});
			link = '';
			bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
		}
		function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
			var html = "<div><h4>"+title+"</h4><p>"+description+"</p></div>";
			var infowindow = new google.maps.InfoWindow({
				content: html
			});
			infowindow.open(map, marker);
			google.maps.event.addListener(marker, "click", function() {
				infowindow.setContent(html);
				infowindow.open(map, this);
			});
		}
	}
});
