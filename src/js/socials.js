import helpers from "./helpers";
const socials = {
    socials: document.querySelector('.js-banner-socials'),
    socialBtn: document.querySelector('.js-banner-socials-btn'),

    init: function() {
        this.handleSocialsPosition();
        this.handleSocialsExpand();
    },

    handleSocialsPosition: function() {        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition >= 50) {
                this.socials.classList.add('socials--sticky')
            } else {
                this.socials.classList.remove('socials--sticky')
            }
        })
    },

    handleSocialsExpand: function() {
        const handleButtonClick = () => {
            if (this.socials.classList.contains('banner__socials--expanded')) {
                this.socials.classList.remove('banner__socials--expanded');
            } else {
                this.socials.classList.add('banner__socials--expanded');
            }
        };

        const debouncedHandleButtonClick = helpers.debounce(handleButtonClick, 250);

        this.socialBtn?.addEventListener('click', debouncedHandleButtonClick);
    }


}

export default socials;