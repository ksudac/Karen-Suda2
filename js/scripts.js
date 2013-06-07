$(document).ready(function() {
    resizeHome();
    navigationHighlight(); 
    scrollNavigationHighlight();
    navigationScroll();
    setDate();
    iconAnimation();
    aboutPills();
    twitterFeed();
    instagramFeed();
    contactAnimation();
    resizeContact();
});


function navigationHighlight(){
    $('.navigation a').click(function(){
         //$('.navigation li').removeClass('nav-selected');
         //$(this).closest('.highlight').addClass('nav-selected');
    });
    $('.navigation-smaller a').click(function(){
         $('.navigation li').removeClass('nav-selected');
    });
}

function scrollNavigationHighlight(){
    $(window).scroll(function () {
        var inview = '#' + $('.location > h1:in-viewport:first').parent().attr('id');
        $link = $('.navigation li > a[href$="' + inview + '"]');
       
        if($link.length && (inview != '#home')){    
            $('.navigation li').removeClass('nav-selected');
            $link.closest('.highlight').addClass('nav-selected');
            $('#hidden-social-nav').show();
        }
        if(inview == '#home'){    
            $('#hidden-social-nav').hide();
            $('.navigation li').removeClass('nav-selected');
        }
    });
}
    

function navigationScroll() {
    $('.navigation a').click(function(){
    goToByScroll($(this).attr('href'));
    return false;
    });
}


function goToByScroll(id) {
    $('html,body').animate({scrollTop: $(id).offset().top},'slow');
}


function setDate() {
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
}


function iconAnimation() {
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
    $('#check').on('mouseover', function(){
        $('#sunglass').show();
        $(this).hide();
        setTimeout("fadeCheckIn()",500);
    });
}


function fadeLoveIn() {
    $('#heart').hide();
    $('#love').fadeIn("fast");
}

function fadeSfIn() {
    $('#ggbridge').hide();
    $('#sanfran').fadeIn("fast");
}

function fadeCheckIn() {
    $('#sunglass').hide();
    $('#check').fadeIn("fast");
}

function aboutPills(){
    
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
}

function twitterFeed(){
    $.getJSON("https://api.twitter.com/1/statuses/user_timeline/ksudac99.json?count=1&include_rts=1&callback=?", function(data) {
        $('#tweet').text(data[0].text);
        $('#date').text($.timeago(data[0].created_at));
    });    
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
}


function instagramFeed(){
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/38240188/media/recent/?access_token=38240188.5b9e1e6.a7e35a8f307d4d78b98fd56b630022be",
        success: function(data) {
            for (var i = 0; i < 4; i++) {
                $(".instagram").append("<a target='_blank' href='" + data.data[i].link + "'><img class='instagram-photo' src='" + data.data[i].images.low_resolution.url +"'></img></a>");
            }
        }
    });
}

function contactAnimation() {
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
        $(this).effect('bounce', { times: 2, distance:10 }, 'slow');
    });
}


function resizeContact() {
    window.onload = methodToFixLayout();
    $(window).bind("resize", methodToFixLayout);
    function methodToFixLayout( e ) {
        var windowHeight = $(window).height();
        var newSpacerHeight = (windowHeight-670)/2;
        $('.white-spacer').css('height', newSpacerHeight);
    }
}

function resizeHome() {
    window.onload = methodToFixLayout();
    $(window).bind("resize", methodToFixLayout);
    function methodToFixLayout( e ) {
        var windowHeight = $(window).height();
        var newSpacerHeight = windowHeight-100;
        $('.home-spacer').css('height', newSpacerHeight);
    }
}