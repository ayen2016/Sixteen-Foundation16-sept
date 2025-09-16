document.addEventListener('DOMContentLoaded', function() {
    // Select all podcast items
    const podcastItems = document.querySelectorAll('.hp_pod_item');

    podcastItems.forEach(item => {
        const video = item.querySelector('video');

        // Play video on hover
        item.addEventListener('mouseenter', function() {
            if (video) {
                video.play();
            }
        });

        // Pause and reset video when not hovering
        item.addEventListener('mouseleave', function() {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
    });
});
