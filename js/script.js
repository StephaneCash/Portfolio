$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass('sticky');
            $(".menu li a").addClass('scrll');
            $('.logo a span').addClass('scrll');
        } else {
            $(".navbar").removeClass('sticky');
            $(".menu li a").removeClass('scrll');
            $('.logo a span').removeClass('scrll');
        }
        if(this.scrollY > 500){
            $(".scroll-up-btn").addClass('show');
        }else{
            $(".scroll-up-btn").removeClass('show');
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});