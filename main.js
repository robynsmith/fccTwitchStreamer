var gr;

var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

var currentHTML = "";

function getHTML(username, data) {
  if (data["stream"] === null) {
    currentHTML += username + ': <a href="https://www.twitch.tv/freecodecamp">Offline</a>';
  }
  else {
    currentHTML += username +': <a href="https://www.twitch.tv/freecodecamp">Online</a>, Streaming: ' + data["stream"]["game"];
  }
}

function displayContent(data) {
  //console.log(data);
  $(".message").html(data);
}

$(document).ready(function() {
    $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
      gr = data;

      getHTML("freecodecamp", data);
      displayContent(currentHTML);

    });
});