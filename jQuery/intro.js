// When our document is ready
$(document).ready(function () {
  setTimeout(function () {
    $("#heading").fadeIn("slow", function () {
      $(this).css({ color: "red" });
    });
  }, 3000);
});
