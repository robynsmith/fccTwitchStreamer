var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

var currentHTML = "";

function getHTML(username, data) {
  if (data["stream"] === null) {
    currentHTML += username + ': <a href="https://www.twitch.tv/' + username + '">Offline</a></br>';
  }
  else {
    currentHTML += username +': <a href="https://www.twitch.tv/' + username + '">Online</a>, Streaming: ' + data["stream"]["game"] + '</br>';
  }
}

function displayContent() {
  //console.log(data);
  $(".message").html(currentHTML);
}

function getContent(url, user) {
   $.getJSON(url, function(data) {
        getHTML(user, data);
    });
}

$(document).ready(function() {
    users.forEach(function(user) {
      console.log(user);

      var url = 'https://api.twitch.tv/kraken/streams/' + user + '?callback=?';

      getContent(url, user); 
    
    });

    setTimeout(displayContent, 500);
    setInterval(displayContent, 60000);
    setInterval(displayContent, 120000);
});