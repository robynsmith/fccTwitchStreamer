/* this is the format JSON is returned from:

{"quoteText":"A house divided against itself cannot stand.", "quoteAuthor":"Abraham Lincoln", "senderName":"", "senderLink":"", "quoteLink":"http://forismatic.com/en/25d6485021/"}

*/

$(document).ready(function() {
    latestQuote = "";

    $("#getQuote").on("click", function(){
		
    $.ajax({
	    	jsonp: "jsonp",
      		dataType: "jsonp",
      		url: 'http://api.forismatic.com/api/1.0/',
      		contentType: 'application/jsonp',
      		data: {
        		lang: "en",
        		method: "getQuote",
        		format: "jsonp"
      		},

	    	success:function(json){
	    	// do stuff with json (in this case an array)
            var html = "";

            latestQuote = json.quoteText + " ~" + json.quoteAuthor;

              html += "<div class = 'quote'>";

              // Only change code below this line.
              
              html += "<blockquote><p>" + '"' + json.quoteText + '"' + "<p/>";
              
              html += "<footer><p>" + json.quoteAuthor + "<p/></footer>";
              // Only change code above this line.

              html += "</div>";

	       		$(".message").html(html);
	    	},
	    
	    	error:function(){
	     		$(".message").html("Error. Unable to connect to quote API. Try again later.");
	    	}      

		});

    });

  $("#tweetQuote").on("click", function () {
    if (latestQuote === "") {
      $(".message").html("Click the 'New Quote' button to start!");
      return 0;
    }
    
    var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(latestQuote); 
    window.open(url, '_blank');
    
    return 0;
  });
}); 