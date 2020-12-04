        var sgmUl = document.querySelector('.sg-middle ul');
        var sgmleft = document.querySelector('.sgmleft');
        var sgmright = document.querySelector('.sgmright');
        var sgmIndex = 0;
        sgmright.onclick = function () {
            sgmIndex++;
            if (sgmIndex > 5) {
                sgmIndex = 1;
                sgmUl.style.marginLeft = 0;
            }
            move(sgmUl, -800 * sgmIndex, -70)
        }
        sgmleft.onclick = function () {
            sgmIndex--;
            if (sgmIndex < 0) {
                sgmIndex = 4;
                sgmUl.style.marginLeft = -800 * 5 + 'px';
            }
            move(sgmUl, -800 * sgmIndex, 70)
        }
        var lbtimer;
        function move(obj, target, speed) {
            clearInterval(lbtimer);
            lbtimer = setInterval(function () {
                var oldValue = parseInt(obj.offsetLeft);
                var newValue = oldValue + speed;
                if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
                    newValue = target;
                }
                obj.style.marginLeft = newValue + 'px';
                if (newValue == target) {
                    clearInterval(lbtimer)
                }
            }, 30)
        }

        
        var sgcc = document.querySelector('.sgcc');
        var sgHour = document.querySelector('.sg-hour')
        var sgMinute = document.querySelector('.sg-minute')
        var sgSec = document.querySelector('.sg-sec')
        var sgtimer = setInterval(function () {
            var cc = new Date();
            var cchour = cc.getHours();
            if (cchour % 2 != 0) {
                cchour -= 1;
            }
            if (cchour < 10) {
                sgcc.innerHTML ='0' + cchour + ':00';
            }else{
                sgcc.innerHTML = cchour + ':00';
            }
            var sgsj = new Date(`${cc.getFullYear()}-${cc.getMonth() + 1}-${cc.getDate()},${cchour + 2}:0:0`)
            var sgdjs = sgsj - cc;
            var sghour = parseInt(sgdjs / 1000 / 60 / 60);
            var sgmin = parseInt(sgdjs / 1000 / 60 % 60);
            var sgsec = parseInt(sgdjs / 1000 % 60);
            if (sgmin < 10) {
                sgmin = '0' + sgmin;
            }
            if (sgsec < 10) {
                sgsec = '0' + sgsec;
            }
            sgHour.innerHTML = '0' + sghour;
            sgMinute.innerHTML = sgmin;
            sgSec.innerHTML = sgsec;
        }, 1000)  
        
        
        var sgrUl = document.querySelector('.sg-right ul');
        var sgrPage = document.querySelectorAll('.sgr-page span');
        var sgrIndex = 0;
        var sgrPindex = 0;
        var sgrtimer = setInterval(function(){
            sgrIndex++;
            sgrPindex++;
            if (sgrIndex > 2) {
                sgrIndex = 1;
                sgrUl.style.marginLeft = 0;
            }
            move(sgrUl, -200 * sgrIndex, -18)
            if(sgrPindex>1){
                sgrPindex = 0;
            }
            raClass([sgrPage], ['sgrp-active'], sgrPindex)
        },4000)
        sgrPage.forEach(function(item,index){
            item.onmouseover = function(){
                if(index<sgrIndex){
                    move(sgrUl, -200 * index, 18)
                }else{
                    move(sgrUl, -200 * index, -18)
                }
                raClass([sgrPage], ['sgrp-active'],index)
                sgrIndex = index;
                sgrPindex = index;          
            }
            
        })    

        var content = document.querySelectorAll('.content');
        var nav = document.querySelectorAll('.navlist li');
        var navwrap = document.querySelector('.navlist');
        var arrColor = ['#64C33', '#ff0036', '#EA5F8D', '#0AA6E8', '#64C333', '#F15453', '#19C8A9']
        //  绑定滚动事件
        window.onscroll = function () {
            //  获取浏览器窗口的滚动值
            var sctop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            //  判断导航出现和隐藏
            if(sctop > 600){
                navwrap.style.top= '50px'
            }else{
                navwrap.style.top = '620px'
            }
            // console.log(sctop);
            //  获取内容的偏移值
            content.forEach(function (item, index) {
                // console.log(item.offsetTop);
                //  判断 当前的模块  item.offsetTop 获取每个模块的偏移量 偏移值 800   滚动值 700  滚动值 900
                if (item.offsetTop - sctop < 200 && item.offsetTop > sctop) {
                    for (var i = 0; i < nav.length; i++) {
                        nav[i].style.color = '#fff'
                    }
                    console.log(index);
                    nav[index].style.color = '#000'
                }
            })
        }

        var timer;
        //  绑定点击事件
        nav.forEach(function (item, index) {
            item.onclick = function () {
                console.log(index);
                console.log(content[index].offsetTop);
                var oftop = content[index].offsetTop;
                //  直到型
                //   document.documentElement.scrollTop = oftop;
                //   document.body.scrollTop = oftop;
                //  动画版  计时器
                //  获取当前的浏览器窗口的滚动值
                var nowSctop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
                timer = setInterval(function () {
                    //  判断运动方向    页面向下运动                    
                    if(nowSctop < oftop){
                        nowSctop += 50;
                        //  判断清楚计时器
                        if(nowSctop >= oftop){
                            clearInterval(timer)
                            nowSctop = oftop;
                        }
                        document.documentElement.scrollTop = nowSctop;
                        document.body.scrollTop = nowSctop;
                    }else if(nowSctop > oftop){
                        //  页面向上运动
                        nowSctop -= 50;
                        if(nowSctop <= oftop){
                            clearInterval(timer)
                            nowSctop = oftop;
                        }
                        document.documentElement.scrollTop = nowSctop;
                        document.body.scrollTop = nowSctop;
                    }
                }, 16.7)
            }
        })