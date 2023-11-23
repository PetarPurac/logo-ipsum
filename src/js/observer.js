const observer = {
    textImageSection: document.querySelector('.js-text-image'),
    videoPopup: document.querySelector('.js-video-popup'),

    init: function() {
        this.toggleClassIfVisible(document.querySelector('.js-diagram'), 'active');
        this.trapFocus(this.videoPopup);
    },

     toggleClassIfVisible: function(el, className) {
         document.addEventListener('scroll', () => {
            var rect = el.getBoundingClientRect();
            var isVisible =
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
            if (isVisible) {
              el.classList.add(className);
            } else {
              el.classList.remove(className);
            }
        })
      },

      trapFocus: function(element) {
        var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
        var firstFocusableEl = focusableEls[0];  
        var lastFocusableEl = focusableEls[focusableEls.length - 1];
        var KEYCODE_TAB = 9;
      
        element.addEventListener('keydown', function(e) {
          var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
      
          if (!isTabPressed) { 
            return; 
          }
      
          if ( e.shiftKey ) /* shift + tab */ {
            if (document.activeElement === firstFocusableEl) {
              lastFocusableEl.focus();
                e.preventDefault();
              }
            } else /* tab */ {
            if (document.activeElement === lastFocusableEl) {
              firstFocusableEl.focus();
                e.preventDefault();
              }
            }
        });
      }



}

export default observer;