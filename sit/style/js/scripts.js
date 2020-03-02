/*-----------------------------------------------------------------------------------*/
/*	STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
"use strict";
    var menu = $('.navbar'),
        pos = menu.offset();

    $(window).scroll(function () {
        if ($(this).scrollTop() > pos.top + menu.height() && menu.hasClass('default') && $(this).scrollTop() > 150) {
            menu.fadeOut('fast', function () {
                $(this).removeClass('default').addClass('fixed').fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= pos.top + 150 && menu.hasClass('fixed')) {
            menu.fadeOut(0, function () {
                $(this).removeClass('fixed').addClass('default').fadeIn(0);
            });
        }
    });

});
$(document).ready(function() {
"use strict";
	$('.offset').css('padding-top', $('.navbar').height() + 'px');
       
}); 
$(window).resize(function() {
"use strict";
	$('.offset').css('padding-top', $('.navbar').height() + 'px');        
}); 
/*-----------------------------------------------------------------------------------*/
/*	OWL CAROUSEL
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
"use strict";    
     $(".owlcarousel").owlCarousel({
        navigation: true,
        navigationText : ['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],
        pagination: false,
        rewindNav: false,
        items: 3,
        mouseDrag: true,
        itemsDesktop: [1200, 3],
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [970, 2],
        itemsMobile: [767, 1]
    });

    $(".owl-clients").owlCarousel({

        autoPlay: 9000,
        rewindNav: false,
        items: 6,
        itemsDesktop: [1200, 6],
        itemsDesktopSmall: [1024, 5],
        itemsTablet: [768, 3],
        itemsMobile: [480, 2],
        navigation: false,
        pagination: false

    });
    
    var owl = $(".owl-portfolio-slider");

    owl.owlCarousel({
        navigation: false,
        autoHeight: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    // Custom Navigation Events
    $(".slider-next").click(function () {
        owl.trigger('owl.next');
    })
    $(".slider-prev").click(function () {
        owl.trigger('owl.prev');
    })
    

});
/*-----------------------------------------------------------------------------------*/
/*	FANCYBOX
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
"use strict";
    $(".fancybox-media").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: {
                width: 50,
                height: 50
            },
            title: {
                type: 'inside'
            }
        },
        beforeLoad: function () {
            var el, id = $(this.element).data('title-id');
            if (id) {
                el = $('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });
});
/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
		$(window).load(function() { // makes sure the whole site is loaded
		"use strict";
			$('#status').fadeOut(); // will first fade out the loading animation
			$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(350).css({'overflow':'visible'});
		})
/*-----------------------------------------------------------------------------------*/
/*	TESTIMONIALS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
"use strict";
    $('#testimonials').easytabs({
        animationSpeed: 500,
        updateHash: false,
        cycle: 5000
    });

});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE FULLSCREEN PORTFOLIO
/*-----------------------------------------------------------------------------------*/

var isotopeBreakpoints = [
                            { min_width: 1680, columns: 5 },
                            { min_width: 1440, max_width: 1680, columns: 5 },
                            { min_width: 1024, max_width: 1440, columns: 4 },
                            { min_width: 768, max_width: 1024, columns: 3 },
                            { max_width: 768, columns: 1 }
                            
                         ];

$(document).ready(function () {
"use strict";
    var $container = $('.full-portfolio .items');

    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });
    });

    // hook to window resize to resize the portfolio items for fluidity / responsiveness
    $(window).smartresize(function() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        for ( var i = 0; i < isotopeBreakpoints.length; i++ ) {
            if (windowWidth >= isotopeBreakpoints[i].min_width || !isotopeBreakpoints[i].min_width) {
                if (windowWidth < isotopeBreakpoints[i].max_width || !isotopeBreakpoints[i].max_width) {
                    $container.find('.item').each(function() {
                        $(this).width( Math.floor( $container.width() / isotopeBreakpoints[i].columns ) );
                    });

                    break;
                }
            }
        }
    });

    $(window).trigger( 'smartresize' );


    $('.filter li a').click(function () {

        $('.filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });

        return false;
    });
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE CLASSIC PORTFOLIO
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
"use strict";
    var $container = $('.fix-portfolio .items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.fix-portfolio .item',
            layoutMode: 'fitRows'
        });
    });

    $('.fix-portfolio .filter li a').click(function () {

        $('.fix-portfolio .filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });

        return false;
    });
});
/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
"use strict";
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();


    $('.dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input').click(function (e) {
        e.stopPropagation();
    });

});
/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function ($) {
"use strict";
    $('.forms').dcSlickForms();
});
$(document).ready(function () {
"use strict";
    $('.comment-form input[title], .comment-form textarea').each(function () {
        if ($(this).val() === '') {
            $(this).val($(this).attr('title'));
        }

        $(this).focus(function () {
            if ($(this).val() == $(this).attr('title')) {
                $(this).val('').addClass('focused');
            }
        });
        $(this).blur(function () {
            if ($(this).val() === '') {
                $(this).val($(this).attr('title')).removeClass('focused');
            }
        });
    });
});
/*-----------------------------------------------------------------------------------*/
/*	IMAGE ICON HOVER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
"use strict";
    $('.icon-overlay a').prepend('<span class="icn-more"></span>');
});
/*-----------------------------------------------------------------------------------*/
/*	PARALLAX MOBILE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
"use strict";
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
});
/*-----------------------------------------------------------------------------------*/
/*	TABS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
"use strict";
    $('.tabs.services').easytabs({
        animationSpeed: 300,
        updateHash: false,
        cycle: 5000
    });
});
$(document).ready(function () {
"use strict";
    $('.tabs.tabs-top, .tabs.tabs-side').easytabs({
        animationSpeed: 300,
        updateHash: false
    });
});
/*-----------------------------------------------------------------------------------*/
/*	DATA REL
/*-----------------------------------------------------------------------------------*/
$('a[data-rel]').each(function () {
"use strict";
    $(this).attr('rel', $(this).data('rel'));
});
/*-----------------------------------------------------------------------------------*/
/*	TOOLTIP
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
"use strict";
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }
});
/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";
    jQuery('.player').fitVids();
});
/*-----------------------------------------------------------------------------------*/
/*	PRETTIFY
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";
    window.prettyPrint && prettyPrint()
});
/*-----------------------------------------------------------------------------------*/
/*	REVOLUTION
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
"use strict";
					   jQuery('.banner').revolution(
						{
							delay:9000,
							startwidth:1170,
							startheight:550,
							hideThumbs:10
						});
						
						
						jQuery('.fullwidthbanner').revolution(
						{
							delay: 9000,
				            startwidth: 1170,
				            startheight: 550,
				            hideThumbs: 200,
				            fullWidth: "on"
						});
});