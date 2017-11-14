/*===================*/
/* Custom Javascript */
/*===================*/

$(document).ready(function() {
	scrollClickEvents();
	navbarEvents();
	navbarScrollSpy();
	navMenuBar();
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
			if ($('.navbar_extended').hasClass('slide-menu-in')) {
				$('.navbar_extended').addClass('slide-menu-out');
			}
		}

		// Fixing navbar on scroll
		if ($(window).scrollTop() >= profile_section) {
			$('.navbar').css({'position': 'fixed', 'top': '3%'});
		} else {
			$('.navbar').css({'position': 'absolute', 'top': '103%'});
		}
	});
}

function navbarScrollSpy() {
	$('body').scrollspy({
		target: '.navbar'
	})
}

function navMenuBar() {
	$('.menu_bars').on('click', function() {
		if ($('.navbar_extended').hasClass('slide-menu-out')) {
			$('.navbar_extended').removeClass('slide-menu-out').addClass('slide-menu-in');
		} else if ($('.navbar_extended').hasClass('slide-menu-in')) {
			$('.navbar_extended').removeClass('slide-menu-in').addClass('slide-menu-out');
		} else {
			$('.navbar_extended').addClass('slide-menu-in');
		}
	});
}

