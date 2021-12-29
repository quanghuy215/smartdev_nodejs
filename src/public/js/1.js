$(function () {
    
    //carousel
    $('.carousel').carousel({
        inteval: 2000
    })

    //slick
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    //scroll Top
    $(window).scroll(function () {
        var y = $(window).scrollTop();

        if(y>=450){
            $('.btn-scroll').addClass('open');
        }
        else{
            $('.btn-scroll').removeClass('open');
        }
    })

    $('.btn-scroll').click(function (e) { 
        $('html, body').animate({ 
        scrollTop: 0
        },900)
    });

    
    $('.img-item').click(function(e){
        let img = [
            './images/product1.jpg',
            './images/product2.jpg',
            './images/product3.jpg',
            './images/product4.jpg',
            './images/product5.jpg',
    
        ]
        $('.img-item').removeClass('active');
        $(this).addClass('active');

        
       var index =  $(this).index();
        $('.mainImg').attr('src', img[index]);
       
    })
    $('.size').click(function(e){
        
        $('.size').removeClass('active');
        $(this).addClass('active');

       
    })


    
    $('.plusProduct').click(function (e) { 
        var valueProduct = $('.amount').val()
        
        if(valueProduct == 10){
            alert('Bạn không thể đặt quá 10 sản phẩm');
            $('.amount').val(10);

            $('.plusProduct').prop('disabled', true)
        }
        else{
            valueProduct ++;
            $('.amount').val(valueProduct);
    
        }
    });
    
    $('.minusProduct').click(function (e) { 
        var valueProduct = $('.amount').val()
        
        if(valueProduct == 1 ){
            alert('Vui lòng chọn số lượng sản phẩm ');
            $('.amount').val(1);
            $('.minusProduct').prop('disabled', true);
        }
        else{
            valueProduct --;
            $('.amount').val(valueProduct);
    
        }
    });

    $('.item__product').hover(function () {

            // over
            $(this).css("border", "1px solid #d8d8d8")
            
        }, function () {
            // out
            $(this).css( "border", "none")
        }
    );

    $('.open-menu').click(function () { 
        $('.left').addClass('open');
        $('.opacity-body').addClass('open');
    });
    $('.close-menu').click(function (e) { 
        e.preventDefault();
        $('.opacity-body').removeClass('open');
        $('.left').removeClass('open');
    });
    $('.opacity-body').click(function () { 
        $('.opacity-body').removeClass('open');
        $('.left').removeClass('open');
    });
});
