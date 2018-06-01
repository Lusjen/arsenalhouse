var developerPage = (function() {

    var devGal = $('.developer__gallery');

    var btns = document.querySelector('.js-developer__description_logos');

    var tabContent = document.querySelectorAll('.developer__tab');

    btns.addEventListener('click', function(e) {
        if(e.target.dataset.company) {
            tabContent.forEach(function(tab) {
                tab.classList.remove('developer__tab_visible');
            });
            document.querySelector('.developer__tab_' + e.target.dataset.company).classList.add('developer__tab_visible')
        }
    })

    devGal.slick({
        slidesToShow: 6,
        nextArrow: $('.developer__slider-arrow_right'),
        prevArrow: $('.developer__slider-arrow_left'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
          ]
    })

})();