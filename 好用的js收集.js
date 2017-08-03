// 添加类与移除类
$('.link-1').on('click', 'a', function () {
    $(this).addClass('login-checked').siblings().removeClass('login-checked')
})
// 下拉表单
$(document).on('click', function () {
    $(".link-1").slideUp(100);
    $(".link-2").slideUp(100);
});
$('.right-top').on('click', function (event) {
    event.stopPropagation();
    $(".link-1").slideToggle(100);
})
// 表单验证
function textId() {
    var patten = new RegExp(/(^\d{15}$)|(^\d{17}(\d|X)$)/);
    var a = $('#userId').val()
    if (patten.test(a)) {
        $('.hidden-id').css({
            visibility: "hidden"
        })
    } else {
        $('.hidden-id').css({
            visibility: "visible"
        })
    }
}
// div底部全屏高展示
window.onload = function () {
    changeHeight();
}
//当浏览器窗口大小改变时，设置显示内容的高度  
window.onresize = function () {
    changeHeight();
}
// 四种消息公用同一个高，如需要不同高可复制四份。
function changeHeight() {
    var sh = document.documentElement.scrollHeight
    var ch = document.documentElement.clientHeight
    var h = $('.white-full').height()
    var ch = document.documentElement.offsetHeight
    h = (sh < ch) ? ch - 380 : sh - 280
    $('.white-full').css({
        height: h + "px"
    })
}