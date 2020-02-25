// Selecting elements
const text = document.getElementById("text");
const charsCount = document.getElementById("charsCount");
const charsNoSpaceCount = document.getElementById("charsNoSpaceCount");
const wordsCount = document.getElementById("wordsCount");
const linesCount = document.getElementById("linesCount");

// Attach event listener
text.addEventListener("keyup", function(e) {
  const inputText = e.target.value;

  const characters = inputText.length;
  const charactersWithoutSpace = inputText.replace(/ /g, "").length;
  const words = inputText.split(" ").length;
  const lines = inputText.split("\n").length;

  // Update the DOM
  charsCount.innerHTML = `<span class="badge badge-success badge-lg">${characters}</span>`;

  charsNoSpaceCount.innerHTML = `<span class="badge badge-success badge-lg">${charactersWithoutSpace}</span>`;

  wordsCount.innerHTML = `<span class="badge badge-success badge-lg">${words}</span>`;

  linesCount.innerHTML = `<span class="badge badge-success badge-lg">${lines}</span>`;
});
