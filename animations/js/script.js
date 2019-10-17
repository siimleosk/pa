$(function () {
    //* 2000 on 2 sek
    /* $(".red-box").fadeOut(2000);
    $(".red-box").fadeIn(1000);
    $(".blue-box").fadeOut(1000);
    $(".blue-box").fadeIn(2000);
    $(".green-box").fadeToggle();
    $(".green-box").fadeToggle();
    $(".red-box").fadeOut(2000);
    $(".red-box").fadeIn(500);
    $(".red-box").fadeTo(2000, 0.0);
    $(".red-box").fadeTo(1000, 1.0);
    $(".red-box").hide(2000);
    $(".red-box").show(2000);
    $(".red-box").toggle();
    //slaidid
    $(".blue-box").slideUp(2000);
    $(".blue-box").slideDown(2000);
    $(".blue-box").slideToggle(2000);
    $(".blue-box").slideToggle(2000);

    //Animate

    $(".green-box").animate({
        "margin-left": "+=100px"
    }, 2000, "linear");
    $(".green-box").animate({
        "margin-left": "-=100px"
    }, 2000, "linear");

    // DELAY

    $(".red-box").fadeTo(2000, 0.5);
    $(".green-box").delay(2000).fadeTo(2000, 0.5);
    $(".blue-box").delay(4000).fadeTo(2000, 0.5);

    $(".blue-box").fadeTo(2000, 1.0);
    $(".blue-box").delay(8000).fadeTo(2000, 0.5).fadeTo(2000, 1.0).fadeOut();*/


    $('.blue-box').animate({
        "margin-left": "100px"
    }, 2000);

    $('.green-box').delay(2000).animate({
        "margin-left": "100px"
    }, 2000);
    $('.blue-box').animate({
        "margin-left": "-1px"
    }, 2000);

    $('.red-box').delay(4000).animate({
        "margin-left": "100px"
    }, 2000);
    $('.green-box').animate({
        "margin-left": "-0px"
    }, 2000);
    $('.blue-box').animate({
        "margin-left": "-0px"
    }, 2000);

    $('.red-box').animate({
        "margin-left": "-=100px"
    }, 2000);
    $('.green-box').animate({
        "margin-left": "100px"
    }, 2000);

    $('.green-box').animate({
        "margin-left": "-=100px"
    }, 2000);
    $('.blue-box').delay(2000).animate({
        "margin-left": "100px"
    }, 2000);

    $('.blue-box').animate({
        "margin-left": "-=100px"
    }, 2000);




    // $(".lightbox").delay(500).fadeIn(2000);
});