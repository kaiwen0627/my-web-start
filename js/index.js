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
    },function () {
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


    //big-banner


    $('.bigbanner-ctr-left').hover(function () {
        $(this).css('background-position', '0 0');
    }, function () {
        $(this).css('background-position', '-83px 0');
    })
    $('.bigbanner-ctr-right').hover(function () {
        $(this).css('background-position', '-42px 0');
    }, function () {
        $(this).css('background-position', '-124px 0');
    })

    var m = $('.big-dian-list li.active').index();


//banner 左右按键

    var time = 0;
    $('.banner-ctrl').click(function () {
        var date=new Date();
        if(date-time>200){
            var i = $(this).index();
           console.log(i);
            if (i == 1) {//左按钮
                m--;
                if (m < 0) {
                    m = 4;
                }
            } else {
                m++;
                if (m > 4) {
                    m = 0;
                }
            }
            $('.big-pic-list li').eq(m).fadeIn(500).siblings().fadeOut(200);
            $('.big-dian-list li').eq(m).addClass('active').siblings().removeClass('active');
        }
        time=new Date();

    })

    //底部按钮

    $('.big-dian-list li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.big-pic-list li').eq(index).fadeIn(500).siblings().hide();

    })


    // 自动播放

var bannerTimer=null;
    autoBanner();
    function autoBanner() {
        bannerTimer=setInterval(function () {
            m++;
            if (m > 4) {
                m = 0;
            }
            $('.big-pic-list li').eq(m).fadeIn(500).siblings().fadeOut();
            $('.big-dian-list li').eq(m).addClass('active').siblings().removeClass('active');

        }, 3000)
    }


    $('#big-banner').hover(function () {
        m = $('.big-dian-list li.active').index();
        clearInterval(bannerTimer);
    },function () {
       autoBanner();
    })




//stor-goods
    $('.star-ctrl').on('click', function () {
        var i = $(this).index();
        if (i == 2) {
            $(this).addClass('active').siblings().removeClass('active');
            $('.mi-star-wrap ul').animate({'left': '0'}, 300);
        } else {
            $(this).addClass('active').siblings().removeClass('active');
            $('.mi-star-wrap ul').animate({'left': '-1260px'}, 300);

        }
    })

    //自动播放
    var mark = 0;
    setInterval(function () {

        if (mark == 1) {
            $('.star-ctrl').eq(0).addClass('active').siblings().removeClass('active');
            $('.mi-star-wrap ul').animate({'left': '0'}, 500);
            mark = 0;
        } else {
            $('.star-ctrl').eq(1).addClass('active').siblings().removeClass('active');
            $('.mi-star-wrap ul').animate({'left': '-1260px'}, 500);
            mark = 1;
        }

    }, 6000);


    //搭配-配件-周边
    mainCtrl("#mi_dapei_ctrl", "#dapei_page");
    mainCtrl("#mi_peijian_ctrl", "#peijian_page");
    mainCtrl("#mi_zhoubian_ctrl", "#zhoubian_page");

    function mainCtrl(ctrlid, moveid) {
        $(ctrlid).find('li').on('mouseenter', function () {
            $(this).addClass('on').siblings().removeClass('on');
            $(moveid).find('.main-base-page').eq($(this).index()).addClass('active').siblings().removeClass('active');
        })

    }

//为你推荐
    $('.zhoubian-ctrl').on('click', function () {
        var i = $(this).index();
        if (i == 2) {
            $(this).addClass('active').siblings().removeClass('active');
            $('.mi-zhoubian-wrap ul').animate({'left': '0'}, 300);
        } else {
            $(this).addClass('active').siblings().removeClass('active');
            $('.mi-zhoubian-wrap ul').animate({'left': '-1260px'}, 300);

        }
    })

//内容
neirong('#tushu_page','#tushu_ctrl','.tushu');
neirong('#zhuti_page','#zhuti_ctrl','.zhuti');
neirong('#youxi_page','#youxi_ctrl','.youxi');
neirong('#yingyong_page','#yingyong_ctrl','.yingyong');

    function neirong(moveID,dianID,cenCtrlClass){
        $(dianID).find('i').on('click', function () {
            var i = $(this).index();
            $(moveID).animate({left: -i * 296}, 300)
            $(this).addClass('on').siblings().removeClass('on');
        })
        var k = 0;
        $(cenCtrlClass).on('click', function () {
            var m = $(dianID).find('i').length;//得到页面数目
            var i = $(this).index();
            if (i == 2) {//左侧按钮
                if(k!=0){
                    k--;
                }
            } else if (i == 3) {//右侧按钮
                k++;
                if(k>m-1){
                    k=m-1;
                }
            }
            $(moveID).animate({left: -k * 296}, 300)
            $(dianID).find('i').eq(k).addClass('on').siblings().removeClass('on');
        })

    }


    //
    // $('#tushu-ctrl').find('i').on('click', function () {
    //     var i = $(this).index();
    //     $(moveID).animate({left: -i * 296}, 500)
    //     $(this).addClass('on').siblings().removeClass('on');
    // })

    var k = 0;
    $('.neirong-ctrl').on('click', function () {
        var m = $('#tushu-ctrl').find('i').length;//得到页面数目
        var i = $(this).index();
        if (i == 2) {//左侧按钮
            if(k!=0){
                k--;
            }
        } else if (i == 3) {//右侧按钮
            k++;
            if(k>m-1){
               k=m-1;
           }
        }
        $(moveID).animate({left: -k * 296}, 500)
        $('#tushu-ctrl').find('i').eq(k).addClass('on').siblings().removeClass('on');
    })


    // $('#mi-dapei-ctrl  li').on('mouseenter', function () {
    //     $(this).addClass('on').siblings().removeClass('on');
    //     $('.dapei-page').eq($(this).index()).addClass('active').siblings().removeClass('active');
    // })


//
//    $('.bigbanner-ctr-right').click(function () {
//        m++;
//        if (m>4) {
//            m = 0;
//        }
//        $('.big-pic-list li').eq(m).fadeIn(500).siblings().fadeOut();
//        $('.big-dian-list li').eq(m).addClass('active').siblings().removeClass('active');
//    })
//
// $('.bigbanner-ctr-left').click(function () {
//        m--;
//        if (m<0) {
//            m =4;
//        }
//        $('.big-pic-list li').eq(m).fadeIn(500).siblings().fadeOut();
//     $('.big-dian-list li').eq(m).addClass('active').siblings().removeClass('active');
//
// })
//    $('.big-dian-list li').hover(function () {
//        console.log(m);
//        if($(this).index()!=m){
//            $(this).css('background-color','#fff');
//
//        }
//        $('.big-dian-list li').eq(m).addClass('active').siblings().removeClass('active');
//
//    },function () {
// $(this).css('background-color','#858b8a');

// $('.big-dian-list li').not($('.big-dian-list li').eq(m)).removeClass('active');

})


