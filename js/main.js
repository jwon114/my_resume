/*===================*/
/* Custom Javascript */
/*===================*/

$(document).ready(function() {
	scrollClickEvents();
	fixedNavbarEvent();
});

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

function fixedNavbarEvent() {
	$(window).on('scroll', function() {
		var profile_section = $('#profile').offset().top;
		var main_half = ($('#main').offset().top + $('#main').height()) / 2;

		if ($(window).scrollTop() >= main_half) {
			$('.navbar').removeClass('slide-out').addClass('slide-in');
		} else {
			$('.navbar').removeClass('slide-in').addClass('slide-out');
		}

		if ($(window).scrollTop() >= profile_section) {
			$('.navbar').css('position', 'fixed');
		} else {
			$('.navbar').css('position', 'relative');
		}
	});
}