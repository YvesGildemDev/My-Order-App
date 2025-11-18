function updateTabIndicator() {
  let activeTab = document.querySelector(".menu_tab.active");
  let indicator = document.getElementById(`tab-indicator`);

  if (!activeTab || !indicator) return;

  indicator.style.width = activeTab.offsetWidth + "px";
  indicator.style.left = activeTab.offsetLeft + "px";
}

function toggleCart() {
  let cart = document.getElementById("cart");
  let menu = document.querySelector(".menu");

  let isClosed = cart.classList.contains("hidden");

  if (isClosed) {
    cart.style.display = `flex`;      
    menu.classList.add("shifted");
    cart.classList.add("active");
    setTimeout(() => 
      cart.classList.remove("hidden")
    , 10)    

  } else {
    cart.classList.add("hidden");
    menu.classList.remove("shifted");

    setTimeout(() => {
      cart.classList.remove("active");
  }, 10)
  }
}

function addToCart(index) {
  let dish = menuGroup[index];

  let existingItem = cart.find((item) => item.name === dish.name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...dish, quantity: 1 });
  }

  renderCart();
}

function changeQuantity(index, delta) {
  let item = cart[index];
  item.quantity += delta;

  if (item.quantity <= 0) {
    cart.splice(index, 1);
  }

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
