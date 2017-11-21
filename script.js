$(document).ready(function() {
    // create an object containing the quote text and author name
    // pass that out into general scope so it can be accessed by all functions
    
    
    
    function Quote(quote,author) { //create new Quote object
        this.quote = quote;  // placeholder for quote
        this.authName = author; // placeholder for author
    };
    
    function getQuote() {  // a function to access the API
        var url = "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";  // the URL for the API
        $.getJSON(url, function(val) { // call the url and get the values
            var quoteOutput = val.quoteText;
            var authOutput = val.quoteAuthor;
            var newQuote = new Quote(quoteOutput, authOutput); // assign values from the API to the placeholders
            return newQuote; // return those values out of the function so they can be used by other functions
            console.log(newQuote);
        });
    };
    
    
    function loadQuote() {  
        $("#quoteText").html("" + newQuote.quote + "");
        
        if (newQuote.authName === "") {
            newQuote.authName = "Anonymous";
        $("#quoteAuthor").html(" -" + newQuote.authName + "");
        };
    }
    
         
getQuote();
   


    
        $("#new-quote").on("click", function() {
            loadQuote(); 
        });
        
        $("#twitter-button").on("click", function(){
            if (newQuote[authName] === "") {
                newQuote[authName] = "Anonymous";
            };
            
            window.open("https://twitter.com/intent/tweet?text=via%20Random%20Quote%20Machine%20by%20@therealmprove%20-%20I%20wanted%20to%20share%20this%20quote: '" + quoteObject[quote] + "' -" + newQuote[authName]); 
        });
        
});
             

    
    

    
  

