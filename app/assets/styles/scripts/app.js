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

    }, {
        offset: '40px;'
    });
	
});









