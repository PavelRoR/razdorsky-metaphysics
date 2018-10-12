$(document).ready(function() {





/* Видео */
$(function () {
    $('.video_wrapper img').click(function () {
        var dy = $(this).parent().attr('data-youtube');
        $(this).parent().html('<iframe src="https://youtube.com/embed/' + dy +'?rel=0&autoplay=1" allowfullscreen></iframe>');
    });
});

/*Конец документа*/
});