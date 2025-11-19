// <-------------------- Basic Listener --------------------> //

// <-------------------- Button Listener --------------------> //
function menuTabEvent() {
  document.querySelectorAll(".menu_tab").forEach((everyTab) => {
    everyTab.addEventListener("click", () => {
      let currentTab = everyTab.id.replace("menu-tab-", "");
      loadCurrentMenuTab(currentTab);
    });
  });
}

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
