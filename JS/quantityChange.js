function increment() {
  $quantity_value = document.getElementById("quantity-value");
  value = parseInt($quantity_value.innerHTML) + 1;
  $quantity_value.innerHTML = value.toString();
}

function decrement() {
  $quantity_value = document.getElementById("quantity-value");
  value = parseInt($quantity_value.innerHTML) - 1;
  if (value > 0) {
    $quantity_value.innerHTML = value.toString();
  }
}
