function toggleCart() {
  let cart = document.getElementById("cart");
  let menu = document.querySelector(".menu");

  let cardClosed = cart.classList.contains("hidden");

  if (cardClosed) {
    cart.classList.remove("hidden");
    cart.classList.add("active");
    menu.classList.add("shifted");
  } else {
    cart.classList.add("hidden");
    cart.classList.remove("active");
    menu.classList.remove("shifted");
  }
}

function addToCart(index) {
  let dish = DISHES[index];
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
