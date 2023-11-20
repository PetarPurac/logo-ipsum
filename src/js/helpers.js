const helpers = {
    html: document.querySelector('html'),

    init: function() {
        this.isTouch();
    },


    isTouch: function() {
        const isTouchDevice = ('ontouchstart' in window || navigator.msMaxTouchPoints > 0);
        const isMaxWidthMobile = window.matchMedia('screen and (max-width: 992px)').matches;

        (isTouchDevice && isMaxWidthMobile) ? this.html.classList.add('touch-device') : this.html.classList.add('no-touch-device');
	}
}

export default helpers;