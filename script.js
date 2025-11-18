function updateTabIndicator() {
  let activeTab = document.querySelector(".menu_tab.active");
  let indicator = document.getElementById("tab-indicator");

  if (!activeTab || !indicator) return;

  indicator.style.width = activeTab.offsetWidth + "px";
  indicator.style.left = activeTab.offsetLeft + "px";
}

window.addEventListener("load", updateTabIndicator);
window.addEventListener("resize", updateTabIndicator);

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

    const onEnd = () => {
      body.classList.remove("cart-open");

      cartContainer.classList.add("hidden");
      cartContainer.removeEventListener("transitionend", onEnd);
    };

    cartContainer.addEventListener("transitionend", onEnd);
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu_item_button"))
    addToCart(parseInt(e.target.dataset.index));
});

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

let cartDialog = document.getElementById(`cart-dialog`);
document.addEventListener("keydown", function (e) {
  if (cartDialog.classList.contains("active")) {
    if (e.key === "Escape") closeCartDialog();
  }
});
