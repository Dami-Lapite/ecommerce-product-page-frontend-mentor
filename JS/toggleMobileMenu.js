function showMobileMenu() {
  $mobile_menu = document.getElementById("mobile-menu");
  $overlay = document.getElementById("app-overlay");
  $mobile_menu.classList.add("active");
  $overlay.classList.add("active");
}

function hideMobileMenu() {
  $mobile_menu = document.getElementById("mobile-menu");
  $overlay = document.getElementById("app-overlay");
  $mobile_menu.classList.remove("active");
  $overlay.classList.remove("active");
}
