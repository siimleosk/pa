$(function () {
    var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne";
    $.getJSON(flickrApiUrl, {
        tags: "sun, beach",
        tagmode: "any",
        format: "json"
    }).done(function (data) {
        console.log(data);
    }).fail(function () {
        alert("Ajax päring ei toimi");
    });
})