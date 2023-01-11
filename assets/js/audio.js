function playAudio(playerChoice) {
    let audio = document.getElementById("audio-" + playerChoice);
    audio.currentTime = 0;
    audio.play();
  }