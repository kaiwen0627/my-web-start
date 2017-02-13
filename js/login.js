/**
 * Created by KaiWen on 2017/2/2.
 */
$(function () {
    $('.login-container ul li').on('click',function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('.tab').eq($(this).index()).addClass('active').siblings().removeClass('active');
    })
})