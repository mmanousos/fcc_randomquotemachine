$(document).ready(function() {
    loadQuote(); 
    
    function loadQuote() {  
         var url = "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"; 
         $.getJSON(url, function(val) {
           var quote = val.quoteText; 
           var authName = val.quoteAuthor; 
            if (authName === "") {
                authName = "Anonymous";
            };
            
            $("#quoteText").html("" + quote + ""); 
            $("#quoteAuthor").html(" -" + authName + "");
            });
         };

        $("#new-quote").on("click", function() {
            loadQuote(); 
        });
});
             

    
    

    
  

