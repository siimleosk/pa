/* $(function () {
     $("#btn-click").click(function () {
         alert("Vajutasid nuppu.");

     });

 });

 $(function () {
     var redBox = $(".red-box");
     var greenBox = $(".green-box");
     var blueBox = $(".blue-box");
     redBox.hover(function () {
         $(this).stop().fadeTo(500, 0.2);
     }, function () {
         $(this).stop().fadeTo(500, 1);
     });
     greenBox.click(function () {
         $(this).fadeTo(500, 0.5);
     });
     blueBox.click(function () {
         $(this).fadeTo(500, 0.8);
     });
 });
*/
$(function () {
    var galleryItems = $(".gallery").find("img");
    galleryItems.css("width", "33%").css("opacity", "1");

    galleryItems.mouseenter(function () {
        $(this).stop().fadeTo(500, 0.7);
    });
    galleryItems.mouseleave(function () {
        $(this).stop().fadeTo(500, 1);
    });
    galleryItems.click(function () {
        var source = $(this).attr("src");
        var image = $("<img>").attr("src", source).css("width", "100%");
        $(".lightbox").empty().append(image).fadeIn(2000);
    });

    $(".lightbox").click(function () {
        $(this).stop().fadeOut();
    });


});