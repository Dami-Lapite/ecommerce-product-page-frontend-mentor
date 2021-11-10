import images from "./images.js";
window.onload = function () {
  var innerHTML_string = "";
  images.forEach((image, i) => {
    if (i == 0) {
      innerHTML_string +=
        '<img class="product-image active" onclick="toggleImage(this)" src="' +
        image.src +
        '" alt="product-image"/>';
    } else {
      innerHTML_string +=
        '<img class="product-image" onclick="toggleImage(this)" src="' +
        image.src +
        '" alt="product-image"/>';
    }
  });
  var modal_innerHTML_string = "";
  images.forEach((image, i) => {
    modal_innerHTML_string +=
      '<img class="modal-product-image" onclick="modalToggleImage(this)" src="' +
      image.src +
      '" alt="product-image"/>';
  });
  const $image_array = document.getElementById("image-array");
  $image_array.innerHTML = innerHTML_string;
  const $modal_image_array = document.getElementById("modal-image-array");
  $modal_image_array.innerHTML = modal_innerHTML_string;
  const $image_focused = document.getElementById("image-focused");
  $image_focused.src = images[0].src;
};
