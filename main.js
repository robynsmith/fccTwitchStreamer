/* this is the format JSON is returned from:

{"quoteText":"A house divided against itself cannot stand.", "quoteAuthor":"Abraham Lincoln", "senderName":"", "senderLink":"", "quoteLink":"http://forismatic.com/en/25d6485021/"}

*/

var gr;

$(document).ready(function() {
    $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
      console.log(data);
      gr = data;
    });
});