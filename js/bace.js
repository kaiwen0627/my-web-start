$(function () {

//topbar-cart
    $('#jq_minicart').hover(function () {
        $('.cart-menu').stop().slideDown();
    }, function () {
        $('.cart-menu').stop().slideUp();

    })


    //nav导航区域

    $('#nav_item ul li').on('mouseenter', function () {
        $(this).children(".head-nav-menu").stop(true).fadeIn(200);
    }).on('mouseleave', function () {
        $(this).children(".head-nav-menu").stop().fadeOut();


    })


    $('.mi-main-basetool ul li').hover(function () {
        $(this).children('.review-wrapper').stop().slideDown(200);
    }, function () {
        $(this).children('.review-wrapper').stop().slideUp(200);


    })

    //搜索栏
    $('.nav-search').focus(function () {
        $('.nav .search span').fadeOut();
    })

    $('.nav-search').blur(function () {
        $('.nav .search span').fadeIn();
    })


    // 头部左侧导航区

    $('.category-item').on('mouseenter', function () {
        var index = $(this).index();
        $('.part').eq(index).stop().fadeIn(200);
    }).on('mouseleave', function () {
        var index = $(this).index();
        $('.part').eq(index).stop().fadeOut(100);

    })

})

