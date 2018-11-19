$(document).ready(function() {
    "use strict";
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('img');

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



    //------- Filter  js --------//  
    

    let d = new Date();
    d = d.getDay();
    console.log(d);
    if(d == 1){
        $('#ponedeljek').addClass('active');

        let data = $('#ponedeljek').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    } else if (d == 2){
        $('#torek').addClass('active');

        let data = $('#torek').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    } else if (d == 3){
        $('#sreda').addClass('active');

        let data = $('#sreda').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    } else if (d == 4){
        $('#cetrtek').addClass('active');

        let data = $('#cetrtek').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    }  else if (d == 5){
        $('#petek').addClass('active');

        let data = $('#cetrtek').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    }

      $('.filters li').click(function(){
        $('.filters li').removeClass('active');
        $(this).addClass('active');
        
        let data = $(this).attr('data-filter');
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
            
            let data = $(this).attr('data-filter');
            $('.grid').isotope({
            filter: data
            });
        }; 
      });



      if(document.getElementById("food") || document.getElementById("gallery")){
            let $grid = $(".grid").isotope({
              itemSelector: ".all",
              percentPosition: true,
              masonry: {
                columnWidth: ".all",
                gutter: 0
              }
            })
      };


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


    //------- Parallax banner --------//
    window.addEventListener('scroll', () => {
        // Parallax scroll settings
        for(let i = 0; i < children.length; i++) {
            // settings for dark-bg
            if(children[i].className === 'layer-0'){
                continue;
            }
            // settings for pizza
            if(children[i].className === 'layer-1'){
                children[i].style.transform = 'translateY(' + (window.pageYOffset / children.length * .5 + 'px');
            }
            // settings for leafs
            if(children[i].className === 'layer-2'){
                children[i].style.transform = 'translateY(-' + (window.pageYOffset * .5 / children.length + 'px');
            }
        }
    
    
    }, false);

});

//------- custom js --------//

//------- Google Map  js --------//  

function initMap(){
    let options = {
        zoom: 18,
        center: {
            lat: 46.256545, 
            lng: 14.382235
        }
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
}