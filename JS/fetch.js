const list = document.getElementById("users-list");

async function getUsers() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  let output = "";

  data.forEach(user => {
    output += `<li>${user.name}</li>`;
  });

  list.innerHTML = output;
}

getUsers();

// Covid19 API -- https://pomber.github.io/covid19/timeseries.json
// JSON API -- http://jsonplaceholder.typicode.com/users
