// <-------------------- Button Listener --------------------> //
function responsiveCartButtonEvent() {
  let responsiveCartButton = document.getElementById(`responsive-cart-button`);
  responsiveCartButton.addEventListener("click", () => {
    toggleCart();
  });
}

function menuTabEvent() {
  document.querySelectorAll(".menu_tab").forEach((everyTab) => {
    everyTab.addEventListener("click", () => {
      let currentTab = everyTab.id.replace("menu-tab-", "");
      loadCurrentMenuTab(currentTab);
    });
  });
}

function addToCartEvent() {
  document.addEventListener("click", (currentMeal) => {
    if (currentMeal.target.classList.contains("menu_item_button"))
      addToCart(parseInt(currentMeal.target.dataset.index));
  });
}

function trashButtonEvent() {
  let cartTrashButton = document.querySelectorAll(".cart_trash_button");
  cartTrashButton.forEach((trashButton) => {
    trashButton.addEventListener("click", () => {
      let currentItem = trashButton.dataset.index;
      deleteCartItem(currentItem);
      renderCart();
    });
  });
}

// <---------- Key Listener --------------------> //
// <----- Cart Dialog -----> //
function cartDialogKeyFunc() {
  let cartDialog = document.getElementById(`cart-dialog`);
  document.addEventListener("keydown", function (e) {
    if (cartDialog.classList.contains("active")) {
      if (e.key === "Escape") closeCartDialog();
    }
  });
}
