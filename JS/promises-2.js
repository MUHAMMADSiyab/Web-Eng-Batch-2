const list = document.getElementById("list");

const posts = [
  {
    title: "Post One",
    body: "This is post one body",
  },
  {
    title: "Post Two",
    body: "This is post two body",
  },
];

function getPosts() {
  let output = "";

  posts.forEach((post) => {
    output += `<li>${post.title}</li>`;
  });

  list.innerHTML = output;
}

// addPost
function addPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (post.title !== undefined) {
        posts.push(post);
        // Invoke the getPosts method after pushing
        resolve("Post added");
      } else {
        reject("Post title is not provided");
      }
    }, 2000);
  });
}

const post = {
  //   title: "Post Three",
  body: "This is post three body",
};

// addPost({
//   title: "Post Three",
//   body: "This is post three body",
// })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Asyc / Await
async function test() {
  try {
    await addPost(post);
    getPosts();
  } catch (error) {
    console.log(error);
  }
}

test();
