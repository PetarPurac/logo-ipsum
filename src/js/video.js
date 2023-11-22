import helpers from "./helpers";

const video = {
    videoPopup: document.querySelector('.js-video-popup'),

    init: function () {
        this.handleVideoPlay();
    },

    handleVideoPlay: function () {
        const videoPopup = document.querySelector('.js-video-popup');
        document.addEventListener("DOMContentLoaded", function() {
            const playButton = document.querySelector(".js-video-btn");
            const closePopupBtn = document.querySelector('.js-close-btn');
            let isPlaying = false;
            closePopupBtn.addEventListener('click', () => {
                videoPopup.classList.remove('video__popup--active')
                isPlaying = false;
                helpers.enableScroll()
            })
          
            playButton?.addEventListener("click", function() {
                if(!isPlaying) {
                    isPlaying = true;
                    videoPopup.classList.add('video__popup--active');
                    helpers.disableScroll()
                }else {
                    videoPopup.classList.remove('video__popup--active')
                    isPlaying = false;
                    helpers.enableScroll()
                }
            });
            });
    }
}

export default video;