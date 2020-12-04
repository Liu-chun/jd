var wrap = document.querySelector('.lunbo')
        var next = document.querySelector('.lunbo-right')
        var prev = document.querySelector('.lunbo-left')
        var pic = document.querySelectorAll('.container img')
        var page = document.querySelectorAll('.page li')

        //  声明一个变量 用来记录图片的下标
        var index = 0;
        //  绑定事件
        next.onclick = function () {
            autoPlay();
        }

        //   自动播放函数
        function autoPlay() {
            index++;
            //   判断 是否到了最后一张图片
            if (index > 4) {
                index = 0;
            }
            //  进行样式重置
            for (var i = 0; i < pic.length; i++) {
                pic[i].classList.remove('active')
                page[i].classList.remove('newPage')
            }
            pic[index].classList.add('active')
            page[index].classList.add('newPage')
        }

        prev.onclick = function () {
            index--;
            //   判断 是否到了最后一张图片
            if (index < 0) {
                index = 4;
            }
            //  进行样式重置
            for (var i = 0; i < pic.length; i++) {
                pic[i].classList.remove('active')
                page[i].classList.remove('newPage')
            }
            pic[index].classList.add('active')
            page[index].classList.add('newPage')
        }

        //   鼠标经过分页器控制图片切换
        page.forEach(function (item, index_page) {
            item.onmouseenter = function () {
                //  进行样式重置
                for (var i = 0; i < pic.length; i++) {
                    pic[i].classList.remove('active')
                    page[i].classList.remove('newPage')
                }
                //  保证轮播的一致性
                index = index_page
                pic[index].classList.add('active')
                this.classList.add('newPage')
            }
        })



        //   实现自动轮播 
        var timer = setInterval(autoPlay, 2000)

        //  鼠标进入轮播区域 清除自动播放
        wrap.onmouseenter = function () {
            clearInterval(timer);
        }
        wrap.onmouseleave = function () {

            timer = setInterval(autoPlay, 2000)
        }

        $(document).ready(function () {
            function fixHeight() {
                var headerHeight = $("#switcher").height();
                $("#iframe").attr("height", $(window).height() - 54 + "px");
            }
            $(window).resize(function () {
                fixHeight();
            }).resize();

            $('.icon-monitor').addClass('active');

            $(".icon-mobile-3").click(function () {
                $("#by").css("overflow-y", "auto");
                $('#iframe-wrap').removeClass().addClass('mobile-width-3');
                $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });

            $(".icon-mobile-2").click(function () {
                $("#by").css("overflow-y", "auto");
                $('#iframe-wrap').removeClass().addClass('mobile-width-2');
                $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });

            $(".icon-mobile-1").click(function () {
                $("#by").css("overflow-y", "auto");
                $('#iframe-wrap').removeClass().addClass('mobile-width');
                $('.icon-tablet,.icon-mobile,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });

            $(".icon-tablet").click(function () {
                $("#by").css("overflow-y", "auto");
                $('#iframe-wrap').removeClass().addClass('tablet-width');
                $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });

            $(".icon-monitor").click(function () {
                $("#by").css("overflow-y", "hidden");
                $('#iframe-wrap').removeClass().addClass('full-width');
                $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });
        });

        function Responsive($a) {
            if ($a == true) $("#Device").css("opacity", "100");
            if ($a == false) $("#Device").css("opacity", "0");
            $('#iframe-wrap').removeClass().addClass('full-width');
            $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
            $(this).addClass('active');
            return false;
        };