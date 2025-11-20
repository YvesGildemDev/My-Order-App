function currentMenuTab(currentTab) {
  let allMenuTabs = document.querySelectorAll(".menu_tab");
  let currentMenuTab = document.getElementById(`menu-tab-${currentTab}`);

  allMenuTabs.forEach((allTabs) => allTabs.classList.remove("active"));
  currentMenuTab.classList.add("active");

  updateTabIndicatorBar();
}

function updateTabIndicatorBar() {
  let activeTab = document.querySelector(".menu_tab.active");
  let indicatorBar = document.getElementById("tab-indicator");

  if (!activeTab || !indicatorBar) return;

  indicatorBar.style.width = activeTab.offsetWidth + "px";
  indicatorBar.style.left = activeTab.offsetLeft + "px";
}

// <----- Cart -----> //
function toggleCart() {
  let cartRef = document.getElementById("cart");
  let activeCart = cartRef.classList.contains("active");
  let menuRef = document.getElementById(`menu`);

  if (!activeCart) {
    cartRef.classList.add("active");
    cartRef.classList.remove("hidden");
    menuRef.classList.add("shifted");
  } else {
    cartRef.classList.remove("active");
    menuRef.classList.remove("shifted");

    cartTransitionEnd();
    cartRef.addEventListener("transitionend", cartTransitionEnd);
  }

  function cartTransitionEnd() {
    cartRef.classList.add("hidden");
    cartRef.removeEventListener("transitionend", cartTransitionEnd);
  }
}

// <-------------------- Specific Functions --------------------> //
// <----- Cart -----> //
function addToCart(currentMenu) {
  let menuToAdd = menuGroup[currentMenu];

  if (!menuToAdd) return;

  let cartMenuQuantity = cart.find((index) => index.name === menuToAdd.name);

  if (cartMenuQuantity) cartMenuQuantity.quantity++;
  else cart.push({ ...menuToAdd, quantity: 1 });
  renderCart();
}

function changeQuantity(menuInCart, currentMenu) {
  cart[menuInCart].quantity += currentMenu;
  if (cart[menuInCart].quantity <= 0) cart.splice(menuInCart, 1);
  renderCart();
}

function calculateEndPrice(subtotal) {
  let subtotalRef = document.getElementById("subtotal");
  let shippingRef = document.getElementById("shipping");
  let totalPrice = document.getElementById("total");

  if (cart.length > 0) {
    let shipping = cart.length > 0 ? 5 : 0;

    subtotalRef.innerText = subtotal.toFixed(2) + "€";
    shippingRef.innerText = shipping.toFixed(2) + "€";
    totalPrice.innerText = (subtotal + shipping).toFixed(2) + "€";
  } else {
    let shipping = cart.length > 0 ? 5 : 0;
    subtotal = 0;
    subtotalRef.innerText = subtotal.toFixed(2) + "€";
    shippingRef.innerText = shipping.toFixed(2) + "€";
    totalPrice.innerText = (subtotal + shipping).toFixed(2) + "€";
  }
}

function deleteCartItem(currentItem) {
  cart.splice(currentItem, 1);
  renderCart();
}

function openCartDialog() {
  if (cart.length > 0) {
    let cartDialogRef = document.getElementById(`cart-dialog`);

    renderCartDialog();

    cartDialogRef.showModal();
    cartDialogRef.classList.add("active");
    cartDialogRef.style.display = `flex`;
  } else {
    return;
  }
}

function closeCartDialog() {
  let cartDialogRef = document.getElementById(`cart-dialog`);

  cartDialogRef.close();
  cartDialogRef.style.display = `none`;

  cart = [];

  renderCart();
  renderCartDialog();
}
