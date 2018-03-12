(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
        $('header').toggleClass('overlay');
        $('.menu').toggleClass('show')
        $('.header-text').toggleClass('hide')
	})
})();
