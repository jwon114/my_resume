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
			$('.navbar').css({'position': 'fixed', 'top': '0'});
		} else {
			$('.navbar').css({'position': 'absolute', 'top': '100%'});
		}
	});
}

function navbarScrollSpy() {
	$('body').scrollspy({
		target: '.navbar'
	})
}

function navMenuBar() {
	var navbar_extended_width = $('.navbar_extended').width();

	$('.menu_bars').on('click', function() {
		console.log(navbar_extended_width);

		if ($('.navbar_extended').hasClass('slide-menu-out')) {
			$('.navbar_extended').removeClass('slide-menu-out').addClass('slide-menu-in');
			$('.all_content_container').removeClass('slide-content-container-out').addClass('slide-content-container-in');
			// $('.all_content_container').animate({ left: '199.672px'}, 200)
		} else if ($('.navbar_extended').hasClass('slide-menu-in')) {
			$('.navbar_extended').removeClass('slide-menu-in').addClass('slide-menu-out');
			// $('.all_content_container').animate({ left: '80px'}, 200)
			$('.all_content_container').removeClass('slide-content-container-in').addClass('slide-content-container-out');

		} else {
			$('.navbar_extended').addClass('slide-menu-in');
		}
	});
}

