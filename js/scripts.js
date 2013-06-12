$(document).ready(function() {
    resizeHome();                   //resize the home screen to show all black
    setDate();                      //Set day and home screen greeting
    scrollNavigationHighlight();    //Add circle to navigation when scrolling and clicked. Find nearest <h1>
    navigationScroll();             //Scroll the navigation to selected anchor tag
    iconAnimation();                //animate 'white' text on seciton headers to be replaced by image
    aboutPills();                   //show the hidden infomration on the 'about' boxes
    aboutPhoto();                   //change Karen 'about' photo to black and white
    contactForm();                  //respond to form submittal 
    contactAnimation();             //Amimate hover items in the'contact' section, bounce icons, change Karen photo, add arrow
    resizeContact();                //resize the contact sections to take up full screen
    instagramFeed();                //get Karen's instagram feed
    twitterFeed();                  //get karen's twitter feed
});


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


function scrollNavigationHighlight(){
    $(window).scroll(function () {
        //find the hidden <h1> and find the parent anchor tag (href)
        var inview = '#' + $('.location > h1:in-viewport:first').parent().attr('id');
        $link = $('.navigation li > a[href$="' + inview + '"]');

        if($link.length && (inview != '#home')){    //Circle the anchor to show what section the user is on
            $('.navigation li').removeClass('nav-selected');
            $link.closest('.highlight').addClass('nav-selected');
            $('#hidden-social-nav').show();
        }
        if(inview == '#home'){    //hide social navigation and hide location circle
            $('#hidden-social-nav').hide();
            $('.navigation li').removeClass('nav-selected');
        }
    });
}
    

function navigationScroll() {  //scroll to anchor tag when navigation is clicked
    $('.navigation a').click(function(){
        goToByScroll($(this).attr('href'));
        return false;
    });
}


function goToByScroll(id) { //scroll to anchor tag when navigation is clicked
    $('html,body').animate({scrollTop: $(id).offset().top},'slow');
}


function iconAnimation() {  //hide header words and show icons 
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


function aboutPhoto(){  //change the about photo from color to black and white
    $('#paris-color').on('mouseover', function(){
        $('#paris-bw').show();
        $(this).hide();
    });
    $('#paris-bw').on('mouseout', function(){
        $(this).hide();
        $('#paris-color').show();
    });
}


function aboutPills(){ //change 'about' boxes to show hidden content on hover
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

function contactAnimation() { //animate items in 'contact' section. Show the hidden arrow, show the hidden color Karen image, and bounce the contact icons on hover
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


function resizeContact() { //resize 'contact' section to take up entire screen
    window.onload = methodToFixLayout();
    $(window).bind("resize", methodToFixLayout);
    function methodToFixLayout( e ) {
        var windowHeight = $(window).height();
        var newSpacerHeight = (windowHeight-670)/2;
        $('.white-spacer').css('height', newSpacerHeight);
    }
}

function resizeHome() { //resize 'home' to take up entire screen
    window.onload = methodToFixLayout();
    $(window).bind("resize", methodToFixLayout);
    function methodToFixLayout( e ) {
        var windowHeight = $(window).height();
        var newSpacerHeight = windowHeight-100;
        $('.home-spacer').css('height', newSpacerHeight);
    }
}

function contactForm() { //repond to users when they send an email
    $('#myForm').ajaxForm(function() { 
        $('#form-response').html("<p>We will be in touch soon.</p>");
    }); 
}

function twitterFeed(){
    $.getJSON('../php/get-tweets.php', function(feeds) {
            var status = feeds[0].text;
            var theTime = feeds[0].created_at;
            status = addlinks(status);

            $('#date').html($.timeago(theTime));
            $('#tweet').html(status);
    });
}    
    
//Function modified from Stack Overflow
function addlinks(data) {
    //Add link to all http:// links within tweets
    data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
        return '<a href="'+url+'" >'+url+'</a>';
    });
 
    //Add link to @usernames used within tweets
    data = data.replace(/\B@([_a-z0-9]+)/ig, function(reply) {
        return '<a href="http://twitter.com/'+reply.substring(1)+'" style="font-weight:lighter;" >'+reply.charAt(0)+reply.substring(1)+'</a>';
    });
    return data;
}

function instagramFeed(){ //get more recent instagram feed
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/38240188/media/recent/?access_token=38240188.5b9e1e6.a7e35a8f307d4d78b98fd56b630022be",
        success: function(data) {
            for (var i = 0; i < 4; i++) {
                $(".instagram").append("<a target='_blank' href='" + data.data[i].link + "'><img class='instagram-photo' width='220px' height='220px' src='" + data.data[i].images.low_resolution.url +"'></img></a>");
            }
        }
    });
}
