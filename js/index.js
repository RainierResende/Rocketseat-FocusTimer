import { ButtonClick } from "./controls.js";
import { Timer } from "./timer.js";
import Sound from "./sounds.js";

const sound = Sound();
export let minutes = Number(Timer.minutesDisplay.textContent);

ButtonClick.buttonSet.onclick = function () {
  minutes = prompt("Quantos minutos?") || minutes;
  Timer.updateTimerDisplay(minutes, 0);
};
ButtonClick.buttonPlay.onclick = function () {
  ButtonClick.play();
  sound.buttonPress();

  Timer.countdown();
};
ButtonClick.buttonPause.onclick = function () {
  ButtonClick.pause();
  sound.buttonPress();

  clearTimeout(Timer.timerTimeOut);
};
ButtonClick.buttonStop.onclick = function () {
  ButtonClick.resetControls();
  Timer.resetTimer();
  sound.buttonPress();
};
ButtonClick.buttonSoundOn.onclick = function () {
  ButtonClick.soundOn();
  sound.bgAudio.play();
};
ButtonClick.buttonSoundOff.onclick = function () {
  ButtonClick.soundOff();
  sound.bgAudio.pause();
};
