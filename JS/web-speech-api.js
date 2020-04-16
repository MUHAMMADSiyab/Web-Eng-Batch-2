const words = document.querySelector(".words");

function initSpeaking() {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  const p = document.createElement("p");
  words.appendChild(p);

  recognition.interimResults = true;
  recognition.continuous = true;

  recognition.addEventListener("result", function (e) {
    const results = e.results;

    const transcript = Array.from(results)
      .map((res) => res[0])
      .map((trans) => trans.transcript)
      .join("");

    p.textContent = transcript;

    const color = transcript.split(" ")[1];

    if (transcript.indexOf(`background ${color}`) !== -1) {
      document.body.style.background = color;
    }

    if (e.results[0].isFinal) {
      const p = document.createElement("p");
      words.appendChild(p);
    }
  });

  recognition.start();

  document.getElementById("stopbtn").addEventListener("click", function () {
    recognition.stop();
  });
}
