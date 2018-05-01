// client id: i0hx9uhbef1qw9egt0howi026f3izk
var client_id = 'i0hx9uhbef1qw9egt0howi026f3izk';
var xhttp = new XMLHttpRequest();
var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var urlChannels = 'https://api.twitch.tv/kraken/channels/' + streamers[0] +'?client_id=' + client_id;
var data;

xhttp.open('GET', urlChannels);
xhttp.onload = function() {
    if (xhttp.status === 200) {
        data = xhttp.responseText;
        console.log(data);
    }
    else {
        alert('Request failed.  Returned status of ' + xhttp.status);
    }
};
xhttp.send();
console.log(data);

streamers.forEach(function(element){

});

