const hh = document.getElementById("hh");
const mh = document.getElementById("mh");
const sh = document.getElementById("sh");

const clock = () => {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const hourDeg = (hour * 360) / 12;
  const minuteDeg = (minute * 360) / 60;
  const secondDeg = (second * 360) / 60;

  hh.style.transform = `rotate(${hourDeg}deg)`;
  mh.style.transform = `rotate(${minuteDeg}deg)`;
  sh.style.transform = `rotate(${secondDeg}deg)`;
};

setInterval(clock, 1000);
