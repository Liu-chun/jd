var d2 = document.querySelectorAll('.dbb21 img')
var li = document.querySelectorAll('.dbb22 i')
var d1 = document.querySelector('.dbb2 ')
var zuo = document.querySelector('.sp1')
var you = document.querySelector('.sp2')

var b = 0
function tu() {
    b++
    if (b > 5) {
        b = 0
    }
    for (i = 0; i < li.length; i++) {
        li[i].classList.remove('d2i')
        d2[i].classList.remove('img1')
    }
    li[b].classList.add('d2i')
    d2[b].classList.add('img1')
}
you.onclick = function () {
    tu();
}
zuo.onclick = function () {
    b--
    if (b < 0) {
       b = 5
    }
    for (i = 0; i < li.length; i++) {
        li[i].classList.remove('d2i')
        d2[i].classList.remove('img1')
    }
    li[b].classList.add('d2i')
    d2[b].classList.add('img1')    
}
li.forEach(function (item, indxe) {
    item.onmousemove = function () {
        for (i = 0; i < li.length; i++) {
            li[i].classList.remove('d2i')
            d2[i].classList.remove('img1')
        }
        b = indxe
        this.classList.add('d2i')
        d2[indxe].classList.add('img1')
    }
})
var time = setInterval(tu, 4000)
d1.onmouseenter = function () {
    clearInterval(time)
}
d1.onmouseleave = function () {
    time = setInterval(tu, 4000)
}


var tu1 = document.querySelectorAll('.dbc2 img')
var l1 = document.querySelectorAll('.dbc2 li')
var di1 = document.querySelector('.dbc2 div ')

var c = 0
function tup() {
    c++
    if (c > 4) {
        c = 0
    }
    for (i = 0; i < l1.length; i++) {
        l1[i].classList.remove('li1')
        tu1[i].classList.remove('img2')
    }
    l1[c].classList.add('li1')
    tu1[c].classList.add('img2')
}

l1.forEach(function (item, indxe) {
    item.onmousemove = function () {
        for (i = 0; i < l1.length; i++) {
            l1[i].classList.remove('li1')
            tu1[i].classList.remove('img2')
        }
        c = indxe
        this.classList.add('li1')
        tu1[indxe].classList.add('img2')
    }
})
var time1 = setInterval(tup, 3000)
di1.onmouseenter = function () {
    clearInterval(time1)
}
di1.onmouseleave = function () {
    time1 = setInterval(tup, 3000)
}


var ul = document.querySelector('.dt')
var li1 = document.querySelectorAll('.ce a')
var dd = document.querySelectorAll('.dd')


window.onscroll = function () {
    var weizhi = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
   
    if (weizhi > 300) {
        ul.style.display = 'block'
    } else {
        ul.style.display = 'none'
    }
    dd.forEach(function (item, index) {
        if (item.offsetTop - weizhi < 200) {
            for (i = 0; i < li1.length; i++) {
                li1[i].classList.remove('aaa');
            }
            li1[index].classList.add('aaa');
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