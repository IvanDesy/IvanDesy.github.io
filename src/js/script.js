"use strict";


$(window).on('load', function () {
    $('.preloader').fadeOut(500).end().delay(500).fadeOut('slow');
});


$(document).ready(function () {

    $('.popup-open').click(function () {
        $('.popup-fade').fadeIn();
        return false;
    });

    $('.popup-close').click(function () {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    $('.popup-fade').click(function (e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });

    var delayWindowPhase = 1;

    $("#cost-calc-submit").click(function () {
        delayWindowPhase = 0;

        let answers = [$('#select-site-type').val(), $('#select-site-design').val(), $('#select-site-adaptabillity').val()];

        let cost = 0;
        let time = 0;

        if (answers[0] == 1) {
            cost += 5000;
            time += 8;
        } else if (answers[0] == 2) {
            cost += 10000;
            time += 24;
        } else if (answers[0] == 3) {
            cost += 20000;
            time += 72;
        }

        if (answers[1] == 1) {
            cost += 5000;
            time += 8;
        } else if (answers[1] == 2) {
            cost += 10000;
            time += 16;
        } else if (answers[1] == 3) {
            cost += 20000;
            time += 48;
        }

        if (answers[2] == 1 || answers[2] == 2) {
            cost += 5000;
            time += 8;
        } else if (answers[2] == 3) {
            cost += 15000;
            time += 32;
        }

        $('#cost').html(cost + ' руб.');
        $('#time').html(Math.ceil(time / 24) + ' сут.');
    });

    setTimeout(function () {
        if (delayWindowPhase === 1) {
            $(".delay-window-display").show(500)
            $(".delay-window-bg").css("display", "block");
        }
    }, 40000); // 40000 = 40 секунд, до запуска всплывающего окна

    $("#close-delay-link").click(function () {
        $('.delay-window-all').hide(500);
        $(".delay-window-bg").css("display", "none");
    });
    $(".close-delay-submit").click(function () {
        $('.delay-window-all').hide(500);
        $(".delay-window-bg").css("display", "none");
    });



    var target_block = $(".number");
    var blockStatus = true;

    $(window).scroll(function () {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if (scrollEvent && blockStatus) {

            blockStatus = false;
            $(".number").each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now))
                    }
                });
            });
        }

    });


});
