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
            $("#twitter-button").on("click", function(){
                window.open("https://twitter.com/intent/tweet?text=via%20Random%20Quote%20Machine%20by%20@therealmprove%20-%20I%20wanted%20to%20share%20this%20quote: '" + quote + "' -" + authName); 
            });
            
            });
         };

        $("#new-quote").on("click", function() {
            loadQuote(); 
        });
        
});
             

    
    

    
  

