// <-------------------- Init --------------------> //
function basicEvents() {
  hamburgerButtonEvent();
  responsiveCartButtonEvent();
  menuTabEvent();
  addToCartEvent()
}

function cartEvents() {
  buyButtonEvent();
  cartDialogKeyFunc();
}

// <-------------------- Button Listener --------------------> //
function hamburgerButtonEvent() {
  let hamburgerButton = document.getElementById(`hamburger-button`);
  hamburgerButton.addEventListener("click", () => {
    toggleCart();
  });
}

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
    });
  });
}
function buyButtonEvent() {
  let buyButton = document.getElementById(`buy-button`);
  buyButton.addEventListener("click", () => {
    openCartDialog();
  });
}

function closeCardDialogEvent() {
  let closeButtonRef = document.getElementById(`close-cart-dialog-button`);
  closeButtonRef.addEventListener("click", () => {
    closeCartDialog();
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
