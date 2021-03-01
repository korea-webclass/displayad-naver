window.onload = function () {
    const htmlElem = document.querySelector('html');
    const header = htmlElem.querySelector('.header');
    const gnb = htmlElem.querySelector('.gnb');
    const gnbSub = htmlElem.querySelector('.sub');
    let on;

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
    gnb.addEventListener('mouseover', over);
    gnb.addEventListener('mouseout', out);
    gnbSub.addEventListener('mouseout', gnbSubOut);

    function over(e) {
        let a = e.target;
        let li = a.parentNode;
        let sub = li.querySelector('.sub')
        if (a.tagName !== 'A') return;
        if (sub) {
            sub.classList.add('on');
            header.classList.add('sub');
            on = sub;
        }
    }

    function out(e) {
        let a = e.target;
        let li = a.parentNode;
        let sub = li.querySelector('.sub')
        if (a.tagName !== 'A') return;
        if (onOff(e.relatedTarget)) {
            sub.classList.remove('on');
            // header.classList.remove('sub');
        }
    }

    function gnbSubOut(e) {
        let a = e.target;
        if (a.tagName !== 'A') return;
        console.log(a)
    }

    function onOff(relatedTarget) {
        console.log(relatedTarget);
        while (relatedTarget.tagName !== 'HTML') {
            console.log(relatedTarget);
            if (relatedTarget === on.parentNode) {
                return false;
            }
            // console.log(relatedTarget);
            relatedTarget = relatedTarget.parentNode;
            // console.log(relatedTarget);
        }
        return true
    }
    











    // relatedTarget는 마우스가 나간 위치의 객체를 줌
    // 너가 도착한 곳 태그명이 HTML이 아니잖어? 응! relatedTarget parentNode
    










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
