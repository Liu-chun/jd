var dc2 = document.querySelectorAll('.dc2')
var a3 = document.querySelectorAll('.a3')

a3.forEach(function (item, index_a3) {
    item.onmouseenter = function () {
        for (var i = 0; i < dc2.length; i++) {
            dc2[i].classList.remove('dc3')
            a3[i].classList.remove('aa')
        }
        dc2[index_a3].classList.add('dc3')
        this.classList.add('aa')
    }
})

var sp2 = document.querySelector('.sp2')
var sp1 = document.querySelector('.sp1')
var dca2 = document.querySelectorAll('.dca2')
var dca1a = document.querySelectorAll('.dca1 a')

var index = 0;
sp2.onclick = function () {
    index++;
    if (index > dca2.length - 1) {
        index = 0
    }
    for (var i = 0; i < dca2.length; i++) {
        dca2[i].classList.remove('dca3')
        dca1a[i].classList.remove('ab')
    }
    dca2[index].classList.add('dca3')
    dca1a[index].classList.add('ab')
}
sp1.onclick = function () {
    index--;
    if (index < 0) {
        index = dca2.length - 1
    }
    for (var i = 0; i < dca2.length; i++) {
        dca2[i].classList.remove('dca3')
        dca1a[i].classList.remove('ab')
    }
    dca2[index].classList.add('dca3')
    dca1a[index].classList.add('ab')
}


dca1a.forEach(function (item, index_dca1a) {
    item.onmouseenter = function () {
        for (var i = 0; i < dca2.length; i++) {
            dca2[i].classList.remove('dca3')
            dca1a[i].classList.remove('ab')
        }
        index = index_dca1a
        dca2[index].classList.add('dca3')
        this.classList.add('ab')
    }
})

var next = document.querySelector('.sp4')
var prev = document.querySelector('.sp3')
var pic = document.querySelectorAll('.dca4')
var page = document.querySelectorAll('.dca12 a')
var index2 = 0
next.onclick = function () {
    index2++;
    if (index2 > pic.length - 1) {
        index2 = 0
    }
    for (var i = 0; i < pic.length; i++) {
        pic[i].classList.remove('dca3')
        page[i].classList.remove('ab')
    }
    pic[index2].classList.add('dca3')
    page[index2].classList.add('ab')
}

prev.onclick = function () {
    index2--;
    if (index2 < 0) {
        index2 = pic.length - 1
    }
    for (var i = 0; i < pic.length; i++) {
        pic[i].classList.remove('dca3')
        page[i].classList.remove('ab')
    }
    pic[index2].classList.add('dca3')
    page[index2].classList.add('ab')
}


page.forEach(function (item, index_page) {
    item.onmouseenter = function () {
        for (var i = 0; i < pic.length; i++) {
            pic[i].classList.remove('dca3')
            page[i].classList.remove('ab')
        }
        index2 = index_page
        pic[index2].classList.add('dca3')
        this.classList.add('ab')
    }
})


var all = document.querySelector('.all')
var shopName = document.querySelectorAll('.shopName')
var product = document.querySelectorAll('.product')
var add = document.querySelectorAll('.a2')
var reduce = document.querySelectorAll('.a1')
var proNum = document.querySelectorAll('.ul input')
var count = document.querySelectorAll('.ddd2 strong')
var singlePrice = document.querySelectorAll('.ddd1 strong')
var allnum = document.querySelector('.e1')
var allprice = document.querySelector('.e2')

all.onclick = function () {
    for (var i = 0; i < shopName.length; i++) {
        shopName[i].checked = this.checked;
    }
    for (var i = 0; i < product.length; i++) {
        product[i].checked = this.checked;
    }
    countPrice()
}
function countPrice() {
    allnum.innerHTML = '0';
    allprice.innerHTML = '0.00'
    var all_num = 0;
    var all_price = 0;
    for (var i = 0; i < product.length; i++) {
        if (product[i].checked) {
            all_num += parseInt(proNum[i].value)
            allnum.innerHTML = all_num;
            all_price += parseFloat(count[i].innerHTML)
            allprice.innerHTML = all_price.toFixed(2)
        }
    }
}
shopName.forEach(function (item, index) {
    item.onclick = function () {
        var ele = this.parentNode.nextElementSibling.children;
        for (var i = 0; i < ele.length; i++) {
            ele[i].children[0].checked = this.checked
        }
        var shop_num = 0;
        for (var i = 0; i < shopName.length; i++) {
            if (shopName[i].checked) {
                shop_num++;
            }
        }
        if (shop_num == shopName.length) {
            all.checked = true;
        } else {
            all.checked = false;
        }
        countPrice();
    }
})
product.forEach(function (item, index) {
    item.onclick = function () {
        var brother = this.parentNode.parentNode.children;
        var num = 0
        for (var i = 0; i < brother.length; i++) {
            if (brother[i].children[0].checked) {
                num++;
            }
        }
        if (num == brother.length) {
            this.parentNode.parentNode.previousElementSibling.children[0].checked = true;
        } else {
            this.parentNode.parentNode.previousElementSibling.children[0].checked = false;

        }

        var all_num = 0
        for (var i = 0; i < product.length; i++) {
            if (product[i].checked) {
                all_num++;
            }
        }
        if (all_num == product.length) {
            all.checked = true;
        } else {
            all.checked = false;
        }
        countPrice()
    }
})
add.forEach(function (item, index) {
    item.onclick = function () {
        var num = parseInt(proNum[index].value)
        num++;
        proNum[index].value = num;
        count[index].innerHTML = (num * singlePrice[index].innerText).toFixed(2)
        product[index].checked = true;
        var element = this.parentNode.parentNode.parentNode.parentNode.children;
        var pro_num = 0;
        for (var i = 0; i < element.length; i++) {
            if (element[i].children[0].checked) {
                pro_num++;
            }
        }
        if (pro_num == element.length) {
            this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[0].checked = true;
        } else {
            this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[0].checked = false;
        }

        var shop_num = 0;
        for (var i = 0; i < shopName.length; i++) {
            if (shopName[i].checked) {
                shop_num++;
            }
        }
        if (shop_num == shopName.length) {
            all.checked = true;
        } else {
            all.checked = false;
        }
        countPrice();
    }
})
reduce.forEach(function (item, index) {
    item.onclick = function () {
        var num = parseInt(proNum[index].value)
        num--;
        if (num <= 1) {
            num = 1;
        }
        proNum[index].value = num;
        count[index].innerHTML = (num * singlePrice[index].innerText).toFixed(2)
        countPrice();
    }
})