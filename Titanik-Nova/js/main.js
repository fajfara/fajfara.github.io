$(document).ready(function() {
    "use strict";


    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;

    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);


    // ------- Datepicker  js --------//  

      $( function() {
        $( ".date-picker" ).datepicker();
      } );


    //------- Niceselect  js --------//  

    if (document.getElementById("default-select")) {
        $('select').niceSelect();
    };
    if (document.getElementById("default-select2")) {
        $('select').niceSelect();
    };
    if (document.getElementById("service-select")) {
        $('select').niceSelect();
    };    

    //------- Lightbox  js --------//  

    $('.img-gal').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //------- Superfish nav menu  js --------//  

    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });


    //------- Filter  js --------//  
    

    var d = new Date();
    d = d.getDay();
    console.log(d);
    if(d == 1){
        $('#ponedeljek').addClass('active');

        var data = $('#ponedeljek').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    } else if (d == 2){
        $('#torek').addClass('active');

        var data = $('#torek').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    } else if (d == 3){
        $('#sreda').addClass('active');

        var data = $('#sreda').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    } else if (d == 4){
        $('#cetrtek').addClass('active');

        var data = $('#cetrtek').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    }  else if (d == 5){
        $('#petek').addClass('active');

        var data = $('#cetrtek').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    }

      $('.filters li').click(function(){
        $('.filters li').removeClass('active');
        $(this).addClass('active');
        
        var data = $(this).attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
      });

      $('.filters li').click(function(){
        let pageLocation = window.location.pathname;
        console.log(pageLocation);
        if(pageLocation.includes("/menu.html")){
            $('.filters li').removeClass('active-menu-filter');
            $(this).addClass('active-menu-filter');
            
            var data = $(this).attr('data-filter');
            $('.grid').isotope({
            filter: data
            });
        }; 
      });



      if(document.getElementById("food") || document.getElementById("gallery")){
            var $grid = $(".grid").isotope({
              itemSelector: ".all",
              percentPosition: true,
              masonry: {
                columnWidth: ".all",
                gutter: 0
              }
            })
      };

    //------- Owl Carusel  js --------//  

    $('.-review-carusel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayHoverPause: true,        
        smartSpeed:500,          
        margin:30,
        dots: true
    });
    //------- Mobile nav functionality -------//
    let burgerBtn = document.getElementById('mobilenav-burger-btn');
    let mobile = document.getElementsByTagName("BODY")[0];
    let burgerBtnPressed = false;
    burgerBtn.addEventListener('click', function() {
        mobile.classList.toggle('navigation');
        burgerBtnPressed = !burgerBtnPressed;
        console.log(burgerBtnPressed);
    }, false);
    

    



    //------- Header Scroll Class  js --------//  

    $(window).scroll(function() {
        console.log($(this).scrollTop());
        if($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
            setTimeout(() => {
                if($(this).scrollTop() > 101){
                    $('.header-top').addClass('remove');
                };
            }, 250);
        } else if ($(this).scrollTop() > 100 || burgerBtnPressed){
            $('#header').addClass('header-scrolled');
            setTimeout(() => {
                if($(this).scrollTop() > 101){
                    $('.header-top').addClass('remove');
                };
            }, 250);
        } else {
            $('#header').removeClass('header-scrolled');
            $('.header-top').removeClass('remove');
        }

    });


    //------- Parallax scroll --------//

    window.addEventListener('scroll', () => {
        let pageLocation = window.location.pathname;
        console.log(pagelocation);
        if(pageLocation.includes("index.html") || pageLocation == '/' || pageLocation == '/Titanik-Nova/'){
            let parent = document.getElementById('parallax-container');
            let children = parent.getElementsByTagName('div');
            let aboutPage = document.getElementById('about-area');
                for(let i = 0; i < children.length; i++) {
                    children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
                }
                aboutPage.style.transform = 'translateY(-' + (window.pageYOffset * .9) + 'px)';
        }
    }, false)

    

    //------- Google Map  js --------//  

    if (document.getElementById("map")) {
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            var mapOptions = {
                zoom: 11,
                center: new google.maps.LatLng(46.256527, 14.382167), // New York
                styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e9e9e9"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dedede"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#333333"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }]
            };
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Snazzy!'
            });
        }
    }

    //------- Mailchimp js --------//  

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });

});

//------- custom js --------//