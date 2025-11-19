// <-------------------- Basic Functions --------------------> //
// <----- Init Function -----> //
function initMenuStart() {
  loadMenuContent(`starter`);
}

window.addEventListener("load", updateTabIndicator);
window.addEventListener("resize", updateTabIndicator);

// <----- Menu -----> //
function loadMenuContent(currentTab) {
  let menuList = document.getElementById("menu-list");
  menuList.innerHTML = `<img src=""><h3>Hauptgerichte</h3>`;

  switch (currentTab) {
    case "starter":
      menuGroup = STARTERS;
      break;
    case "maindishes":
      menuGroup = MAINDISHES;
      break;
    case "desserts":
      menuGroup = DESSERTS;
      break;
  }

  currentMenuTab(currentTab);
  updateTabIndicator();
  renderMenuList();
}

function currentMenuTab(currentTab) {
  let allMenuTabs = document.querySelectorAll(".menu_tab");
  let currentMenuTab = document.getElementById(`menu-tab-${currentTab}`);

  allMenuTabs.forEach((allTabs) => allTabs.classList.remove("active"));
  currentMenuTab.classList.add("active");
}

function updateTabIndicator() {
  let activeTab = document.querySelector(".menu_tab.active");
  let indicator = document.getElementById("tab-indicator");

  if (!activeTab || !indicator) return;

  indicator.style.width = activeTab.offsetWidth + "px";
  indicator.style.left = activeTab.offsetLeft + "px";
}

// <----- Cart -----> //
function toggleCart() {
  let cartContainer = document.getElementById("cart");
  let cartOpen = cartContainer.classList.contains("active");
  let menu = document.getElementById(`menu`);

  if (!cartOpen) {
    cartContainer.classList.add("active");
    cartContainer.classList.remove("hidden");
    menu.classList.add("shifted");
  } else {
    cartContainer.classList.remove("active");
    menu.classList.remove("shifted");
    
    cartTransitionEnd();
    cartContainer.addEventListener("transitionend", cartTransitionEnd);
  }

  function cartTransitionEnd() {
    cartContainer.classList.add("hidden");
    cartContainer.removeEventListener("transitionend", cartTransitionEnd);
  }

}

// <-------------------- Specific Functions --------------------> //
// <----- Cart -----> //
function addToCart(i) {
  let dish = menuGroup[i];

  if (!dish) return;

  let meal = cart.find((index) => index.name === dish.name);

  if (meal) meal.quantity++;
  else cart.push({ ...dish, quantity: 1 });
  renderCart();
}

function changeQuantity(index, input) {
  cart[index].quantity += input;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  renderCart();
}

function calculateEndPrice(subtotal) {
  if (cart.length > 0) {
  let shipping = cart.length > 0 ? 5 : 0;

  document.getElementById("subtotal").innerText = subtotal.toFixed(2) + "€";
  document.getElementById("shipping").innerText = shipping.toFixed(2) + "€";
  document.getElementById("total").innerText =
    (subtotal + shipping).toFixed(2) + "€";}
}

function deleteCartItem(currentItem) {
  cart.splice(currentItem, 1)
  renderCart();
}

function openCartDialog() {
  let cartDialog = document.getElementById(`cart-dialog`);

  renderCartDialog();

  cartDialog.showModal();
  cartDialog.classList.add("active");
  cartDialog.style.display = `flex`;
}

function closeCartDialog() {
  let cartDialog = document.getElementById(`cart-dialog`);

  cartDialog.close();
  cartDialog.style.display = `none`;

  renderCartDialog();
}