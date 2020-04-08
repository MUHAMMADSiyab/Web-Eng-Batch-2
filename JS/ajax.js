function getFact(number) {
  // AJAX
  const http = new XMLHttpRequest();
  http.responseType = "json";
  http.onreadystatechange = function () {
    if (http.readyState === 4) {
      if (http.status === 200) {
        // const stats = httpgit.response;

        document.getElementById("fact").innerText = http.response;
      } else {
        console.log(`Status Code: ${http.status} Status: ${http.statusText}`);
      }
    }
  };

  http.open("GET", `http://numbersapi.com/${number}/math`);
  http.send();
}

// On form submission
document.getElementById("myform").addEventListener("submit", function (e) {
  e.preventDefault();

  const number = e.target.number.value;

  getFact(number);
});
