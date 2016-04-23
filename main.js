var gr;

function displayContent(data) {
  //console.log(data);
  if (data["stream"] === null) {
    $(".message").html('freecodecamp: <a href="https://www.twitch.tv/freecodecamp">Offline</a>');
  }
  else {
    $(".message").html('freecodecamp: <a href="https://www.twitch.tv/freecodecamp">Online</a>, Streaming: ' + data["stream"]["game"]);
  }

}

$(document).ready(function() {
    $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
      gr = data;

      displayContent(data);

    });
});