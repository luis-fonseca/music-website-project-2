document.addEventListener('DOMContentLoaded', () => {
  // code here
  const song = document.getElementsByClassName('song')[0];

  const icon = document.getElementsByClassName('content-container__play-button')[0];
  const pause_image_file = 'assets/images/pause-min.png';
  const play_image_file = 'assets/images/play-min.png';

  let isPlay;

  icon.addEventListener('click', () => {
    isPlay = song.paused;

    if (isPlay) {
      song.play();
      icon.src = pause_image_file;
    } else {
      song.pause();
      icon.src = play_image_file;
    }
  });
});
