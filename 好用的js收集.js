// 添加类与移除类
$('.link-1').on('click', 'a', function () {
    $(this).addClass('login-checked').siblings().removeClass('login-checked')
})
// 添加类与移除类并显示与隐藏
$('.college-list').on('click', 'li', function () {
    $(this).addClass('tc-on').siblings().removeClass('tc-on')
    var num = $(this).index() + 3;
    $(".tab-list").eq(num).show().siblings(".tab-list").hide();
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

// 截字
$('.tab-list li').each(function () {
    var str = $(this).find(".infobox h4").text();
    var strArray = str.split("")
    if (strArray.length > 7) {
        strArray1 = strArray.splice(0, 8).join("")
        strArray2 = strArray.splice(strArray.length - 2, 2).join("")
        $(this).find(".infobox h4").text(strArray1 + '... ' + strArray2)
    }
})
// 截字，浮动弹层
$('.tab-list li').each(function () {
    var str = $(this).find(".infobox h4").text();
    var strArray = str.split("")
    if (strArray.length > 7) {
        strArray1 = strArray.splice(0, 8).join("")
        strArray2 = strArray.splice(strArray.length - 2, 2).join("")
        $(this).find(".infobox h4").text(strArray1 + '... ' + strArray2)
        $(this).find(".sch-name").html(str).css("display", "none");
    } else {
        $(this).find(".sch-name").remove();
    }
})
$(".tab-list .infobox h4").mouseenter(function () {
    $(this).closest(".infobox").find('.sch-name').fadeIn()
})
$(".tab-list .infobox h4").mouseleave(function () {
    $(this).closest(".infobox").find('.sch-name').fadeOut()
})
// 改变html字体大小
window.onresize = function () {
    calcRam()
}

function calcRam() {
    var html = document.querySelector("html")
    var w = document.documentElement.clientWidth
    // 让页面字体大小为20px
    // 字体大小设置为12px以下，有些浏览器会转换为12px
    html.style.fontSize = w / 37.5 + "px"
}
calcRam()


// 开关切换
$(".exchange").on("click", function () {
    $(this).toggleClass("exon")
    if ($(this).hasClass("exon")) {
        $(this).text("已兑换")
    } else {
        $(this).text("我要兑换")
    }
    $(".tc-exchange").css({
        display: "block"
    })
    $(".tc-back,.tc-confirm").on("click", function () {
        $(".tc-exchange").css({
            display: "none"
        })
    })
})