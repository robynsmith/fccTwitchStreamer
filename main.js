var gr;

function displayContent(data) {
  //console.log(data);
  if (data["stream"] === null) {
    $(".message").html("freecodecamp: offline");
  }
  else {
    $(".message").html("freecodecamp: online");
  }

}

$(document).ready(function() {
    $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
      gr = data;

      displayContent(data);

    });
});