function toggleImage($current) {
  if (!$current.classList.contains("active")) {
    $images = document.querySelectorAll(".product-image");
    $images.forEach((image) => {
      image.classList.remove("active");
    });
    $current.classList.add("active");
    $image_focused = document.getElementById("image-focused");
    var regexStr = /\/Images\/.+\.jpg|svg|png/;
    var current_src = $current.src.match(regexStr);
    $image_focused.src = "." + current_src;
  }
}
