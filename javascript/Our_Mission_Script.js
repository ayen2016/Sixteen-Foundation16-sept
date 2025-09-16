
  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".our_mission_item");

    items.forEach(item => {
      item.querySelector(".our_mission_question").addEventListener("click", () => {
        items.forEach(o => o !== item && o.classList.remove("active"));
        item.classList.toggle("active");
      });
    });

    const video = document.getElementById("ourMissionVideo"),
          container = document.getElementById("ourMissionVideoContainer"),
          playBtn = document.getElementById("ourMissionPlayBtn"),
          playPause = document.getElementById("ourMissionPlayPause"),
          overlay = document.getElementById("ourMissionOverlay"),
          fullscreen = document.getElementById("ourMissionFullscreen"),
          progress = document.getElementById("ourMissionProgressBar");

    function togglePlay() {
      if (video.paused) {
        video.play();
        container.classList.add("playing");
        playPause.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
      } else {
        video.pause();
        container.classList.remove("playing");
        playPause.innerHTML = '<i class="fa-solid fa-play"></i> Play Video';
      }
    }

    playBtn.addEventListener("click", togglePlay);
    playPause.addEventListener("click", togglePlay);
    fullscreen.addEventListener("click", () => {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    });

    video.addEventListener("timeupdate", () => {
      progress.style.width = (video.currentTime / video.duration) * 100 + '%';
    });

    video.addEventListener("ended", () => {
      container.classList.remove("playing");
      playPause.innerHTML = '<i class="fa-solid fa-play"></i> Play Video';
      progress.style.width = '0%';
    });
  });