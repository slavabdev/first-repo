let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let stopBtn = document.getElementById("stop");
let text = document.querySelector(".text");
let speakVoices = document.getElementById("voicesList");

//play button
playBtn.addEventListener("click", () => {
  playText(text.innerHTML);
});
pauseBtn.addEventListener("click", () => pauseText(text));
stopBtn.addEventListener("click", () => stopText());
function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  const utterance = new SpeechSynthesisUtterance(text);

  let selectedVoice = voicesList.selectedOptions[0].getAttribute("data-name");
  voices.forEach((voice) => {
    if (voice.name === selectedVoice) {
      utterance.voice = voice;
    }
  });

  speechSynthesis.speak(utterance);
}

//select voices
let voices = [];

const getVoices = () => {
  voices = window.speechSynthesis.getVoices();
  voicesList.innerHTML = "";

  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.textContent = voice.name + "(" + voice.lang + ")";

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    speakVoices.appendChild(option);
  });
};
getVoices();

if (speechSynthesis !== undefined) {
  speechSynthesis.onvoiceschanged = getVoices;
}

//pause button

let pauseText = function () {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
  }
};

//stop button

let stopText = function () {
  speechSynthesis.resume();
  speechSynthesis.cancel();
};
