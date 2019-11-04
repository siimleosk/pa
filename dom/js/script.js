$(function () {
    var galleryImage = $(".gallery").find("img").first();
    var images = [
        "images/eska.jpg",
        "images/jogi.jpg",
        "images/laptop.jpg"
    ];

    var i = 0;

    setInterval(function () {
        i = (i + 1) % images.length;
        galleryImage.fadeOut(function () {
            $(this).attr("src", images[i]);
            $(this).fadeIn();
        });
        console.log(galleryImage.attr("src"));
    }, 2000);




});