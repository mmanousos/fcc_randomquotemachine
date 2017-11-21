
$(document).ready(function() {
  
     
    function getQuote() {
        var url = "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"; 
         $.getJSON(url, function(val) {
           var quote = val.quoteText; 
           var authName = val.quoteAuthor; 
            if (authName === "") {
                authName = "Anonymous";
            };
             
        var quoteObject = {
          quoteVal: quote,   
          authVal: authName     
        };
             return quoteObject;
        });
    }
    getQuote();
    
    
    function loadQuote() {    
        $("#quoteText").html("" + quoteObject.quoteVal + ""); 
        $("#quoteAuthor").html(" -" + quoteObject.authVal + "");
    }
    loadQuote();
    
    $("#new-quote").on("click", function() {
            loadQuote(); 
    });
    
    
    $("#twitter-button").on("click", function(){
            if (newQuote[authName] === "") {
                newQuote[authName] = "Anonymous";
            };
            
            window.open("https://twitter.com/intent/tweet?text=via%20Random%20Quote%20Machine%20by%20@therealmprove%20-%20I%20wanted%20to%20share%20this%20quote: '" + quoteObject.quoteVal + "' -" + quoteObject.authVal); 
    });
    
});
    

             

    
    

    
  

