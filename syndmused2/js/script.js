// Funktsioon värvide kohta
$(function () {
    var inputFields = $("input:text, input:password, textarea");

    inputFields.focus(function () {
        $(this).css("box-shadow", "0 0 4px #666");

    });
    inputFields.blur(function () {
        $(this).css("box-shadow", "none");
    });

    $("#name").blur(function () {
        var text = $(this).val();
        if (text.length < 3) {
            $(this).css("box-shadow", "0 0 4px #811");
        } else {
            $(this).css("box-shadow", "0 0 4px #181");
        }
    });
});
// Funktsioon nime valideerimise kohta
function validateNameField(name, event) {
    if (!isValidName(name)) {
        $("#name-feedback").text("Sisesta vähemalt 3 tähemärki!");
        event.preventDefault();
    } else {
        $("#name-feedback").text("");
    }

    function isValidName(name) {
        return name.length >= 3;
    }
};
//Funktsioon parooli valideerimise kohta
function validatePasswordField(password, event) {
    if (!isValidPassword(password)) {
        $("#password-feedback").text("Vähemalt 6 sümbolit!");
        event.preventDefault();
    } else {
        $("#password-feedback").text("");
    }

    function isValidPassword(password) {
        return password.length >= 6;
    }
};
//Funktsioon checkboxi valideerimise kohta
function validateCheckbox(isChecked, event) {
    if (!isChecked) {
        $("#checkbox-feedback").text("Nõustu tingimustega!");
        event.preventDefault();
    } else {
        $("#checkbox-feedback").text("");
    }
};

//Funktsioon tagasisidestamiseks
function enableFastFeedback(formElement) {
    var nameInput = formElement.find("#name");
    var passwordInput = formElement.find("#password");
    var checkboxInput = formElement.find("#checkbox");

    nameInput.blur(function (event) {
        var name = $(this).val();
        validateNameField(name, event);

        if (!isValidName(name)) {
            $(this).css({
                "box-shadow": "0 0 4px #811",
                "border": "1px solid #600"
            });
        } else {
            $(this).css({
                "box-shadow": "0 0 4px #181",
                "border": "1px solid #060"
            });
        }
    });

    passwordInput.blur(function (event) {
        var password = $(this).val();
        validatePasswordField(password, event);

        if (!isValidPassword(password)) {
            $(this).css({
                "box-shadow": "0 0 4px #811",
                "border": "1px solid #600"
            });
        } else {
            $(this).css({
                "box-shadow": "0 0 4px #181",
                "border": "1px solid #060"
            });
        }
    });

    checkboxInput.change(function (event) {
        var isChecked = $(this).is(":checked");
        validateCheckboxField(isChecked, event);

        if (!isChecked) {
            $(this).add("label[for='cb']").css({
                "box-shadow": "0 0 4px #811",
                "border": "1px solid #600"
            });
        } else {
            $(this).add("label[for='cb']").css({
                "box-shadow": "0 0 4px #181",
                "border": "1px solid #060"
            });
        }
    });
}
//Funktsioon vormi valideerimise kohta
$(function () {
    $("#form").submit(function (event) {
        var name = $("#name").val();
        var password = $("#password").val();
        var isChecked = $("#checkbox").is(":checked");

        validateNameField(name, event);
        validatePasswordField(password, event);
        validateCheckbox(isChecked, event);
    });
});