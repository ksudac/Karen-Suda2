$(document).ready(function(){
    $('.navigation a').click(function(){
         $('.navigation li').removeClass('nav-selected');
         $(this).closest('li').addClass('nav-selected');
    });
    
    $('.say-hello').on('mouseover', function(){
        $('.karen-arrow').show();
        $('.karen-image').hide();
        $('.karen-image-hidden').show();
        
    });
    $('.say-hello').on('mouseout', function(){
        $('.karen-arrow').hide();
        $('.karen-image').show();
        $('.karen-image-hidden').hide();
    });
    $('.bounce-icon').mouseenter(function() { 
        console.dir(this);
        $(this).effect('bounce', { times: 2, distance:10 }, 'slow');
    });
    $('.love').on('mouseover', function(){
        $('.heart').show();
        $(this).hide();
    });
    $('.sanfran').on('mouseover', function(){
        $('.ggbridge').show();
        $(this).hide();
    });
});