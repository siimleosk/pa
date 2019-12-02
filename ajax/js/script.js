$(function () {
    var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickrApiUrl, {
        tags: "sun, beach",
        tagmode: "any",
        format: "json"
    }).done(function (data) {
        console.log(data);
        $.each(data.items, function (index, item) {
            console.log(item);
            $("<img>").attr("src", item.media.m).appendTo("#flickr");
            if (index == 4) {
                return false;
            }
        });
    }).fail(function () {
        alert("Ajax päring ei toimi");
    });
});