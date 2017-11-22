var newQuote; // create new variable for newQuote to return in tweets. this needs to be outside the scope of the rest of the function or it will not be accessible on the global scope. 
$(document).ready(function() { // wait for page to load
  
   function loadQuote(quoteObject) { // describes where to push the quote on the page
        newQuote = quoteObject;      // the new quoteObject becomes newQuote
        $("#quoteText").html("" + quoteObject.quoteVal + "");  // the quote goes into the quote box
        $("#quoteAuthor").html(" -" + quoteObject.authVal + ""); // the name of the author goes into the column for the author
    }

    
    function getQuote() {
        var url = "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";  // the website hosting the quotes
         $.getJSON(url, function(val) { // access the website and pull their values
           var quote = val.quoteText;  // assign the quote value to a variable
           var authName = val.quoteAuthor;  // assign the author name to a variable
            if (authName === "") {      // check if the author name is blank 
                authName = "Anonymous"; // if so attribute it to "anonymous"
            };
             
        var quoteObject = { // create quoteObject that can hold these values after this function runs
          quoteVal: quote,   
          authVal: authName     
        };
             return loadQuote(quoteObject);  // return the object in the predefined function
        });
    }
    getQuote(); // run function
    

    // functionality of "new quote" button
    $("#new-quote").on("click", function() { 
            getQuote(); 
    });
    
    
    //functionality of "tweet" button
    $("#twitter-button").on("click", function(){ 
            window.open('https://twitter.com/intent/tweet?text=I%20wanted%20to%20share%20this%20quote: "' + newQuote.quoteVal + '"-' + newQuote.authVal + ' --%20via%20Random%20Quote%20Machine%20by%20@therealmprove%20(a%20@freecodecamp%20project)'); 
    });
    
});