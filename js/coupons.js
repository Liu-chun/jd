// 优惠券
var cp_mycp = document.querySelector('.cp_mycp')
var cp_mycp_cont = document.querySelector('.cp_mycp_cont')
cp_mycp.onmouseover = function () {
    cp_mycp_cont.style.display = 'block'
    // sk_buymini.classList.remove('sk_show');
    cp_mycp.style.backgroundColor = '#fff';
    cp_mycp.style.borderBottomColor = '#fff'

}
cp_mycp.onmouseleave = function () {
    cp_mycp_cont.style.display = 'none'
    cp_mycp.style.backgroundColor = '#f9f9f9'
    cp_mycp.style.borderBottomColor = '#dfdfdf'

}
cp_mycp_cont.onmouseover = function () {
    cp_mycp.style.backgroundColor = '#fff';
    cp_mycp.style.borderBottomColor = '#fff'
    cp_mycp_cont.style.display = 'block'
}
cp_mycp_cont.onmouseleave = function () {
    cp_mycp.style.borderBottomColor = '#dfdfdf'
    cp_mycp.style.backgroundColor = '#f9f9f9';
    cp_mycp_cont.style.display = 'none'
}

// 窗口滚动
var cp_navbar = document.querySelector('.cp_navbar')
window.onscroll = function () {
    var sctop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    // console.log(sctop);
    if (sctop > 124) {
        //    js 中id 可以直接使用  但是不建议
        cp_navbar.style.position = 'fixed';
        cp_navbar.style.top = '0px';
        cp_navbar.style.zIndex = '99999999'
    } else {
        cp_navbar.style.position = 'static'
    }
}
//tab切换
var cp_navbar_list = document.querySelectorAll('.cp_navbar li');
var cp_container = document.querySelectorAll('.cp_container_all');

cp_navbar_list.forEach(function (item, index) {
    item.onclick = function () {
        for (var i = 0; i < cp_navbar_list.length; i++) {
            cp_container[i].classList.remove('cp_show');
        }
        cp_container[index].classList.add('cp_show');
    }
})