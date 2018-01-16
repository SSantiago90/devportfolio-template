(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Detect device for whatsapp href
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.wsp').attr("href",'tel:+543434522996');
    }

    // Animate to section when nav is clicked
    $('header a').click(function(e) {
        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });    

    // Scroll to first element
    $('#lead-down span, #lead-down-hero span').click(function() {
        var span = $(this);
        var scrollDistance = $(span.attr('data-next')).next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });   

    // Popup Modal
    $(".js-pop").on("click", function() {
        var imgsrc = $(this).find('img').attr('src')
        if ($(this).hasClass('big')){
           // here asign the image to the modal when the user click the enlarge link
           $('#imagepreview').attr('src', imgsrc); 
           // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
           $('#imagemodal').modal('show'); 
       }
       else{
           $('#imagepreviewbig').attr('src', imgsrc); 
           // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
           $('#imagemodalbig').modal('show'); 
       }
    });

    //Shorten function 
    var resize_text = function(w){ 
        if(w<768){
            $(".trunc").shorten({
                "showChars" : 160
            });
        }
    };

    //shorten text if small device ON LOAD - browser friendly
    var w = $(window).width();
    resize_text(w);
    //shorten text on RESIZE window - uses jquery
    $(window).resize(function(){
        resize_text($(window).width());
    });    
})(jQuery);                       