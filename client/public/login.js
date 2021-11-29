$(document).ready(function () {

    'use strict';

    var usernameError = true;
    var passwordError = true;

    // Label effect
    $('input').focus(function () {
        $(this).siblings('label').addClass('active');
    });

    // Form validation
    $('input').blur(function () {
        // User Name
        if ($(this).hasClass('name')) {
            if ($(this).val().length === 0) {
                $(this).siblings('span.error').text('').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            }else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                usernameError = false;
            }
        }

        // PassWord
        if ($(this).hasClass('pass')) {
          if ($(this).val().length === 0) {
              $(this).siblings('span.error').text('').fadeIn().parent('.form-group').addClass('hasError');
              passwordError = true;
          }else {
              $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
              passwordError = false;
          }
        }

        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });


    // form switch
    $('a.login_switch').click(function (e) {
      $(this).toggleClass('active');
      $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
    });

    // Form submit
    const regisButton = document.body.querySelector("#register");

    regisButton.addEventListener('click', ()=>{
        if (usernameError == true || passwordError == true) {
          // console.log("err");
            $('.name, .pass').blur();
        } else {
          // console.log("in");
            document.getElementById('sended').click();
        }
    })

});
