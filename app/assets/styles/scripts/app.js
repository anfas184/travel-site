$(document).ready(function () {

	$('.site-header__menu-icon').click(function () {
		$(".site-header").toggleClass("site-header--is-expanded");
		$(".site-header__menu-content").toggleClass("site-header__menu-content--is-visible");
		$(".site-header__menu-icon").toggleClass("site-header__menu-icon--close-x");
	});
	//reveal header on scroll
	
	   /*  for the sticky navigation  */
    $('.large-hero__title').waypoint(function (direction) {

        if (direction == "down") {
            $('.site-header').addClass('site-header--dark');
        } else {
            $('.site-header').removeClass('site-header--dark');
        }
    },{
        offset: '40px;'
    });
	
});




    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });






