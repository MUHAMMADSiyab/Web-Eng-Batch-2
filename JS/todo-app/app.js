// Select elements
const todoName = document.getElementById("todo-name");
const form = document.getElementById("todo-form");
const todosList = document.getElementById("todos-list");

// Attach event listener to form
form.addEventListener("submit", addTodo);

/**
 * @method addTodo
 * @desc Adds a todo item
 */
function addTodo(e) {
  // Prevent the page from reloding
  e.preventDefault();

  const todoText = todoName.value;

  //  Save to localStorage
  const todoKey = `todo_key_${localStorage.length + 1}`;

  localStorage.setItem(todoKey, todoText);

  addToDom(todoText, todoKey);
}

/**
 * @method getTodos
 * @desc Gets all the todos from the localStorage
 */
function getTodos() {
  const keys = Object.keys(localStorage);

  keys.forEach(function(key) {
    if (key.startsWith("todo_key_")) {
      const todoText = localStorage.getItem(key);

      addToDom(todoText, key);
    }
  });
}

getTodos();

// Attach event listener to `todosList`
todosList.addEventListener("click", deleteTodo);

/**
 * @method deleteTodo
 * @desc Deltes a todo item
 */
function deleteTodo(e) {
  if (e.target.classList.contains("btn-delete")) {
    if (window.confirm("Are you sure you want to delete this todo item?")) {
      const key = e.target.value;
      // Remove from localStorage
      localStorage.removeItem(key);

      // Remove from DOM
      const li = e.target.parentElement;

      todosList.removeChild(li);
    }
  }
}

todosList.addEventListener("click", activateItem);

function activateItem(e) {
  if (e.target.className === "list-group-item") {
    const items = document.getElementsByClassName("list-group-item");

    // Get rid of already present active classes
    Array.from(items).forEach(function(item) {
      item.classList.remove("active");
    });

    // Apply active class
    e.target.classList.add("active");
  }
}

// ---------------------------------------------------------------
/**
 * @method addToDom
 * @desc Adds items to DOM
 */
function addToDom(todoText, key) {
  //   Add to DOM
  const li = document.createElement("li");
  const content = document.createTextNode(todoText);

  //   Add classes to li
  li.className = "list-group-item";

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.value = key;
  // Add classes to delete button
  deleteBtn.className = "btn btn-danger btn-sm btn-delete float-right";
  const btnText = document.createTextNode("x");
  // Append
  deleteBtn.appendChild(btnText);
  li.appendChild(deleteBtn);

  //  Append
  li.appendChild(content);
  todosList.prepend(li);
}
