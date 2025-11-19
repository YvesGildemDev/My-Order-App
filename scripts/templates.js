// <-------------------- Basic Render Templates --------------------> //
// <----- Menu -----> //
function renderMenuList(currentMenuGroup) {
  let menuListRef = document.getElementById("menu-list");
  let currentMenuGroupImage = MENU_IMAGES[currentMenuGroup] || "";
  let menuList = `<img src="${currentMenuGroupImage}"><h3>Hauptgerichte</h3>`;

  menuGroup.forEach((menu, menuIndex) => {
    menuList += `
      <div class="menu_item">
        <div class="menu_item_text">
          <h4>${menu.name}</h4>
          <p>${menu.description}</p>
          <span>${menu.price.toFixed(2)}€</span>
        </div>
        <div class="menu_item_button" data-index="${menuIndex}">+</div>
      </div>`;
  });

  menuListRef.innerHTML = menuList;
  
  addToCartEvent();
}

// <----- Cart -----> //
function renderCart() {
  let cartListRef = document.getElementById("cart-list");
  let cartListItem = "";
  let subtotal = 0;

  if (cart.length === 0) {
    cartListRef.innerHTML = "";
    calculateEndPrice();
    return;
  }
  cart.forEach((currentItem, quantity) => {
    let fullItemPrice = currentItem.quantity * currentItem.price;
    subtotal += fullItemPrice;
    cartListItem += `
      <div class="cart-item">
        <div class="cart_item_description">
          <strong>${currentItem.name}</strong>
          <span>${fullItemPrice.toFixed(2)}€</span>
        </div>
        <div class="trash_nh_price">
          <button onclick="changeQuantity(${quantity}, -1)">-</button>
          <span>${currentItem.quantity}</span>
          <button onclick="changeQuantity(${quantity}, 1)">+</button>
          <button class="cart_trash_button" data-index="${quantity}">🗑️</button>
        </div>
      </div>`;
  });

  cartListRef.innerHTML = cartListItem;

  trashButtonEvent();
  calculateEndPrice(subtotal);
}

function renderCartDialog() {
  let cartDialogRef = document.getElementById(`cart-dialog`);
  cartDialogRef.innerHTML = `
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
