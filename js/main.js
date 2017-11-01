/*===================*/
/* Custom Javascript */
/*===================*/

$(document).ready(function() {
	scrollClickEvents();
	navbarEvents();
});

// Generic function for all clickable navbar buttons
function scrollClickEvents() {
	$('a[href*=\\#]').on('click', function(e) {
		e.preventDefault();

		if (($.attr(this, 'href')).length > 0) {
			$('body, html').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 400);
		}
	});
}

function navbarEvents() {
	$(window).on('scroll', function() {
		var profile_section = $('#profile').offset().top;
		var main_half = ($('#main').offset().top + $('#main').height()) / 2;

		// Sliding navbar in and out animation
		if ($(window).scrollTop() >= main_half) {
			$('.navbar').removeClass('slide-out').addClass('slide-in');
		} else {
			$('.navbar').removeClass('slide-in').addClass('slide-out');
		}

		// Fixing navbar on scroll
		if ($(window).scrollTop() >= profile_section) {
			$('.navbar').css({'position': 'fixed', 'top': '10%'});

		} else {
			$('.navbar').css({'position': 'absolute', 'top': '110%'});
		}
	});
}