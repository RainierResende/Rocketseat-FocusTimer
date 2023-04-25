export const ButtonClick = {
  buttonPlay: document.querySelector(".play"),
  buttonPause: document.querySelector(".pause"),
  buttonStop: document.querySelector(".stop"),
  buttonSet: document.querySelector(".set"),
  buttonSoundOn: document.querySelector(".soundOn"),
  buttonSoundOff: document.querySelector(".soundOff"),

  play() {
    ButtonClick.buttonPlay.classList.toggle("hide");
    ButtonClick.buttonPause.classList.toggle("hide");
    ButtonClick.buttonStop.classList.remove("hide");
    ButtonClick.buttonSet.classList.add("hide");
  },
  pause() {
    ButtonClick.buttonPlay.classList.toggle("hide");
    ButtonClick.buttonPause.classList.toggle("hide");
  },
  resetControls() {
    ButtonClick.buttonPlay.classList.remove("hide");
    ButtonClick.buttonPause.classList.add("hide");
    ButtonClick.buttonStop.classList.toggle("hide");
    ButtonClick.buttonSet.classList.toggle("hide");
  },
  soundOn() {
    ButtonClick.buttonSoundOff.classList.toggle("hide");
    ButtonClick.buttonSoundOn.classList.toggle("hide");
  },
  soundOff() {
    ButtonClick.buttonSoundOff.classList.toggle("hide");
    ButtonClick.buttonSoundOn.classList.toggle("hide");
  },
};

ButtonClick.buttonSoundOn.onclick = () => ButtonClick.soundOn();
ButtonClick.buttonSoundOff.onclick = () => ButtonClick.soundOff();
