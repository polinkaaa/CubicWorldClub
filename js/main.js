$('.slider-one').slick({
    prevArrow: ".left_arrow, .left_btn",
    nextArrow: ".right_arrow, .right_btn",
    asNavFor: '.slider-two'
});
$('.slider-two').slick({
    prevArrow: ".left_arrow, .left_btn",
    nextArrow: ".right_arrow, .right_btn",
    asNavFor: '.slider-one',
});