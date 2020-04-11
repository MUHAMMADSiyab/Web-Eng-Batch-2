// async keyword is required if await is used inside the function
function getTodos() {
  // Async / await
  //   const resp = await fetch("http://jsonplaceholder.typicode.com/todos");

  //   const res = await resp.json();

  //   console.log(res);

  //   then-catch
  fetch("http://jsonplaceholder.typicode.com/todos")
    .then((resp) => resp.json())
    .then((res) => console.log(res));
}

getTodos();
