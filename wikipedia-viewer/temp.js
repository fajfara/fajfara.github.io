$('#output').append(
    '<h3>Results:</h3>'+
        '<div class="container">'+
                '<div class="col s12 m6">'+
                    '<div class="card  light-blue darken-1">'+
                        '<div class="card-content white-text">'+
                              '<span class="card-title">' + data[1][i] + '</span>'+
                              '<p>' + data[2][i] + '</p>'+
                        '</div>' +
                        '<div class="card-action light-blue darken-4 text-orange text-darken-1">'+
                              '<a href="' + data[3][i] + '> Link to article </a>' +
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'
)