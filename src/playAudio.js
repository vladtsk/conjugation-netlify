// A function playing an audio
export function playAudio(text) {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "fr-FR";
  speech.volume = 1;
  speech.rate = 1;
  speech.text = text;
  speechSynthesis.speak(speech);
}

//Correct answer sound effect
export function playCorrect() {
  const correctSound = new Audio("src/correct.mp3");
  correctSound.play();
}

//Incorrect answer sound effect
export function playIncorrect() {
  const incorrectSound = new Audio("src/incorrect.mp3");
  incorrectSound.play();
}

//End of exercise sound effect
export function playEnd() {
  const endSound = new Audio("src/success-fanfare.mp3");
  endSound.play();
}