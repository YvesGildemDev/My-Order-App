// <-------------------- Basic Functions --------------------> //
// <----- Menu -----> //
function renderMenuList(currentMenuGroup) {
  let menuListRef = document.getElementById("menu-list");
  let currentMenuGroupImage = MENU_IMAGES[currentMenuGroup] || "";
  let currentMenuGroupTitle = MENU_TITLES[currentMenuGroup] || "";

  let menuListTemplate = loadMenuListTemplate(
    currentMenuGroupImage,
    currentMenuGroupTitle
  );

  menuListRef.innerHTML = menuListTemplate;
}

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
function renderCart() {
  let cartListRef = document.getElementById("cart-list");

  let { cartListTemplate, subtotal } = getCartTemplate(cart);

  cartListRef.innerHTML = cartListTemplate;

  trashButtonEvent();
  calculateEndPrice(subtotal);
}

function toggleCart() {
  let cartWrapperRef = document.getElementById(`cart-wrapper`);
  let cartListRef = document.getElementById(`cart-list`);
  let activeCart = cartWrapperRef.classList.contains("active");
  let menuRef = document.getElementById(`menu`);
  let responsiveCartButtonRef = document.getElementById(`responsive-cart-button`);
  

  if (!activeCart) {
    cartWrapperRef.classList.add("active");
    cartWrapperRef.classList.remove("hidden");
    cartListRef.classList.add("active");
    menuRef.classList.add("shifted");
    responsiveCartButtonRef.classList.add("cartActive");
    loadCloseCartButton();
    
  } else {
    cartWrapperRef.classList.remove("active");
    cartListRef.classList.remove("active");
    menuRef.classList.remove("shifted");
    responsiveCartButtonRef.classList.remove("cartActive");
    closeResponsiveCartButtonRef.classList.remove("cartActive");

    cartTransitionEnd();
    cartWrapperRef.addEventListener("transitionend", cartTransitionEnd);
  }

  function cartTransitionEnd() {
    cartWrapperRef.classList.add("hidden");
    cartWrapperRef.removeEventListener("transitionend", cartTransitionEnd);
  }
}

function loadCloseCartButton() {
  let closeResponsiveCartButtonRef = document.getElementById(`close-responsive-cart-button`);
  closeResponsiveCartButtonRef.classList.add("cartActive");
  
  closeCartButtonEvent();
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
  toggleCart();
}
