$(document).ready(function() {
    // load first quote on page ready
    $("#new-quote").on("click", function() {
        "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en"
        
        $.getJSON("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", function(json) {
        var newQuote = "";
          newQuote += "<div class='newQuote'>";
          newQuote += val.quoteText;
          newQuote += "</div>";
    
      $("#quoteText").html(newQuote);
      });
        //$("#quoteText").html("this is the new quote!");
    });
    
});
  // });
/*
 $(document).ready(function() {
    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {
        var html = "";
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
          html += "</div>";
        });
        $(".message").html(html);
      });
    });
  });
*/


