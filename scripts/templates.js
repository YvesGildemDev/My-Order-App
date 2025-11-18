function initMenuStart() {
  loadMenuGroup(`starter`);
}

function loadMenuGroup(group) {
  const menuList = document.getElementById("menu-list");
  menuList.innerHTML = `<img src=""><h3>Hauptgerichte</h3>`;

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
    .forEach((t) => t.classList.remove("active"));
  document.getElementById(`menu-tab-${group}`).classList.add("active");

  renderMenuList();
  updateTabIndicator();
}

function renderMenuList() {
  const menuList = document.getElementById("menu-list");
  let html = "";
  menuGroup.forEach((dish, i) => {
    html += `
      <div class="menu_item">
        <div class="menu_item_text">
          <h4>${dish.name}</h4>
          <p>${dish.description}</p>
          <span>${dish.price.toFixed(2)}€</span>
        </div>
        <div class="menu_item_button" data-index="${i}">+</div>
      </div>`;
  });
  menuList.innerHTML = html;
}

function renderCart() {
  const list = document.getElementById("cart-list");
  let html = "";
  let subtotal = 0;

  cart.forEach((item, i) => {
    const sum = item.quantity * item.price;
    subtotal += sum;
    html += `
      <div class="cart-item">
        <div class="cart_item_description">
          <strong>${item.name}</strong>
          <span>${sum.toFixed(2)}€</span>
        </div>
        <div class="trash_nh_price">
          <button onclick="changeQuantity(${i}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${i}, 1)">+</button>
        </div>
      </div>`;
  });
  list.innerHTML = html;
  const shipping = cart.length > 0 ? 5 : 0;
  document.getElementById("subtotal").innerText = subtotal.toFixed(2) + "€";
  document.getElementById("shipping").innerText = shipping.toFixed(2) + "€";
  document.getElementById("total").innerText =
    (subtotal + shipping).toFixed(2) + "€";
}

function renderCartDialog() {
  let cartDialog = document.getElementById(`cart-dialog`);
  cartDialog.innerHTML = `
    <button onclick="closeCartDialog()" class="close_cart_dialog_button button_style">x</button
    <section class="cart_dialog_header">
      <h2>Test Bestellung abgeschickt</h2>
    </section>
    <section class="cart_dialog_main">
      <h4>Danke das sie bei uns bestellt haben, wir werden ihre Bestellung zeitnah bearbeiten!
        Bei Rückfragen, rufen sie uns einfach an, unter Tel: 0123 45 67 89.
      </h4>
    </section>
    <section class="cart_dialog_footer">
      <button class="button_style_two">Bewerten sie uns!</button>
      </section>`;
}
