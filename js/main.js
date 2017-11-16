/*===================*/
/* Custom Javascript */
/*===================*/

$(document).ready(function() {
	scrollClickEvents();
	navbarEvents();
	navbarScrollSpy();
	navMenuBar();
	changeFontAwesomeIcons();
});

// Generic function for all clickable navbar buttons
function scrollClickEvents() {
	$('a[href*=\\#]').on('click', function(e) {
		e.preventDefault();

		if (($.attr(this, 'href')).length > 0) {
			TweenLite.to(window, 1, { scrollTo: $.attr(this, 'href') })
			// $('body, html').animate({
			// 	scrollTop: $($.attr(this, 'href')).offset().top
			// }, 400);
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

	// Collapse nav when clicked in responsive mode
	$('.navbar-collapse ul li a').on('click', function() {
		if ($(window).width() <= '768') {
			// ALTERNATIVE METHOD, USES THE COLLAPSING BOOTSTRAP ANIMATION IN TRANSITION
			// $('.navbar-toggle').click();
			$('.navbar-collapse.nav_main').removeClass('in')
			$('.navbar-collapse.nav_main').attr('aria-expanded', 'false');
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

function changeFontAwesomeIcons() {
	if ($(window).width() <= 480) {
		$('.list_items li i').each(function() {
			$(this).removeClass('fa-5x').addClass('fa-3x');
		})
	} else {
		$('.list_items li i').each(function() {
			$(this).removeClass('fa-3x').addClass('fa-5x');
		})
	}
}

