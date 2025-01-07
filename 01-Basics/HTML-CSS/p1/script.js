document.getElementById('playPauseButton').addEventListener('click', function() {
    let video = document.querySelector('video');
    // video.textContent = 'Play'
    if (video.paused) {
        video.play();
        this.textContent = 'Pause';
    } else {
        video.pause();
        this.textContent = 'Play';
    }
});