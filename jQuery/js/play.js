$(function() {

    $('#liste li').click(function() {
        $(this).toggleClass('selected', 200);
    });

    $('#delete').click(function() {
        $('#liste').find('li').filter('.selected').slideUp(200);
    });

    $('#restore').click(function() {
        $('#liste').find('li').filter('.selected').slideDown(200);
    });

});