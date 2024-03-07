import $ from "jquery";

$(() => {
    $.validator.addMethod(
        "phoneValidation",
        function (value, element) {
            return this.optional(element) || /\+\d{5,}/.test(value);
        },
        "Invalid phone number."
    );
});

export default function formValidation(form) {
    $(form).validate({
        rules: {
            phone1: {
                phoneValidation: true,
            },
            phone2: {
                phoneValidation: true,
            },
            text: {
                required: true,
            },
        },
        messages: {
            phone1: {
                phoneValidation: "Invalid phone number",
            },
            phone2: {
                phoneValidation: "Invalid phone number",
            },
            text: {
                required: "Поле ввода не должно быть пустым!",
            },
        },
        submitHandler: (form) => {
            console.log(form);
            $("#successMessage").removeAttr("style").addClass("fade-in");
            $(form).addClass("fade-out");
            $(form).on("submit", (e) => {
                e.preventDefault();
            });
        },
    });
}
