$(document).ready(function(){
    $('#leftt').click(function(){
        $('.cards').animate({scrollLeft: '-=200px'}, 'slow'); // Adjust scroll distance as needed
    });
    
    $('#right').click(function(){
        $('.cards').animate({scrollLeft: '+=200px'}, 'slow'); // Adjust scroll distance as needed
    });
});
