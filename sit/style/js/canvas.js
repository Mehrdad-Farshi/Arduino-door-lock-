/* show/hide slideout (triangle button) */
jQuery('.bonfire-slideout-button, .canvas-text-trigger').click(function(){
	if(jQuery('.bonfire-slideout').hasClass('bonfire-slideout-active'))
	{

		/* enable browser scroll */
		var html = jQuery('html');
		var scrollPosition = html.data('scroll-position');
		html.css('overflow', html.data('previous-overflow'));
		window.scrollTo(scrollPosition[0], scrollPosition[1]);

		/* hide canvas */
		setTimeout(function(){
			jQuery('.bonfire-slideout').removeClass('bonfire-slideout-active');
		},650);
		jQuery('.bonfire-slideout').removeClass('bonfire-slideout-active-translate');

		return false;
	}
	else
	{

		/* disable browser scroll */
		var scrollPosition = [
		self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
		self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
		];
		var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
		html.data('scroll-position', scrollPosition);
		html.data('previous-overflow', html.css('overflow'));
    	html.css('overflow', 'hidden');
		window.scrollTo(scrollPosition[0], scrollPosition[1]);

		/* show canvas */
		jQuery('.bonfire-slideout').addClass('bonfire-slideout-active');
		jQuery('.bonfire-slideout').addClass('bonfire-slideout-active-translate');

		return false;
	}
});

/* hide slideout (X button) */
jQuery('.bonfire-slideout-close').click(
	function() {

		/* enable browser scroll */
		var html = jQuery('html');
		var scrollPosition = html.data('scroll-position');
		html.css('overflow', html.data('previous-overflow'));
		window.scrollTo(scrollPosition[0], scrollPosition[1]);

		/* hide canvas */
		setTimeout(function(){
			jQuery('.bonfire-slideout').removeClass('bonfire-slideout-active');
		},650);
		jQuery('.bonfire-slideout').removeClass('bonfire-slideout-active-translate');

		return false;
});


/* hide slideout (ESC button) */
jQuery(document).keyup(function(e) {
	if (e.keyCode == 27) { 

		/* enable browser scroll */
		var html = jQuery('html');
		var scrollPosition = html.data('scroll-position');
		html.css('overflow', html.data('previous-overflow'));
		window.scrollTo(scrollPosition[0], scrollPosition[1]);

		/* hide canvas */
		setTimeout(function(){
			jQuery('.bonfire-slideout').removeClass('bonfire-slideout-active');
		},650);
		jQuery('.bonfire-slideout').removeClass('bonfire-slideout-active-translate');

		return false;

	}
});