$(document).ready(function() {
  /*  pushQuote(); */
    
   /* function pushQuote() {
        $.getJSON("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", function(val) {
        var getQuote = val.quoteText;    
        var newQuote = ""; 
        var getAuth = val.quoteAuthor;  
        var newAuth = "";
            newQuote += ("<div class='newQuote'>" + getQuote + "</div>");
            newAuth += ("<div class='newAuth'>" + getAuth + "</div>");
            
        $("#quoteText").html(newQuote);
        $("#quoteAuthor").html(newAuth);    
    });
};
   */             
    
    // load first quote on page ready
    // function pushQuote() {
       $("#new-quote").on("click", function() { 
        $.getJSON("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", function(val) {
        var newQuote = "";
          newQuote += "<div class='newQuote'>" + val.quoteText + "</div>";
            
        var authorName = val.quoteAuthor; 
        var newAuth = "";
            newAuth += "<div class='newAuth'> - " + val.quoteAuthor + "</div>"; 
                 console.log(authorName); 
      
            $("#quoteText").html(newQuote); 
            $("#quoteAuthor").html(newAuth);
      
      });
       });
});
   // };
    // pushQuote();
    // $("#new-quote").on("click", function() {
       // pushQuote();
//    });



