// <-------------------- Basic Listener --------------------> //

// <-------------------- Button Listener --------------------> //
document.addEventListener("click", (buttonIndex) => {
  if (buttonIndex.target.classList.contains("menu_item_button"))
    addToCart(parseInt(buttonIndex.target.dataset.index));
});

let responsiveCartButton = document.getElementById(`responsive-cart-button`);
responsiveCartButton.addEventListener("click", () => {
  toggleCart();
});

// <---------- Key Listener --------------------> //
// <----- Cart Dialog -----> //
let cartDialog = document.getElementById(`cart-dialog`);
document.addEventListener("keydown", function (e) {
  if (cartDialog.classList.contains("active")) {
    if (e.key === "Escape") closeCartDialog();
  }
});
