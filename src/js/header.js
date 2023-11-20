
const header = {
    hamburgerBtn : document.querySelector('.js-header-hamburger'),
    nav: document.querySelector('.js-nav'),
    header: document.querySelector('.js-header'),
    main: document.querySelector('.js-main'),
    navActiveClass: 'nav--active',
    hamburgerActiveClass: 'opened',
    headerStickyClass: 'header--sticky',

    init: function() {
        this.handleHamburgerToggle();
        this.isMenuOpen();
        this.handleScrollEvent();
    },

    handleHamburgerToggle: function() {
        this.hamburgerBtn.addEventListener('click', () => {
            this.hamburgerBtn.classList.toggle(this.hamburgerActiveClass);
            this.hamburgerBtn.setAttribute('aria-expanded', this.isMenuOpen());
            this.handleNavigationToggle();
        })
    },

    isMenuOpen: function() {
        const isMenuOpen = this.hamburgerBtn.classList.contains(this.hamburgerActiveClass);
        return isMenuOpen;
    },

    handleNavigationToggle: function() {
      return this.isMenuOpen() ? this.nav.classList.add(this.navActiveClass) : this.nav.classList.remove(this.navActiveClass) 
    },

    handleScrollEvent: function() {
        const headerOffset = this.header.offsetTop;
        window.addEventListener('scroll', () => {
            if (window.scrollY > headerOffset) {
                this.header.classList.add(this.headerStickyClass);
                this.main.style.paddingTop = `${this.header.offsetHeight}px`
            } else {
                this.header.classList.remove(this.headerStickyClass);
                this.main.style.paddingTop = `0px`
            }
        })
    },
}

export default header;