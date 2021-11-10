function addToCart() {
  var product_name = document.getElementById("product-name").innerHTML;
  $product_image = document.querySelector(".product-image");
  var regexStr = /\/Images\/.+\.jpg|svg|png/;
  var image_src = $product_image.src.match(regexStr);
  $quantity_value = document.getElementById("quantity-value");
  var quantity = parseInt($quantity_value.innerHTML);
  $current_price = document.getElementById("current-price");
  var price = $current_price.innerHTML;
  var regexStr2 = /\$([\s\S]*)$/;
  var price_value = parseFloat(price.match(regexStr2)[1]);
  var cost = quantity * price_value;
  $cart_content = document.getElementById("cart-content");
  $cart = document.getElementById("cart");
  $cart_count = document.getElementById("cart-count");
  if (!$cart.classList.contains("non-empty")) {
    $cart.classList.add("non-empty");
  }
  $cart_count.innerHTML = "<p>" + quantity + "</p>";
  $cart_content.innerHTML =
    '<div class="cart-item">' +
    '<img src="' +
    image_src +
    '" alt="product-image"/>' +
    '<div class="cart-text">' +
    "<p>" +
    product_name +
    "<br/>" +
    price +
    " x " +
    quantity +
    '<span class="cost"> &emsp;$' +
    cost.toFixed(2) +
    "</span>" +
    "</p>" +
    '<img onclick="deleteItem()" src="../Images/icon-delete.svg" alt="delete-icon"/>' +
    "</div></div>";
}

function deleteItem() {
  $cart_content = document.getElementById("cart-content");
  $cart = document.getElementById("cart");
  $cart.classList.remove("non-empty");
  $cart_content.innerHTML = "<p>Your cart is empty</p>";
  $cart_count = document.getElementById("cart-count");
  $cart_count.innerHTML = "";
  $cart_container = document.getElementById("cart-container");
}

function toggleCartShow() {
  $cart_container = document.getElementById("cart-container");
  if ($cart_container.classList.contains("active")) {
    $cart_container.classList.remove("active");
  } else {
    $cart_container.classList.add("active");
  }
}
