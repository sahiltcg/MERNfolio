document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector('video');
    if (video) {
        video.autoplay = true;
        video.load();
    }
});