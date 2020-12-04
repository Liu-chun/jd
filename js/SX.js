var d2 = document.querySelector('.dbb21')
var li = document.querySelectorAll('.dbb22 i')
var d1 = document.querySelector('.dbb2')
var zuo = document.querySelector('.sp1')
var you = document.querySelector('.sp2')

var b = 0
var m = 0
var timer
function tu() {
    b++
    if (b > 6) {
        m = 0
        d2.style.marginLeft = '0px'
        b = 1
    }
    timer = setInterval(function () {
        m += 20;
        if (m >= 800 * b) {
            clearInterval(timer)
            m = 800 * b
        }
        d2.style.marginLeft = -m + 'px';
        for (i = 0; i < li.length; i++) {
            li[i].classList.remove('d2i')
        }
        li[b > 5 ? 0 : b].classList.add('d2i')
    }, 16.7)

}
you.onclick = function () {
    tu();
}
zuo.onclick = function () {
    b--
    if (b < 0) {
        m = 4800
        d2.style.marginLeft = '-11418px'
        b = 5
    }
    timer = setInterval(function () {
        m -= 20;
        if (m <= 800 * b) {
            clearInterval(timer)
            m = 800 * b
        }
        d2.style.marginLeft = -m + 'px';
        for (i = 0; i < li.length; i++) {
            li[i].classList.remove('d2i')
        }
        li[b].classList.add('d2i')
    }, 16.7)
}
li.forEach(function (item, indxe) {
    item.onclick = function () {
        for (i = 0; i < li.length; i++) {
            li[i].classList.remove('d2i')
        }
        this.classList.add('d2i')
        timer = setInterval(function () {
            if (indxe > b) {
                m += 20;
                if (m >= 800 * indxe) {
                    clearInterval(timer)
                    m = 800 * b
                    b = indxe
                }
                d2.style.marginLeft = -m + 'px'
            } else if (indxe < b) {
                m -= 20;
                if (m <= 800 * indxe) {
                    clearInterval(timer)
                    m = 800 * b
                    b = indxe
                }
                d2.style.marginLeft = -m + 'px'
            }
        }, 16.7)
    }
})
var time = setInterval(tu, 4000)
d1.onmouseenter = function () {
    clearInterval(time)
}
d1.onmouseleave = function () {
    time = setInterval(tu, 4000)
}
var timer1
var sp3 = document.querySelector('.sp3')
var sp4 = document.querySelector('.sp4')
var dcb22b = document.querySelector('.dcb22b')
var f = 0
var c = 0
sp4.onclick = function () {
    f++
    if (f > 2) {
        c = 0
        dcb22b.style.marginLeft = '0px'
        f = 1
    }
    timer1 = setInterval(function () {
        c += 20;
        if (c >= 790 * f) {
            c = 790 * f
            clearInterval(timer1)
        }
        dcb22b.style.marginLeft = -c + 'px';
    }, 16.7)
}
sp3.onclick = function () {
    f--
    if (f < 0) {
        c = 1580
        dcb22b.style.marginLeft = '-1580px'
        f = 1
    }
    timer1 = setInterval(function () {
        c -= 20;
        if (c <= 790 * f) {
            c = 790 * f
            clearInterval(timer1)
        }
        dcb22b.style.marginLeft = -c + 'px';
    }, 16.7)
}

var qie = document.querySelectorAll('.dcb1>div')
var p3 = document.querySelectorAll('.p3')

qie.forEach(function (item, index) {
    item.onclick = function () {
        for (var j = 0; j < qie.length; j++) {
            qie[j].classList.remove('bian')
            p3[j].classList.remove('pp3')
        }
        this.classList.add('bian')
        p3[index].classList.add('pp3')
    }
})

var ul = document.querySelector('.d8')
var li1 = document.querySelectorAll('.ul3 li')
var dd = document.querySelectorAll('.dd')


window.onscroll = function () {
    var weizhi = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
   
    if (weizhi > 500) {
        ul.style.display = 'block'
    } else {
        ul.style.display = 'none'
    }
    dd.forEach(function (item, index) {
        if (item.offsetTop - weizhi < 200) {
            for (i = 0; i < li1.length; i++) {
                li1[i].style.backgroundColor = 'rgba(34,34,34,.4)';
            }
            li1[index].style.backgroundColor = '#00c65d';
        }
    })
}
var timer3

li1.forEach(function (item, index) {
    item.onclick = function () {
        console.log(index);
        var ddy = dd[index].offsetTop;
        var dy = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        timer3 = setInterval(function () {
            if (dy < ddy) {
                dy += 50;
                if (dy >= ddy) {
                    clearInterval(timer3)
                    dy = ddy
                }
                document.documentElement.scrollTop = dy;
                document.body.scrollTop = dy;
            } else if (dy > ddy) {
                dy -= 50;
                if (dy <= ddy) {
                    clearInterval(timer3)
                    dy = ddy
                }
                document.documentElement.scrollTop = dy;
                document.body.scrollTop = dy;
            }
        }, 16.7)
    }
})
var timer4
var ding = document.querySelector('.ding')
ding.onclick = function(){
    var db = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
    
    timer4 = setInterval(function () {
        db -= 50
        if (db <= 0) {
            clearInterval(timer4)
            db = 0    
        }
        document.documentElement.scrollTop = db;
        document.body.scrollTop = db;
    }, 16.7)
}