 $(document).ready(function() { // wait for page to load
  
    var newQuote; // create new variable for newQuote to return in tweets. this needs to be outside the scope of a specific function or it will not be accessible on the global scope. 

    
    function loadQuote(quoteObject) { // describes where to push the quote on the page and which values to pull
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
            loadQuote(quoteObject);  // execute the object in the predefined function
             
             /* alternate more efficient process - do not define the object, but simply create it as the parameter passed to function when calling the function. Saves several lines of code but need to understand that this is identical to what is happening above. 
             loadQuote( {quoteVal: quote, authVal: authName}); */
        });
    }
    getQuote(); // run function to gather values and push to html doc
    

    // functionality of "new quote" button
    $("#new-quote").on("click", function() { 
            getQuote(); 
    });
    
    
    //functionality of "tweet" button
    $("#twitter-button").on("click", function(){ 
            window.open('https://twitter.com/intent/tweet?text=I%20wanted%20to%20share%20this%20quote: "' + newQuote.quoteVal + '"-' + newQuote.authVal + ' --%20via%20Random%20Quote%20Machine%20by%20@therealmprove%20(a%20@freecodecamp%20project)'); 
    });
    
});