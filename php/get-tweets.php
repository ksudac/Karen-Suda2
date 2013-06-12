<?php
session_start();
require_once('twitteroauth.php');
 
$twitteruser = "ksudac99";
$notweets = 1;
$consumerkey = "ylaIJ2wlWhYiGZncQ6YJQ";
$consumersecret = "3JW2EeXeeUIiAGTED8ZoMyoUfdVIx65nsmCLSK8Kg";
$accesstoken = "525722412-T4FqRmFA14hkdOd3l5VwPIQzVwGn3cShzxZfkDpV";
$accesstokensecret = "0wTJwXj2PclRqvob0r1DKiQu6LpphVVoZIuSXGEpIQ4";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
  
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
echo json_encode($tweets);
?>