function playSong(file) {
    const audio = document.getElementById('audioPlayer');
    audio.src = file;
    audio.play();
  }
  