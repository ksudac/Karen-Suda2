$(document).ready(function(){
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
});