$(function () {
    $("li").filter(function (index) {
        return index % 3 === 2;
    }).css("background-color", "rgba(180, 120, 30, 0.8)");
});