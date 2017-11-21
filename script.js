$(document).ready(function() {
  
    
    // load first quote on page ready
    $("#new-quote").on("click", function() {
        "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en"
        
        $.getJSON("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", function(val) {
        var newQuote = "";
          newQuote += "<div class='newQuote'>";
          newQuote += val.quoteText;
          newQuote += "</div>";
      
        var authorName = val.quoteAuthor; 
        var newAuth = "";
            newAuth += "<div class='newAuth'>"; 
            newAuth += val.quoteAuthor; 
            newAuth += "</div>";    
                console.log(authorName);
      
            $("#quoteText").html(newQuote);
            $("author").html(newAuth);
      
      });
        
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


