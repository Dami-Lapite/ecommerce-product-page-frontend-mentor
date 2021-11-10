function enableModalView($current) {
  $overlay = document.getElementById("app-overlay");
  $overlay.classList.add("active");
  $modal_image_focused = document.getElementById("modal-image-focused");
  var regexStr = /\/Images\/.+\.jpg|svg|png/;
  var current_src = $current.src.match(regexStr);
  $modal_image_focused.src = "." + current_src;
  $modal_images = document.querySelectorAll(".modal-product-image");
  $modal_images.forEach((image) => {
    if (image.src == $current.src) {
      image.classList.add("active");
    }
  });
}

function disableModalView() {
  $overlay = document.getElementById("app-overlay");
  $overlay.classList.remove("active");
  $modal_images.forEach((image) => {
    image.classList.remove("active");
  });
}

function modalToggleImage($current) {
  $modal_image_focused = document.getElementById("modal-image-focused");
  var regexStr = /\/Images\/.+\.jpg|svg|png/;
  var current_src = $current.src.match(regexStr);
  $modal_image_focused.src = "." + current_src;
  $modal_images = document.querySelectorAll(".modal-product-image");
  $modal_images.forEach((image) => {
    image.classList.remove("active");
  });
  $modal_images.forEach((image) => {
    if (image.src == $current.src) {
      image.classList.add("active");
    }
  });
}

function modalNext() {
  $modal_image_focused = document.getElementById("modal-image-focused");
  $modal_images = document.querySelectorAll(".modal-product-image");
  var nextIndex = $modal_images.length;
  for (let index = 0; index < $modal_images.length; index++) {
    if ($modal_images[index].src == $modal_image_focused.src) {
      nextIndex = index + 1;
      break;
    }
  }
  if (nextIndex < $modal_images.length) {
    modalToggleImage($modal_images[nextIndex]);
  }
}

function modalPrevious() {
  $modal_image_focused = document.getElementById("modal-image-focused");
  $modal_images = document.querySelectorAll(".modal-product-image");
  var nextIndex = $modal_images.length;
  for (let index = 0; index < $modal_images.length; index++) {
    if ($modal_images[index].src == $modal_image_focused.src) {
      nextIndex = index - 1;
      break;
    }
  }
  if (nextIndex >= 0) {
    modalToggleImage($modal_images[nextIndex]);
  }
}
