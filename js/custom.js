$(document).ready(function() {
    var winH = $(window).height();
    var winW = $(window).width();
    // $('.director_submenu').hide();
    // $('.submenu li a.prett').click(function() {
    //     $('.director_submenu').toggle();
    // });
    $('.submenu li a.prett').click(function() {
        $('.director_submenu').slideUp();
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.submenu li a.prett').removeClass('open');
            $(this).siblings().removeClass('open');

            $(this).find('.director_submenu').slideUp();
        } else {
            $('.submenu li a.prett').removeClass('open');
            $(this).next('.director_submenu').slideDown();
            $(this).addClass('open');
        }

    });




    $('.research_slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    //navigation js starts
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $(".menu").addClass('navbar-fixed-top');
            $('.center-nav img').attr('src', 'images/career-logo.png');

        } else {
            $(".menu").removeClass('navbar-fixed-top');
            $('.center-nav img').attr('src', 'images/logo.png');
            if ($('.menu.career-page').length > 0) {
                $('.center-nav img').attr('src', 'images/career-logo.png');
            }
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $(".navbar").addClass('navbar-fixed-top');
        } else {
            $(".navbar").removeClass('navbar-fixed-top');
        }
    });
    if ($('.menu.career-page').length > 0) {
        $('.center-nav img').attr('src', 'images/career-logo.png');
    }
    //navigation js ends
    $('.form-input input').click(function() {
        $('.form-input label').css("font-size", '12px');
    });

    developSlider();
    parterSlider()
    $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
        setTimeout(function() {
            developSlider();
            parterSlider();
        }, 500)
    });

    function developSlider() {
        $('.develop_crousel').slick({
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 20000,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 1008,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });
    }

    function parterSlider() {
        $('.partners-logo').slick({
            infinite: true,
            dots: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 1008,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });
    }
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $('.develop_crousel').slick('setPosition');
    });
    $("#one").click(function() {
        $('.develop_crousel').slick('refresh');
        $('.develop_crousel').slick('setPosition');
    });

    $("#two").click(function() {
        $('.develop_crousel').slick('refresh');
    });

    $("#three").click(function() {
        $('.develop_crousel').slick('refresh');
    });
    $("#tab1").click(function() {
        $('.partners-logo').slick('refresh');
    });

    $("#tab2").click(function() {
        $('.partners-logo').slick('refresh');
    });

    $("#tab3").click(function() {
        $('.partners-logo').slick('refresh');
    });
});