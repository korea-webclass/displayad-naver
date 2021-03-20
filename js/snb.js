window.onload = function () {
    const detailUtil = document.querySelector('.detail-util');
    const utilMenu = document.querySelector('.detail-util .menu');
    
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

    // 헤더 우측 메뉴
    detailUtil.addEventListener('mouseenter', function () {
        utilMenu.classList.add('on');
    });
    detailUtil.addEventListener('mouseleave', function () {
        utilMenu.classList.remove('on');
    });
};
