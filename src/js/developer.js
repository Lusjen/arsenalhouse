var developerPage = (function() {

    var devGal = $('.developer__gallery');
    var btns = document.querySelector('.js-developer__description_logos');
    var logos = document.querySelectorAll('.js-developer__tab-btn');
    var tabContent = document.querySelectorAll('.developer__tab');

    btns.addEventListener('click', function(e) {

        var current = e.target;

        if(current.parentElement.classList.contains("developer__description_logo")) {
            logos.forEach(function(logo) {
                logo.classList.remove('logo_active');
                current.parentElement.classList.add('logo_active');
            });
        }

        if(e.target.dataset.company) {
            tabContent.forEach(function(tab) {
                tab.classList.remove('developer__tab_visible');
            });
            document.querySelector('.developer__tab_' + e.target.dataset.company).classList.add('developer__tab_visible')
        }
        console.log(current);
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