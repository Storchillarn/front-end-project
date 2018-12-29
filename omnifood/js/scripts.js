$(document).ready(function() {
    
    /* Sticky navigation display and fade in effect for features section*/
    $('.js--section-features').waypoint(function(direction) {
       if (direction  == 'down') {
           $('nav').addClass('sticky-nav');
           $('.box').children().addClass('animated fadeIn');
       } else {
           $('nav').removeClass('sticky-nav');
       }
    }, {
        offset: '7%'
    });
    
    /* Fade in effect added to Locations section */
    $('.js--section-locations').waypoint(function() {
        $('.js--section-locations').children().addClass('animated fadeInUp');
    }, {
        offset: '30%'
    });
    
    /* Animation to pricing section */
    $('.js--section-pricing').waypoint(function() {
        $('.js--price-box').addClass('animated pulse');
    }, {
        offset: '15%'
    });
    
    /* Animation to how-to-section phone image */
    $('.js--section-how-it-works').waypoint(function() {
        $('.js--app-image').addClass('animated slideInUp');
    }, {
        offset: '15%'
    });
    
    /* Scrolling effect when clicking header CTA's */
    $('.js--scroll-to-pricing').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-pricing').offset().top}, 1000) 
    });
    $('.js--scroll-to-features').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });

    /* Make anchor links scroll smoothly */
    $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
            }
        }
    });
    
    
});