$(document).ready(function() {
    
    
    function loadQuote() {   
        $.getJSON("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", function(val) {
        var newQuote = "";
          newQuote += "<div class='newQuote'>" + val.quoteText + "</div>";
            
        var authorName = val.quoteAuthor; 
            if (authorName === "") {
                authorName = "unknown";
            };
        var newAuth = "";
            newAuth += "<div class='newAuth'> - " + authorName + "</div>"; 
      
            $("#quoteText").html(newQuote); 
            $("#quoteAuthor").html(newAuth);
            
            }); 
            
        $("#new-quote").on("click", function() {
                loadQuote(); 
            
      
      });
            
    };
       loadQuote(); 
});
    
    

    
  

