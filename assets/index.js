import MediaPlayer from './js/MediaPlayer.js';
import AutoPlay from './js/plugins/AutoPlay.js';

  const video = document.querySelector("video");
  const player = new MediaPlayer({ 
    el: video, 
    //plugins: [new AutoPlay()] 
  });


  const button = document.querySelector("button");
  const buttonMute = document.getElementById("muteButton");
  buttonMute.onclick = () => player.toggleMute();
  button.onclick = () => player.togglePlay();