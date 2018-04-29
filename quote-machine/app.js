var button = document.getElementById("button");
var quoteAuthor = '';
var quoteText = '';
var index = 0;
var data = [];


$(document).ready(function(){
    var request = new XMLHttpRequest();
    var requestURL = 'https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json';
    request.open('GET', requestURL);

    request.onload = function(){
        var data = JSON.parse(request.responseText);
        index = Math.floor((Math.random() * 1640) + 1);
        quoteAuthor = data[index].quoteAuthor;
        quoteText = data[index].quoteText;
        insertHTML(data);
    }
    request.send();

    $("#button").on("click", function(){
        $( "#quote-block" ).empty();
        var request = new XMLHttpRequest();
        var requestURL = 'https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json';
        request.open('GET', requestURL);
        request.onload = function(){
            var data = JSON.parse(request.responseText);
            index = Math.floor((Math.random() * 1640) + 1);
            quoteAuthor = data[index].quoteAuthor;
            quoteText = data[index].quoteText;
            insertHTML(data);
        }
        request.send();


    });



    $("#btnTwit").click(function(){
        var fullQuote = quoteText + " Quote by: " + quoteAuthor;
        var enCoded = encodeURI(fullQuote);
        var shareURL = 'https://twitter.com/intent/tweet?text=' + enCoded;
        windowPopTwitter(shareURL);
    });

    $("#stopAnim").click(function(){
        $("h1").removeClass("animated pulse infinite");
    });

    $("#startAnim").click(function(){
        $("h1").addClass("animated pulse infinite");
    });


});

function insertHTML(data){

    $("#quote-block").html(quoteText);
    if(data[index].quoteAuthor == ''){
        $("#quoted-man").html('Unknown author.');
    }
    else{
        $("#quoted-man").html(quoteAuthor);
    };
}

function windowPopTwitter(url){
    var openWin = window.open(url, 'Twitter share', 'height=600, width=500');
}
