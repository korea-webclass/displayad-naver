window.onload = function () {
    const htmlElem = document.querySelector('html');
    const header = htmlElem.querySelector('.header');
    // const gnb = htmlElem.querySelector('.gnb');
    const gnbLi = htmlElem.querySelectorAll('.gnb .item');
    // const gnbSub = htmlElem.querySelector('.sub');
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
