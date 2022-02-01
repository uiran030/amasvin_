//슬릭슬라이더구역
$('.centerInner').slick({
    autoplay:true,
    autoplaySpeed:2000,
    speed:500,
    arrow:true,
    prevArrow:'<button class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow : '<button class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>',
    dots:true,
    fade:true
})

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct>300 && !$('.micenter').hasClass('op')) {
        $('.micenter').addClass('op')
        $('#center .micenter .micenterimg').css({opacity:'0'}).animate({opacity:'1'}, 2000)
    }
})