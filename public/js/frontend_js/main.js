
$().ready(function() {
    // validate signup form on keyup and submit
    $("#signupForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                lettersonly: true
            },
            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
                required: true,
                minlength: 6,
                equalTo: "#user_password"
            },
            email: {
                required: true,
                email: true,
                remote: "/check-email"
            },
            agree: "required"
        },
        messages: {
            name: "Please enter your Name",
            email: {
                required: "Please enter your Email",
                email: "Please enter valid Email",
                remote: "Email already Exist"
            },
            password: {
                required: "Please provide your password",
                minlength: "Your password must be at least 6 characters long"
            },
            confirm_password: {
                required: "Please confirm your password",
                minlength: "Your Password must be at least 6 characters long",
                equalTo: "Please enter the same Password as above"
            },
            agree: "Please accept our policy",
        }
    });

     // validate signup form on keyup and submit
     $("#datingForm").validate({
        rules: {
            dob: {
                required: true,
            },
            gender: {
                required: true,
            },
            height: {
                required: true,
            },
            marital_status: {
                required: true,
            },
            about_myself: {
                required: true,
                minlength: 20
            },
            about_partner: {
                required: true,
                minlength: 20
            },
        },
        messages: {
            dob: "Please enter your Date of Birth",
            gender: "Please Select Your Gender",
            height: "Please Select Your Height",
            marital_status: "Please enter your marital status",
            about_myself: {
                required: "Please provide your details",
                minlength: "Your password must be at least 20 characters long"
            },
            about_partner: {
                required: "Please provide your partner details",
                minlength: "Your password must be at least 20 characters long"
            },
        }
    });

    $('#user_password').keyup(function(e) {
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        if (false == enoughRegex.test($(this).val())) {
                $('#passstrength').html('More Characters');
        } else if (strongRegex.test($(this).val())) {
                $('#passstrength').className = 'ok';
                $('#passstrength').html('Strong!');
        } else if (mediumRegex.test($(this).val())) {
                $('#passstrength').className = 'alert';
                $('#passstrength').html('Medium!');
        } else {
                $('#passstrength').className = 'error';
                $('#passstrength').html('Weak!');
        }
        return true;
   });
   
});