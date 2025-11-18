function initMenuStart() {
  loadMenuGroup(`starter`);

  window.addEventListener("load", updateTabIndicator);
  window.addEventListener("resize", updateTabIndicator);
}

function loadMenuGroup(group) {
  let menuList = document.getElementById("menu-list");
  menuList.innerHTML = `
    <img src="">
    <h3>Hauptgerichte</h3>`;

  switch (group) {
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
  document
    .querySelectorAll(".menu_tab")
    .forEach((tab) => tab.classList.remove("active"));
  document.getElementById(`menu-tab-${group}`).classList.add("active");

  renderMenuList();
  updateTabIndicator();
}

function renderMenuList() {
  let menuList = document.getElementById("menu-list");
  menuGroup.forEach((dish, index) => {
    menuList.innerHTML += `
      <div class="menu_item">
        <div class="menu_item_text">
          <h4>${dish.name}</h4>
          <p>${dish.description}</p>
          <span>${dish.price.toFixed(2)}€</span>
        </div>
        <div class="menu_item_button" onclick="addToCart(${index})">+</div>
      </div>
    `;
  });
}

function renderCart() {
  let cartList = document.getElementById("cart-list");
  let subtotalRef = document.getElementById("subtotal");
  let totalRef = document.getElementById("total");
  let shipping = 5.0;

  cartList.innerHTML = "";

  let subtotal = 0;

  cart.forEach((item, index) => {
    let totalItem = item.price * item.quantity;
    subtotal += totalItem;

    cartList.innerHTML += `
        <div class="cart-item">

            <div>
              <h4>${item.name}</h4>
              <p>
                <button onclick="changeQuantity(${index}, -1)">-</button>
                ${item.quantity}
                <button onclick="changeQuantity(${index}, 1)">+</button>
                x ${item.price.toFixed(2)}€
              </p>
            </div>

            <div class="trash_nh_price">
              <span>${totalItem.toFixed(2)}€</span>
              <button onclick="changeQuantity(${index}, ${-item.quantity})">🗑️</button>
            </div>

        </div>
    `;
  });

  subtotalRef.textContent = `${subtotal.toFixed(2)}€`;
  totalRef.textContent = `${(subtotal + shipping).toFixed(2)}€`;
}
