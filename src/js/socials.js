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
                // Set state to true or perform an action
                this.socials.classList.add('socials--sticky')
                console.log('Scroll position is equal to or greater than section top');
                // Perform your action here
            } else {
                this.socials.classList.remove('socials--sticky')
                // Set state to false or perform an action
                console.log('Scroll position is less than section top');
                // Perform your action here
            }
        })
    }


}

export default socials;