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

function imageNext() {
  $image_focused = document.getElementById("image-focused");
  $images = document.querySelectorAll(".product-image");
  var nextIndex = $images.length;
  for (let index = 0; index < $images.length; index++) {
    if ($images[index].src == $image_focused.src) {
      nextIndex = index + 1;
      break;
    }
  }
  if (nextIndex < $images.length) {
    toggleImage($images[nextIndex]);
  } else {
    toggleImage($images[0]);
  }
}

function imagePrevious() {
  $image_focused = document.getElementById("image-focused");
  $images = document.querySelectorAll(".product-image");
  var nextIndex = $images.length;
  for (let index = 0; index < $images.length; index++) {
    if ($images[index].src == $image_focused.src) {
      nextIndex = index - 1;
      break;
    }
  }
  if (nextIndex >= 0) {
    toggleImage($images[nextIndex]);
  } else {
    toggleImage($images[$images.length - 1]);
  }
}
