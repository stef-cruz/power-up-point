// Navbar
const mobile_menu_button = document.getElementById("mobile-menu-button");
const mobile_menu = document.getElementById("mobile-menu");

mobile_menu_button.addEventListener("click", function() {
  mobile_menu.classList.toggle("hidden");
})

const profile_toggle = document.getElementById("open-profile-toggle");
const profile_menu = document.getElementById("profile-menu");

profile_toggle.addEventListener("click", function() {
  profile_menu.classList.toggle("hidden");
})