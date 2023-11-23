import helpers from "./helpers";

const video = {
    videoPopup: document.querySelector('.js-video-popup'),
    playButton : document.querySelector('.js-video-btn'),
    closePopupBtn: document.querySelector('.js-close-btn'),
    isPlaying: false,
    
    init: function () {
        this.handleVideoPlay();
        this.handleCloseVideoPopup();
    },

    handleVideoPlay: function () {
        this.playButton?.addEventListener("click", () => {
            if(!this.isPlaying) {
                this.isPlaying = true;
                this.videoPopup.classList.add('video__popup--active');
                helpers.disableScroll()
            }else {
                this.videoPopup.classList.remove('video__popup--active')
                this.isPlaying = false;
                helpers.enableScroll()
            }
        });
    },

    handleCloseVideoPopup: function() {
        this.closePopupBtn.addEventListener('click', () => {
            this.videoPopup.classList.remove('video__popup--active')
            this.isPlaying = false;
            helpers.enableScroll()
        })

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.videoPopup.classList.remove('video__popup--active')
                this.isPlaying = false;
                helpers.enableScroll()
            }
        });
    }
}

export default video;