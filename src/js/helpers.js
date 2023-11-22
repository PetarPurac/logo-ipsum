const helpers = {
    html: document.querySelector('html'),
    body: document.querySelector('body'),

	topScroll: 0,
	isScrollDisabled: false,
	disabledScrollClass: 'scroll-disabled',

    init: function() {
        this.isTouch();
    },


    isTouch: function() {
        const isTouchDevice = ('ontouchstart' in window || navigator.msMaxTouchPoints > 0);
        const isMaxWidthMobile = window.matchMedia('screen and (max-width: 992px)').matches;

        (isTouchDevice && isMaxWidthMobile) ? this.html.classList.add('touch-device') : this.html.classList.add('no-touch-device');
	},

	disableScroll: function() {
		if (!this.isScrollDisabled) {
			this.body.classList.add(this.disabledScrollClass);
			this.isScrollDisabled = true;
		}
	},

	enableScroll: function() {
		this.body.classList.remove(this.disabledScrollClass);
		this.isScrollDisabled = false;
	},

	debounce: function(func, delay) {
		let timeoutId;
		return function (...args) {
			const context = this;
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				func?.apply(context, args);
			}, delay);
		};
	}

}

export default helpers;