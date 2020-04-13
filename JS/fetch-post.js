const addUser = async (user) => {
  const resp = await fetch(`https://reqres.in/api/users/3`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const response = await resp.json();
  const status = resp.status;

  console.log("Status: ", status, "Response: ", response);
};

addUser({
  name: "Anees Qaim Khani",
});
