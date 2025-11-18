function updateTabIndicator() {
const activeTab = document.querySelector(".menu_tab.active");
const indicator = document.getElementById("tab-indicator");
if (!activeTab || !indicator) return;
indicator.style.width = activeTab.offsetWidth + "px";
indicator.style.left = activeTab.offsetLeft + "px";
}


window.addEventListener("load", updateTabIndicator);
window.addEventListener("resize", updateTabIndicator);

function toggleCart() {
const cartEl = document.getElementById("cart");
const body = document.body;
const open = body.classList.contains("cart-open");
let menu = document.getElementById(`menu`);


if (!open) {
body.classList.add("cart-open");
cartEl.classList.add("active");
cartEl.classList.remove("hidden");
cartEl.style.opacity = 1;
menu.classList.add("shifted");
} else {
cartEl.classList.remove("active");
menu.classList.remove("shifted")
const onEnd = () => {
body.classList.remove("cart-open");
cartEl.classList.add("hidden");
cartEl.style.opacity = 0;
cartEl.removeEventListener("transitionend", onEnd);
};
cartEl.addEventListener("transitionend", onEnd);
}
}

document.addEventListener("click", e => {
if (e.target.classList.contains("menu_item_button")) addToCart(parseInt(e.target.dataset.index));
});


function addToCart(i) {
const dish = menuGroup[i];
if (!dish) return;
const ex = cart.find(x => x.name === dish.name);
if (ex) ex.quantity++;
else cart.push({ ...dish, quantity: 1 });
renderCart();
}

function changeQuantity(i, d) {
cart[i].quantity += d;
if (cart[i].quantity <= 0) cart.splice(i, 1);
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
