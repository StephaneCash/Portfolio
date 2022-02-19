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
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});