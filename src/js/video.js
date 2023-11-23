import helpers from "./helpers";

const video = {
    playerDiv : document.getElementById("videoPlayer"),
    videoPopup: document.querySelector('.js-video-popup'),
    playButton : document.querySelector('.js-video-btn'),
    closePopupBtn: document.querySelector('.js-close-btn'),
    
    isPlaying: false,
    
    init: function () {
        this.handleVideoPlay();
        this.handleCloseVideoPopup();
    },

    handleVideoPlay: function () {
        const vimeoPlayer = new Vimeo.Player(this.playerDiv, {
            id: 104926724,
        });
        this.playButton?.addEventListener("click", () => {
            if(!this.isPlaying) {
                this.isPlaying = true;
                this.videoPopup.classList.add('video__popup--active');
                helpers.disableScroll()
                vimeoPlayer.play();
            }else {
                this.videoPopup.classList.remove('video__popup--active')
                this.isPlaying = false;
                helpers.enableScroll()
                vimeoPlayer.pause();
            }
        });
    },

    handleCloseVideoPopup: function() {
      
        const vimeoPlayer = new Vimeo.Player(this.playerDiv, {
            id: 104926724,
        });

        this.closePopupBtn.addEventListener('click', () => {
            this.videoPopup.classList.remove('video__popup--active')
            this.isPlaying = false;
            helpers.enableScroll()
            vimeoPlayer.pause();
        })
        
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.videoPopup.classList.remove('video__popup--active')
                this.isPlaying = false;
                vimeoPlayer.pause();
                helpers.enableScroll()
            }
        });

        this.videoPopup.addEventListener('click', (event) => {
            if(this.isPlaying) {   
                if((event.key !== 'Escape' || !event.target.classList.contains('js-close-btn'))) {
                    this.videoPopup.classList.remove('video__popup--active')
                    this.isPlaying = false;
                    vimeoPlayer.pause();
                    helpers.enableScroll()
                }
            }
        })
    }
}

export default video;