$(document).ready(function(){
    var search;
    
    // Hide the error message div, loading div and nothing found
    $('#nothingFound').hide();
    $('#loading').hide();
    $('#errorEmpty').hide();

    

    // if button clicked start the function to load data
    $('#searchBtn').click(function(){

        // Show loading circle and remove and instances of nothing found div and then hide it(otherwise the red background stays)
        $('#loading').show();
        $('#nothingFound').empty();
        $('#nothingFound').hide();

        // Get whatever you input in the search bar and store in var SearchTerm
        search = $('.inputSearch').val();

        // Check if user actually provided something, else display error if all is ok remove and previous errors
        if(search === undefined || search === ''){
            displayError();
            return;
            
        }
        // else get data from wiki api
        else
        {
            // Clearing any errors and show loading circle
            $('#errorEmpty').empty();
            $('#errorEmpty').hide();

            // Clear the text in the search field after pressing button and remove active class
        
            $('.inputSearch').val("");
            $(".test").removeClass("active");

            // Storing the url for wikipedia api
            var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + "&format=json&callback=?";

            // Setting the timeout function for loading data 2 seconds load
            setTimeout(function(){
                $.ajax({
                    type: "GET",
                    url: url,
                    async: false,
                    dataType: "json",
                    success: function(data){
                        // If success - > hide loading div, clear the output div of any html, add animation
                        $('#loading').hide();
                        $('#output').empty();
                        $('#output').addClass("animated fadeInUp");
                        
                        // Check if the return is empty ( nothing found for search term )
                        if(data[1][0] === undefined){
                            displayNotFound();
                            return;
                        }
    
                        // if all is ok append results to output div, added styling for materialize.css
                        $('#output').append('<h3>Results:</h3>');
                        for(var i = 1; i < data[1].length; i++){
                            $('#output').append(
                                '<div class="container">'+
                                    '<div class="col s12 m6">'+
                                        '<div class="card  light-blue darken-1">'+
                                            '<div class="card-content white-text">'+
                                                '<span class="card-title">' + data[1][i] + '</span>'+
                                                '<p>' + data[2][i] + '</p>'+
                                            '</div>' +
                                            '<div class="card-action light-blue darken-4 text-orange text-darken-1">'+
                                                '<a href="' + data[3][i] + '"> Link to article </a>'  +
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'
                            );
    
                        }
                        // Atm this console log is for testing
                        console.log("Sucess");
    
                        
                    }
    
    
                });
            }, 2000);
        }
        // End of else

    });
    // end of click button even
    
    // Here i am trying to make it work, if your press enter it will also search, no luck so far 
    $("#icon_prefix").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#searchBtn").click();
            console.log("You pressed enter");
        }
    });

    // Display error function
    function displayError(){
        setTimeout(function(){
            $('#loading').addClass("animated fadeOut");
            $('#loading').hide();
            $('#errorEmpty').show();
            $('#errorEmpty').addClass("animated flash");
            $('#errorEmpty').append(
                "<h1> Error: <br> Please input a search term, do not leave it blank!</h1>"
            );
            setTimeout(function(){
                $('#errorEmpty').empty();
                $('#errorEmpty').hide();
            }, 2000)
        }, 1000);

    }

    // display that nothing has been found for that search term
    function displayNotFound(){
        
        setTimeout(function() {
            $('#loading').addClass("animated fadeOut");
            $('#loading').hide();
            $('#nothingFound').show();
            $('#nothingFound').addClass("animated flash");
            $('#nothingFound').append(
                "<h1> Nothing found for this search term: " + search +"</h1>"
            );
        }, 2000);
    }


});
// End of document ready function