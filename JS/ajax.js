function addTodo(todo) {
  // AJAX
  const http = new XMLHttpRequest();
  // http.responseType = "json";

  return new Promise((resolve, reject) => {
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status >= 200 && http.status < 300) {
          resolve(http.status);
        } else {
          reject(`Status Code: ${http.status} Status: ${http.statusText}`);
        }
      }
    };

    http.open("POST", `http://jsonplaceholder.typicode.com/todos`);
    // Set this header to allow JSON data to be sent
    http.setRequestHeader("Content-Type", "application/json");
    // http.send('email=abc@gmail.com&username=john&password=123'); // urlencoded

    http.send(JSON.stringify(todo));
  });
}

// On form submission
document
  .getElementById("myform")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const number = e.target.number.value;

    // try {
    //   const fact = await getFact(number);
    //   document.getElementById("fact").innerText = fact;
    // } catch (error) {
    //   console.log(error);
    // }

    const todo = {
      userId: 123,
      id: 879,
      title: "My new todo",
      completed: false,
    };

    try {
      const res = await addTodo(todo);
      // document.getElementById("fact").innerText = fact;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  });
