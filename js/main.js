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
});