<?php
session_start();
require_once("twitteroauth-master/twitteroauth/twitteroauth.php"); //Path to twitteroauth library
 
$twitteruser = "AmandaAstey";
$notweets = 20;
$consumerkey = "kD9u4q4gkwQpH6hNqEYhG9gGI";
$consumersecret = "ZumGrB29XPlMNGuc4kw19jIQp3xRpoUHZasESDOexm9VtKDl7U";
$accesstoken = "3141433804-JFbWrpUyob3ZBNlUv85VDkyBmdZ7fbtCN6NMb9i";
$accesstokensecret = "lKBFdJrsT3CuQepWP2QgkhAHJOt2QK7WSXVJA6HL3QCkq";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
echo json_encode($tweets);
?>