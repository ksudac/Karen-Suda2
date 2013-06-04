$(document).ready(function(){
    $('.navigation a').click(function(){
         $('.navigation li').removeClass('nav-selected');
         $(this).closest('li').addClass('nav-selected');
         $('#hidden-social-nav').show();
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
    
    
    $('#love').on('mouseover', function(){
        $('#heart').show();
        $(this).hide();
        setTimeout("fadeLoveIn()",500);
    });
    
    $('#sanfran').on('mouseover', function(){
        $('#ggbridge').show();
        $(this).hide();
        setTimeout("fadeSfIn()",500);
    }); 
});

function fadeLoveIn() {
    $('#heart').hide();
    $('#love').fadeIn("fast");
}

function fadeSfIn() {
    $('#ggbridge').hide();
    $('#sanfran').fadeIn("fast");
}


$(document).ready(function(){
    $('#pill-education').on('mouseover', function(){
        $('#hidden-education').show();
        $('#hidden-title').hide();
    });
    
    $('#pill-education').on('mouseout', function(){
        $('#hidden-education').hide();
        $('#hidden-title').show();
    });
    
    $('#pill-experiance').on('mouseover', function(){
        $('#hidden-experiance').show();
        $('#hidden-title').hide();
    });
    
    $('#pill-experiance').on('mouseout', function(){
        $('#hidden-experiance').hide();
        $('#hidden-title').show();
    });
    
    $('#pill-certificate').on('mouseover', function(){
        $('#hidden-certificate').show();
        $('#hidden-title').hide();
    });
    
    $('#pill-certificate').on('mouseout', function(){
        $('#hidden-certificate').hide();
        $('#hidden-title').show();
    });
});

$(document).ready(function(){
    var d=new Date();
    var weekday=new Array(7);
        weekday[0]="Sunday";
        weekday[1]="Monday";
        weekday[2]="Tuesday";
        weekday[3]="Hump-Day";
        weekday[4]="Thursday";
        weekday[5]="Friday";
        weekday[6]="Saturday";
    
    var n = weekday[d.getDay()];
    var greeting = $('<span>Happy '+n+'!</span>');
    $('#happy-greeting').append(greeting);
});

$(document).ready(function(){
    $('.navigation a').click(function(){
    goToByScroll($(this).attr('href'));
    return false;
    });
});

function goToByScroll(id){
    $('html,body').animate({scrollTop: $(id).offset().top},'slow');
}


$(document).ready(function(){
    window.onload = methodToFixLayout();
    $(window).bind("resize", methodToFixLayout);
    function methodToFixLayout( e ) {
        var windowHeight = $(window).height();
        console.log('windowHeight' + windowHeight);
        var newSpacerHeight = (windowHeight-695)/2;
        console.log('newSpacerHeight' + newSpacerHeight);
        $('.white-spacer').css('height', newSpacerHeight);
    }
});