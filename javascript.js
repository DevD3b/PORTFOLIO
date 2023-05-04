var img = document.getElementById("your-image-id");

img.addEventListener("mouseover", function(event) {
  img.style.width = "700px"; // adjust the width to make the image bigger
});

img.addEventListener("mouseout", function(event) {
  img.style.width = "400px"; // adjust the width to make the image smaller
});