$(function () {
    var inputFields = $("input:text, input:password, textarea");
    inputFields.focus(function () {
        $(this).css("box-shadow", "0 0 14px rgb(163, 0, 0)");

    });
    inputFields.blur(function () {
        $(this).css("box-shadow", "none");
    })
});