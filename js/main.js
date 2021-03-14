window.onload = function () {
    const htmlElem = document.querySelector('html');
    const header = htmlElem.querySelector('.header');
    // const gnb = htmlElem.querySelector('.gnb');
    const gnbLi = htmlElem.querySelectorAll('.gnb .item');
    // const gnbSub = htmlElem.querySelector('.sub');
    const count = document.querySelector('.main .ad-data-content .count');
    const detailUtil = document.querySelector('.detail-util');
    const utilMenu = document.querySelector('.detail-util .menu');
    

    // 헤더 스크롤
    window.addEventListener('scroll', scroll);
    function scroll() {
        if (htmlElem.scrollTop > 30) {
            header.classList.remove('on');
        } else {
            header.classList.add('on');
        }
    };

    // 헤더 서브메뉴
    for (let i = 0; i < gnbLi.length; i++) {
        gnbLi[i].addEventListener('mouseenter', enter);
        gnbLi[i].addEventListener('mouseleave', leave);
    }

    function enter(e) {
        let li = e.target;
        let gnbSub = li.querySelector('.sub');
        if (gnbSub) {
            gnbSub.classList.add('on');
            header.classList.add('sub');
        }
    }

    function leave(e) {
        let li = e.target;
        let gnbSub = li.querySelector('.sub');
        if (gnbSub) {
            gnbSub.classList.remove('on');
            header.classList.remove('sub');
        }
    }

    // 헤더 우측 메뉴
    detailUtil.addEventListener('mouseenter', function () {
        utilMenu.classList.add('on');
    });
    detailUtil.addEventListener('mouseleave', function () {
        utilMenu.classList.remove('on');
    });


    // swiper.js visual 슬라이드 영역
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

    // swiper.js success 슬라이드 영역
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

    // swiper.js success 슬라이드 영역
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











    // 헤더 - 서브메뉴 다 나오는 코드
    // for (let i = 0; i < mainMenuList.length; i++) {
    //     mainMenuList[i].addEventListener('mouseover', function () {
    //         subMenuHeight = this.querySelector('ul').offsetHeight;
    //         header.style.height = headerHeight + subMenuHeight + 'px';
    //     });
    //     mainMenuList[i].addEventListener('mouseout', function () {
    //         header.style.height = headerHeight + 'px';
    //     });
    // }
};
