// JS Events
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const form = document.getElementById("myForm");
const anchor = document.getElementById("anchor");

// Attach event listener
btn.addEventListener("click", test);

function test(e) {
  //   e.target.style.backgroundColor = "orange";
  input.value = "";
}

input.addEventListener("keyup", function(e) {
  if (e.which === 13) {
    console.log("Enter key is pressed");
  }
});

// Form submit event
form.addEventListener("submit", function(e) {
  e.preventDefault();

  console.log(e);
});

anchor.addEventListener("click", function(e) {
  e.preventDefault();
});
