// Selecting elements
const form = document.getElementById("age-form");
const dobInput = document.getElementById("dob");
const result = document.getElementById("result");

form.addEventListener("submit", findAge);

/**
 * @method findAge
 * @desc Finds the age
 */
function findAge(e) {
  e.preventDefault();

  const dob = new Date(dobInput.value).getTime();
  const now = new Date().getTime();

  //  Find the difference b/w two dates
  const diff = now - dob;

  const years = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));
  const months = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));

  const foundAge = `
    You are 
    <strong class="text-success">${years} Years</strong>, 
    (<strong class="text-success">${months}</strong> Months) 
    (<strong class="text-success">${days}</strong> Days) Old
  `;

  result.innerHTML = foundAge;
}
