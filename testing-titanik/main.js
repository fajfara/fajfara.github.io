$(document).ready(function(){
    $('.category_item').click(function(){
        var category = $(this).attr('id');
        if(category == 'all'){
            $('.food_item').addClass('hide');
            setTimeout(function(){
                $('.food_item').addClass('remove');
            }, 400);
            setTimeout(function(){
                $('.food_item').removeClass('hide');
                $('.food_item').removeClass('remove');
            }, 700);
        } else {
            $('.food_item').addClass('hide');
            setTimeout(function(){
                $('.food_item').addClass('remove');
            }, 400);
            setTimeout(function(){
                $('.' + category).removeClass('hide');
                $('.' + category).removeClass('remove');
            }, 700);
        }
    })
})