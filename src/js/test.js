"use strict";

$(document).ready(function () {

    var target_block = $(".number");
    var blockStatus = true;

    $(window).scroll(function () {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if (scrollEvent && blockStatus) {

            blockStatus = false;
            console.log("number-animation")
            $(".number").each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'liner',
                    step: function (now) {
                        $(this).text(Math.ceil(now))}
                });
            });
        }

    });
    
    $("#submit-id").click(function(){
        let selectValue = $("#select-id").val();
        alert(selectValue);
    });

    
    
    
});


