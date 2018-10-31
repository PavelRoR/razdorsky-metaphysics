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
    

    /* Конец документа */
});