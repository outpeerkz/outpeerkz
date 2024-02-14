leftgo = true;
topgo = true;

$(document).ready(function () {
    $('#button1').click(function () {
        $('#yes').css({
            "visibility": "visible",
            "opacity": "100"
        });
    });
    $('#button').click(function () {
        $('#no').css({
            "visibility": "visible",
            "opacity": "100"
        });
    });
    $('#button').hover(function () {
        var left = parseInt($('#button').css('left').replace("px", ""));
        if (leftgo) {
            $('#button').animate({
                left: '-=100'
            }, 50);
            if (left <= 100) {
                leftgo = !leftgo;
            }
        } else {
            $('#button').animate({
                left: '+=100'
            }, 50);
            if (left >= 400) {
                leftgo = !leftgo;
            }
        }
        var top = parseInt($('#button').css('top').replace("px", ""));
        if (topgo) {
            $('#button').animate({
                top: '-=100'
            }, 50);
            if (top <= 150) {
                topgo = !topgo;
            }
        } else {
            $('#button').animate({
                top: '+=100'
            }, 50);
            if (top >= 100) {
                topgo = !topgo;
            }
        }
    });


});