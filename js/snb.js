window.onload = function () {
    const htmlElem = document.querySelector('html');
    const header = document.querySelector('.header');
    const gnbLi = document.querySelectorAll('.gnb .item');
    const detailUtil = document.querySelector('.detail-util');
    const utilMenu = document.querySelector('.detail-util .menu');
    
    // 헤더 스크롤 고정
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
};
