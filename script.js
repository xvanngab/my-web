const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playButton.textContent = 'Play';
  }
});