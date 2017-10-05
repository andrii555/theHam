$(function() {
    // Add smooth scrolling on all links inside the navbar
    $("#ham-bs-example a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
    $('.carouselham').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 1000,
        loop: true,
        autoplay: true,
        dots: false,
        touchDrag: false,
        mouseDrag: false

    });
    var searchBtn = $('.activebtn'),
        searchMenu = $('.searchhead');

    searchBtn.on('click', function () {
           searchMenu.toggle()

    });

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    mixitup('.container-mix', {
        animation: {
            effects: 'fade translateZ(-200px)',
            duration: 500
        },
        selectors: {
            control: '[data-mixitup-control]'
        }
    });

    $('ul.tabes li').click(function(){
        var tabs_id = $(this).attr('data-tab');

        $('ul.tabes li').removeClass('currents');
        $('.tab-contents').removeClass('currents');

        $(this).addClass('currents');
        $("#"+tabs_id).addClass('currents');
    });
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager'
    });


    function setAnimation(elem, animationType) {
        $(elem).css('opacity', '0').addClass('animated');
        $(elem).waypoint({
            handler: function(dir) {
                if (dir === 'down') {
                    $(this.element).removeClass('fadeOut').addClass(animationType).css('opacity', '1');
                } else {
                    $(this.element).removeClass(animationType).addClass('fadeOut').css('opacity', '1');
                }
            },
            offset: '100%'
        });
    }


    function initAnimations() {
        setAnimation('.headername', 'zoomIn');
        setAnimation('.ico', 'bounceIn');
        setAnimation('.feature-item', 'zoomInUp');
        setAnimation('.imgbg', 'slideInLeft');
        setAnimation('.center h2', 'slideInUp');
        setAnimation('.center h2 + p', 'slideInUp');
        setAnimation('.icon', 'rubberBand');
        setAnimation('.news', 'zoomIn');
        setAnimation('.cols', 'zoomIn');
        setAnimation('.ourteam', 'pulse');
        setAnimation('.mapp', 'fadeIn');
    }

    initAnimations();

    $(window).on('resize', function() {
        initAnimations();
    });


// http://inorganik.github.io/countUp.js/
    function setAnimatedCounter(elem) {
        var counterObj = new CountUp(elem, 0, $('#'+elem).text(), 0, 2);
        if (counterObj.error) return console.error(counterObj.error);

        $('#'+elem).waypoint({
            handler: function(dir) {
                if (dir === 'down') {
                    counterObj.start();
                } else {
                    counterObj.reset();
                }
            },
            offset: '100%'
        });
    }

    setAnimatedCounter('work-counter');
    setAnimatedCounter('customer-counter');
    setAnimatedCounter('purchase-counter');
    setAnimatedCounter('office-counter');

});



$(window).on('load', function() {
    $('.cssload-squeeze span').fadeOut(1600);
    $('.cssload-squeeze').delay(400).fadeOut(3000);
});


