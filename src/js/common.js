var arsenalhouseAppState = {
    menuOpen: false,
    scrollHidden: false,
    callbackOpen: false
};
//  =====================================================================================================================
//  Language open/close start
var langMenu=(function(){
    var navLangItem=document.querySelectorAll(".language");

    navLangItem.forEach(function(item) {
        item.addEventListener("click",function(e){
            e.preventDefault(),
            this.classList.contains("language__expanded") 
            ? this.classList.remove("language__expanded")
            : this.classList.add("language__expanded");
        });
    });
})();
//  Language open/close end
//  =====================================================================================================================

//  =====================================================================================================================
//  Fix header during scroll start
var navFixed = (function(){ 
    var header = document.querySelector('.header');
    var headerHeight = header.clientHeight;
    var fixed = header.offsetTop;
  
    function isScrolled() {
        if(window.pageYOffset > headerHeight * 2) {
            header.classList.add('header__fixed');
        } else {
            header.classList.remove('header__fixed');
        }
    };
    window.addEventListener('scroll' ,debounce(isScrolled, 100));
    //window.addEventListener('scroll', isScrolled);

})();
//  Fix header during scroll end
//  =====================================================================================================================

//  =====================================================================================================================
// Animation on scroll
var animateHTMLCtrl = (function() {
    var aniamteClass = 'animate-me',
    elems = document.querySelectorAll('.animate-me'),
    windowHeight = window.innerHeight,
    animatedElements;


    // Here debounce returns your passed functions and assigns them to new vars so that you can do removeEventListener
    var _debouncedScroll = debounce(_checkPosition, 100);
    var _debouncedInit = debounce(init, 100);

    // var _debouncedScroll = _checkPosition;
    // var _debouncedInit = init;

    // if to more elements to animate remove event listener from scroll
    function _checkForAnimatedElements() {
        elems = document.querySelectorAll('.animate-me');
        if(elems.length === 0 ) {
            window.removeEventListener('scroll', _debouncedScroll);
            window.removeEventListener('resize', _debouncedInit);
        }
    };

    function _addEventHandlers() {
      window.addEventListener('scroll', _debouncedScroll);
      window.addEventListener('resize', _debouncedInit);
    };
  
    function _checkPosition() {        
      for (var i = 0; i < elems.length; i++) {
        var posFromTop = elems[i].getBoundingClientRect().top;
        if (posFromTop - windowHeight <= -200) {
          elems[i].classList.remove(aniamteClass);
        }
      }
      _checkForAnimatedElements();
    };
    
    function init() {
        _addEventHandlers();
        _checkPosition();
    };

    setTimeout(_checkPosition, 500)

    return {
      init: init
    };
  
  })();

animateHTMLCtrl.init();
// Animation on scroll end
//  =====================================================================================================================

//  =====================================================================================================================
//  Main drop down menu
var dropDownMenu = (function() {
    var openMenuBtn = document.querySelector('.js-open-menu');
    var closeMenuBtn = document.querySelector('.js-close-menu');
    var menu = document.querySelector('.menu');

    function showMenu() {                
        if(menu.classList.contains('menu_closed')) {
            menu.classList.remove('menu_closed');
        };
    };

    // this one hides menu by addng class and shows scrollbar
    function hideMenu(){
        menu.classList.add('menu_closed');
        showScrollBar();
    };

    // show menu on click and add event listener to hide outside menu
    openMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showMenu();
        hideScrollBar();
        arsenalhouseAppState.menuOpen = true;
        arsenalhouseAppState.scrollHidden = true;
    });

    closeMenuBtn.addEventListener('click', function() {
        hideMenu();
        arsenalhouseAppState.menuOpen = false;
        arsenalhouseAppState.scrollHidden = false;
    });
})();
//  =====================================================================================================================
//  Main drop down menu

//  =====================================================================================================================
//  Preloader logic and animation start
var animateLogoCtrl = (function() {
  
    // Array.prototype.forEach.call(document.querySelectorAll('.letter_row'), animateAll);
  
    // function animateAll(element) {
    //   var offset = element.style.strokeDashoffset = element.getTotalLength();
    //   element.style.strokeDasharray = element.getTotalLength();
    //   var speed = offset < 1000 ? 5 : 12;
    //   function animate() {
    //     element.style.strokeDashoffset = offset;
    //       offset = offset - speed;
    //       if(offset >= 0) {
    //         requestAnimationFrame(animate);
    //       } else {
    //         element.style.strokeDashoffset = 0;
    //       }
    //   }
    //   animate();
    // }
  
    var squares = {
      innerLeft: document.querySelector('.inner_square_left'),
      innerRight: document.querySelector('.inner_square_right'),
      outerLeft: document.querySelector('.outer_square_left'),
      outerRight: document.querySelector('.outer_square_right')
    };
  
    var letters = {
      top: document.querySelector('.top_letter_row'),
      middle: document.querySelectorAll('.middle_letter_row'),
      bottom: document.querySelectorAll('.bottom_letter_row'),
      all: document.querySelectorAll('.letter_row')
    };
  
    var animationTime = {
      squares: 4,
      lettersDash: 5,
      lettersFill: 2,
      preloaderHide: 1
    };
  
    var preloader = document.querySelector('.preloader');
    var preloaderCover = document.querySelector('.preloader__cover');
  
    // Main animation function it gets dashStroke of each element and sets it dashStrokeOffset
    function animate(element, time, reverse, callback) {
  
      var offset = element.getTotalLength();
  
      element.style.strokeDasharray = offset;
      element.style.strokeDashoffset = offset;
  
      TweenLite.to(element, time, {
        css: {
          strokeDashoffset: 0
        }, 
        onComplete: animateFill});
        // Because pths strokeDashffset ins't set when page loads cover is used to hide svg? when loaded cover removed
        preloaderCover.style.display = 'none';
    }
  
    // Squaes dashStroke animation
    function squaresAnimation() {
      animate(squares.innerLeft, animationTime.squares);
      animate(squares.innerRight, animationTime.squares);
      animate(squares.outerLeft, animationTime.squares);
      animate(squares.outerRight, animationTime.squares);
    }
  
    // Letters dashStroke animation
    function lettersAnimation() {
      animate(letters.top, animationTime.lettersDash, false);
      Array.prototype.forEach.call(letters.middle, function(element) {
        animate(element, animationTime.lettersDash);
      });
      Array.prototype.forEach.call(letters.bottom, function(element) {
        animate(element, animationTime.lettersDash);
      });
    }
  
    // Letters fil animation
    function animateFill() {
      Array.prototype.forEach.call(letters.all, function(element) {
        TweenLite.to(element, animationTime.lettersFill, {
          css: {
            fill: '#b79d7c'
          },
          onComplete: hidePreloader
          });
      });
    };
  
    // Hide prelaoder after animation end
    function hidePreloader() {
      TweenLite.to(preloader, animationTime.preloaderHide, {
        css: {
          opacity: 0, 
          display: 'none'
        }
      });
      // Showing scrollbar again
      showScrollBar();
      // Adding flag to sessionStorage
      mainPageHeroAnimation();
    };
  
    function init() {
      // Adding flag to sessionStorage

  
      preloader.style.display = 'block';
  
      hideScrollBar();
      squaresAnimation();
      lettersAnimation();
      Array.prototype.forEach.call(letters, animate);
    }

    function checkDate() {
      if(localStorage.getItem('preloader')===null) {
        localStorage.setItem('preloader', Date.now());
        return true;
      }
      var hour = 3600 * 1000;
      if(Date.now() - localStorage.getItem('preloader') < hour) {
        return false;
      } else {
        localStorage.setItem('preloader', Date.now());
        return true;
      }
    }
  
    return {
      init: init,
      preloader: preloader,
      preloaderCover: preloaderCover,
      checkDate: checkDate
    };
  
  })();

  ;

  // If no preloader flag in sessionStorage
  if(animateLogoCtrl.checkDate()) {
    animateLogoCtrl.init();
  } else {
    animateLogoCtrl.preloader.style.display = 'none';
    // Because pths strokeDashffset ins't set when page loads cover is used to hide svg? when loaded cover removed
    animateLogoCtrl.preloaderCover.style.display = 'none';

    mainPageHeroAnimation();
  }

  function mainPageHeroAnimation() {
    if(document.querySelector('.animate-main-page-hero')) {
      document.querySelector('.animate-main-page-hero').classList.remove('animate-main-page-hero');
    }
  }

  // Preloader logic and animation end
  //  =====================================================================================================================

  //  =====================================================================================================================
  //  Callback form start

  var callbackForm = (function() {

    var showCallbackFormBtn = document.querySelectorAll('.js-show-callback-form');
    var hideCallbackFormBtn = document.querySelector('.js-hide-callback-form')
    var callbackFormModal = document.querySelector('.callback-form-modal');

    // Show form event
    showCallbackFormBtn.forEach(function(btn) {

      btn.addEventListener('click', function(e) {
        e.preventDefault();
  
        // Change app state
        arsenalhouseAppState.callbackOpen = true;
        // Check if menu open and scroll hidden
        if(!arsenalhouseAppState.menuOpen) {
          hideScrollBar();
        }
  
        callbackFormModal.classList.add('show-callback-modal');
  
      });
    })


    // Hide form event
    hideCallbackFormBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Change app sate
      arsenalhouseAppState.callbackOpen = false;
      // If menu closed - show scroll back
      if(!arsenalhouseAppState.menuOpen) {
        showScrollBar();
      }

      callbackFormModal.classList.remove('show-callback-modal');

    })


  })();

  //  Callback form end
  //  =====================================================================================================================


//  =====================================================================================================================
// Next view click start
(function() {
$('.next-view a').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).data().nextview).offset().top - 100
  }, 1000);
});
})();
// Next view click end
//  =====================================================================================================================


//  =====================================================================================================================
// success-modal-form
function success() {
  $(".success-modal").fadeIn();
  setTimeout(function() {
    $(".success-modal").fadeOut();
  }, 3000);
}

// end__success-modal-form end
//  =====================================================================================================================