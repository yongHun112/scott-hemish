
$(function () {
    /* 🔴🔴🔴🔴🔴  smooth scrolling 🔴🔴🔴🔴🔴 */
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.ticker.add(() => {
        ScrollTrigger.update();
    });


    /* 🔴🔴🔴🔴🔴  cursor 애니메이션 🔴🔴🔴🔴🔴 */
    /* 
                const $cursor = $('.cursor');
                let mouseX = 0, mouseY = 0;
                let currentX = 0, currentY = 0;
    
                $(window).on('mousemove', function (e) {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
    
                });
                function animateCursor() {
                    currentX += (mouseX - currentX) * 0.15;
                    currentY += (mouseY - currentY) * 0.15;
                    $cursor.css({
                        left: currentX + 'px',
                        top: currentY + 'px'
                    });
                    requestAnimationFrame(animateCursor);
                }
                animateCursor(); // 실행
    
                $('body a').on('mousemove', function () {
                    $('.cursor').addClass('active');
                })
    
                $('body a').on('mouseleave', function () {
                    $('.cursor').removeClass('active');
                }) */


    /* 🔴🔴🔴🔴🔴 헤더 스크롤 🔴🔴🔴🔴🔴 */
    let prevScrollbar = 0; /* 이전 스크롤 위치  */
    $(window).on('scroll', function () {
        let scrollBar = $(window).scrollTop();  /* 현재 스크롤 위치 */

        /*                 console.log(prevScrollbar);
                        console.log(scrollBar); */


        if (scrollBar >= prevScrollbar) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }

        prevScrollbar = scrollBar;

    })


    /* 🔴🔴🔴🔴🔴 네비 버튼 아코디언 🔴🔴🔴🔴🔴*/
    $('.header .mobile .mobile_info .depth-01').on('click', function () {

        if ($(this).siblings('.depth-02').css('display') == 'none') {
            $('.header .mobile .mobile_info .depth-02').slideUp();
            $(this).siblings('.depth-02').slideDown();

            $('.header .mobile .mobile_info .depth-01').removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).siblings('.depth-02').slideUp();
            $(this).removeClass('active');
        }
    })


    /*🔴🔴🔴🔴🔴 네비 버튼 열고 닫기 🔴🔴🔴🔴🔴 */
    $('.header .nav .menu').on('click', function () {
        $('.mobile').addClass('active');
    })
    $('.header .mobile .mobile_header .menu').on('click', function () {
        $('.mobile').removeClass('active');
    })
    gsap.registerPlugin(ScrollTrigger, SplitText);

});