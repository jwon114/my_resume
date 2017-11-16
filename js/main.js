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
		var navbar = $('.navbar');
		var navbar_extended = $('.navbar_extended');
		var navbar_extended_left = $('.navbar_extended').css('left');
		var content_slider_container = $('.content_slider_container');

		// Sliding navbar in and out animation
		if ($(window).scrollTop() >= main_half) {
			if ($(window).width() > '768' ) {
				TweenLite.to(navbar, 0.5, { left: 0 });
			} else {
				// Responsive Nav animation
			}
		} else {
			if ($(window).width() > '768') {
				TweenLite.to(navbar, 0.5, { left: '-' + navbar.width() });
				if (navbar_extended_left === '0px') {
					TweenLite.to(navbar_extended, 0.5, { left: '-' + navbar_extended.width() })
					TweenLite.to(content_slider_container, 0.5, { x: 0 });
				} 
			} else {
				// Responsive Nav animation
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
	var navbar_extended = $('.navbar_extended');
	var content_slider_container = $('.content_slider_container');
	var open = false;

	$('.menu_bars').on('click', function() {
		if (!open) {
			TweenLite.to(navbar_extended, 0.5, { left: 0 });
			TweenLite.to(content_slider_container, 0.5, { x: navbar_extended.width() });
			open = true;
		} else {
			TweenLite.to(navbar_extended, 0.5, { left: '-' + navbar_extended.width() });
			TweenLite.to(content_slider_container, 0.5, { x: 0 });
			open = false;
		}
	});
}

