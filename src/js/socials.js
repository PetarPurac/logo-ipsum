const socials = {
    socials: document.querySelector('.js-banner-socials'),

    init: function() {
        this.handleSocialsPosition();
    },

    handleSocialsPosition: function() {
        
        const sectionTop = this.socials.offsetTop;
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY || window.pageYOffset;

            
            if (scrollPosition >= (sectionTop - 10)) {
                this.socials.classList.add('socials--sticky')
            } else {
                this.socials.classList.remove('socials--sticky')
            }
        })
    }


}

export default socials;