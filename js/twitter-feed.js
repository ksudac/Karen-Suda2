$(document).ready(function(){
    $.getJSON("https://api.twitter.com/1/statuses/user_timeline/ksudac99.json?count=1&include_rts=1&callback=?", function(data) {
      $('#tweet').text(data[0].text);
      $('#date').text($.timeago(data[0].created_at));
    });    
});