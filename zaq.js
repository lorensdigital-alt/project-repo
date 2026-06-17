$(document).ready(function () {

    let students = [];

    $("#registerForm").submit(function (event) {

        event.preventDefault();

        let fullname = $("#fullname").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let gender = $("input[name='gender']:checked").val();
        let course = $("#course").val();

        if (password !== confirmPassword) {

            $("#message")
                .css("color", "red")
                .text("Passwords do not match!");

            return;
        }

        let student = {
            fullname,
            email,
            gender,
            course
        };

        students.push(student);

        $("#message")
            .css("color", "green")
            .text("Registration Successful!");

        console.log(students);

        $("#registerForm")[0].reset();
    });

});