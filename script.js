$(document).ready(function() {
    // load first quote on page ready
    $("#new-quote").on("click", function() {
        
        $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
        var newQuote = "";
          newQuote += "<div class='newQuote'>";
          newQuote += val.quoteText;
          newQuote += "</div>";
    
      $("#quoteText").html(newQuote);
      });
        //$("#quoteText").html("this is the new quote!");
    });
    
/*    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
        var newQuote = "";
          newQuote += "<div class='newQuote'>";
          newQuote += val.quoteText;
          newQuote += "</div>";
    
      $("#quoteText").html(newQuote);
    }); */
    
/*    
    $("#new-quote").on("click", function() {
      $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=html&lang=en", function(json) {
        var newQuote = "";
          newQuote += "<div class='newQuote'>";
          newQuote += val.quoteText;
          newQuote += "</div>";
    
      $(".quote-text").html(newQuote);
          /*
          json.forEach(function(val) {
          html += "<div class = 'cat'>";
          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
          html += "</div>"; */
    //    });
        
    //  });
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