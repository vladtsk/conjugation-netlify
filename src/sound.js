// Managing sound effects (sound on / off)

export function displaySoundIcons() {
  const soundOnIcon = document.querySelector(".sound .fa-volume-low");
  const soundOffIcon = document.querySelector(".sound .fa-volume-xmark");

  const soundOn =
    localStorage.getItem("soundOn") !== null
      ? JSON.parse(localStorage.getItem("soundOn"))
      : true;
  if (soundOn && soundOnIcon) {
    soundOnIcon.style.display = "inline-block";
    soundOffIcon.style.display = "none";
    localStorage.setItem("soundOn", JSON.stringify(true));
  } else if (soundOffIcon) {
    soundOffIcon.style.display = "inline-block";
    soundOnIcon.style.display = "none";
    localStorage.setItem("soundOn", JSON.stringify(false));
  }
}

export function handleSoundIconClick() {
  const soundOnIcon = document.querySelector(".sound .fa-volume-low");
  const soundOffIcon = document.querySelector(".sound .fa-volume-xmark");

  if (soundOnIcon && soundOffIcon) {
    soundOnIcon.addEventListener("click", () => {
      soundOnIcon.style.display = "none";
      soundOffIcon.style.display = "inline-block";
      localStorage.setItem("soundOn", JSON.stringify(false));
    });

    soundOffIcon.addEventListener("click", () => {
      soundOffIcon.style.display = "none";
      soundOnIcon.style.display = "inline-block";
      localStorage.setItem("soundOn", JSON.stringify(true));
    });
  }
}
