// A function playing an audio
export function playAudio(text) {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "fr-FR";
  speech.volume = 1;
  speech.rate = 1;
  speech.text = text;
  speechSynthesis.speak(speech);
}
