$(document).ready(function () {
    /* Таймер */
    var clock;
    var futureDate = new Date("November 1, 2018 0:00 AM UTC+3");
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
        $('.clock').addClass('twoDayDigits');
    } else {
        $('.clock').addClass('threeDayDigits');
    }
    if (diff < 0) {
        diff = 0;
        $('.clock-stop').addClass("alert-danger");
        $('.clock-stop').html("Скидка уменьшилась!");
        $('#sale_1').text('550р.');
        $('#sale_2').text('800р.');
        $('#sale_3').text('1555р.');
        $('#today_1').text('9 339р.');
        $('#today_2').text('18 888р.');
        $('#today_3').text('38 333р.');
        $('#link_1').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2300&clean=true&lg=ru');
        $('#link_2').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2304&clean=true&lg=ru');
        $('#link_3').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2307&clean=true&lg=ru');
    }
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'HourCounter',
        countdown: true,
        language: 'ru',
        callbacks: {
            stop: function () {
                $('.clock-stop').addClass("alert-danger");
                $('.clock-stop').html("Скидка уменьшилась!");
                $('#sale_1').text('550р.');
                $('#sale_2').text('800р.');
                $('#sale_3').text('1555р.');
                $('#today_1').text('9 339р.');
                $('#today_2').text('18 888р.');
                $('#today_3').text('38 333р.');
                $('#link_1').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2300&clean=true&lg=ru');
                $('#link_2').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2304&clean=true&lg=ru');
                $('#link_3').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2307&clean=true&lg=ru');
            }
        },
    });
    /* Якорь */
    $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });
    /*Записи*/
    (function ($) {
        jQuery.fn.lightTabs = function (options) {

            var createTabs = function () {
                tabs = this;
                i = 0;

                showPage = function (i) {
                    $(tabs).children("div").children("div").hide();
                    $(tabs).children("div").children("div").eq(i).show();
                    $(tabs).children("ul").children("li").removeClass("active");
                    $(tabs).children("ul").children("li").eq(i).addClass("active");
                }

                showPage(0);

                $(tabs).children("ul").children("li").each(function (index, element) {
                    $(element).attr("data-page", i);
                    i++;
                });

                $(tabs).children("ul").children("li").click(function () {
                    showPage(parseInt($(this).attr("data-page")));
                });
            };
            return this.each(createTabs);
        };
    })(jQuery);
    $(document).ready(function () {
        $(".video_tabs").lightTabs();
    });
    // var yaBrowserUpdater = new ya.browserUpdater.init({
    //     "lang": "ru",
    //     "browsers": {
    //         "yabrowser": "15.10",
    //         "chrome": "52",
    //         "ie": "10",
    //         "opera": "40",
    //         "safari": "8",
    //         "fx": "47",
    //         "iron": "35",
    //         "flock": "Infinity",
    //         "palemoon": "25",
    //         "camino": "Infinity",
    //         "maxthon": "4.5",
    //         "seamonkey": "2.3",
    //         "theme": "blue"
    //     }
    // });
    /* Конец документа */
});