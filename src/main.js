$(document).ready(function(){

    "use strict";
    
    //MegaLogo fit and shrink
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.navbar-brand').addClass('fit');
            $('#backToTop').show('1000');
        } else {
            $('.navbar-brand').removeClass('fit');
            $('#backToTop').hide();
        }
    });


    //Close dropdown menu on click
    $('.dropdown').on('click', function(){
        if($('.dropdown-toggle').hasClass('active')){
            $('.dropdown-toggle').removeClass('active');
        }
    }); 
    

    //Open mobile menu on click
    $('.navbar-toggler').on('click', () => {
        var target = $('.navbar-toggler').data('bs-target');
        $(target).toggleClass('show');
    });

    //Add on click active link to main menu
    $('.nav-link').on('click', function(){
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    //Collapse mobile menu after click
    $('.nav-item').on('click', function(){

        if($('.navbar-collapse').hasClass('show') && !$(this).hasClass('dropdown'))
        {
            $('.navbar-collapse').removeClass('show');
        }
        else if($(this).hasClass('dropdown'))
        {
            if ($(window).width() < 999) {
                $('.dropdown-menu').toggleClass('show');
            }

        }
    });

    //Confirm download CV
    $('#cvbutton').on('click', function(){
        return confirm('Jako vážně ???');
    });

    //Back To Top button
    $('#backToTop').on('click', () => {
        $('body, html').animate({
            scrollTop: 0
        }, 500)
    });


});