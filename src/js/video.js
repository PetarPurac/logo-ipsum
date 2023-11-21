const video = {

    init: function () {
        this.handleVideoPlay();
    },

    handleVideoPlay: function () {
        document.addEventListener("DOMContentLoaded", function() {
            const playerDiv = document.getElementById("videoPlayer");
            const playButton = document.getElementById("playButton");
            let isPlaying = false;
            
            // Replace YOUR_VIDEO_ID with the Vimeo video ID you want to play
            const vimeoPlayer = new Vimeo.Player(playerDiv, {
              id: 104926724,
            });

            playButton.addEventListener("click", function() {
                if(!isPlaying) {
                    vimeoPlayer.play();
                    isPlaying = true;
                }else {
                    vimeoPlayer.pause();
                    isPlaying = false;
                }
            });
          });
    }
}

export default video;