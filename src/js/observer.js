const observer = {
    textImageSection: document.querySelector('.js-text-image'),
    videoPopup: document.querySelector('.js-video-popup'),

    init: function() {
        this.toggleClassIfVisible(document.querySelector('.js-diagram'), 'active');
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
      }
}

export default observer;