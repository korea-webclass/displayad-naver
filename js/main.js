window.onload = function () {
    const htmlElem = document.querySelector('html');
    const header = htmlElem.querySelector('.header');
    const gnbLi = htmlElem.querySelectorAll('.gnb .item');
    const count = document.querySelector('.main .ad-data-content .count');
    const detailUtil = document.querySelector('.detail-util');
    const utilMenu = document.querySelector('.detail-util .menu');
    
    // 헤더 스크롤 고정
    // window.addEventListener('scroll', scroll);
    // function scroll() {
    //     if (htmlElem.scrollTop > 0) {
    //         console.log(htmlElem.scrollTop)
    //         header.classList.add('header-scroll');
    //     } else {
    //         header.classList.remove('header-scroll');
    //     }
    // };
    // scroll();

    // 헤더 서브메뉴
    $(function(){
        $("ul.sub").hide();
        $(".gnb > .item").hover(function () {
            $("ul:not(:animated)",this).slideDown("fast");
        },
        function () {
            $("ul",this).slideUp("fast");
        });
    });
    
    // for (let i = 0; i < gnbLi.length; i++) {
    //     gnbLi[i].addEventListener('mouseenter', enter);
    //     gnbLi[i].addEventListener('mouseleave', leave);
    // }

    // function enter(e) {
    //     let li = e.target;
    //     let gnbSub = li.querySelector('.sub');
    //     if (gnbSub) {
    //         gnbSub.classList.add('on');
    //         header.classList.add('sub');
    //     }
    // }

    // function leave(e) {
    //     let li = e.target;
    //     let gnbSub = li.querySelector('.sub');
    //     if (gnbSub) {
    //         gnbSub.classList.remove('on');
    //         header.classList.remove('sub');
    //     }
    // }
    
    // 헤더 우측 메뉴
    detailUtil.addEventListener('mouseenter', function () {
        utilMenu.classList.add('on');
    });
    detailUtil.addEventListener('mouseleave', function () {
        utilMenu.classList.remove('on');
    });

    // visual 슬라이드 영역
    var swiper = new Swiper('.swiper-container-visual', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // success 슬라이드 영역
    var swiper = new Swiper('.swiper-container-success', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 120,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // ad-area 슬라이드 영역
    var swiper = new Swiper('.swiper-container-ad-area', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    // 카운트 다운 애니메이션
    window.addEventListener('scroll', countScroll);
    function countScroll() {
        // console.log(htmlElem.scrollTop);
        if (htmlElem.scrollTop === 2916) {
            countConTxt();
        }
    };

    
    function countConTxt() {
        var memberCountConTxt= 30000000;
    
        $({val: 0}).animate({val: memberCountConTxt}, {
            duration: 2000,
            step: function() {
                var num = numberWithCommas(Math.floor(this.val));
                $(".memberCountCon").text(num);
            },
            complete: function() {
                var num = numberWithCommas(Math.floor(this.val));
                $(".memberCountCon").text(num);
            }
        });
      
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }







    // var memberCountConTxt= 30000000;

    // $({val: 0}).animate({val: memberCountConTxt}, {
    //     duration: 2000,
    //     step: function() {
    //         var num = numberWithCommas(Math.floor(this.val));
    //         $(".memberCountCon").text(num);
    //     },
    //     complete: function() {
    //         var num = numberWithCommas(Math.floor(this.val));
    //         $(".memberCountCon").text(num);
    //     }
    // });
  
    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
};
