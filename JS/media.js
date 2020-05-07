const video = document.getElementById("camvideo");
const canvas = document.getElementById("ss-canvas");
const takeBtn = document.getElementById("take");

navigator.mediaDevices
  .getUserMedia({ video: true, audio: false })
  .then(stream => {
    video.srcObject = stream;
    video.play();
  })
  .catch(err => console.log(err));

takeBtn.addEventListener("click", () => {
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
});
