function myFunction() {
	// use jQuery ($ is shorthand) to find the div on the page and then change the html
	// jQuery can do a lot of crazy stuff so make sure to google around to find out more

	$('#demo').html('NEWWW PARAGRAPH #javascript #fire');

	// 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
	$('#doge-image').append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
}

// Llamado a la API del clima
/*
$(document).ready(function() {
	getWeather();
});
 */

function getWeather(searchQuery) {
	var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchQuery + '&units=imperial&APPID=' + apiKey;

	$('.city').text(''); // limpia las busquedas realizadas
	$('.temp').text(''); // limpia las busquedas realizadas

	$.ajax(url, {
		success: function(data) {
			$('.city').text(data.name);
			$('.temp').text(data.main.temp);
			$('.error-message').text(''); //limpia el error si es correcto el resultado
		},
		error: function(error) {
			$('.error-message').text('An error occured'); //devuelve error si no encuentra la ciudad
		},
	});
}

function searchWeather() {
	var searchQuery = $('.search').val();
	getWeather(searchQuery);
}
