// <-------------------- Basic Render Templates --------------------> //
// <----- Menu -----> //
function renderMenuList(currentMenuGroup) {
  let menuListRef = document.getElementById("menu-list");
  let currentMenuGroupImage = MENU_IMAGES[currentMenuGroup] || "";
  let currentMenuTitle = MENU_TITLES[currentMenuGroup] || "";
  let menuList = `<img src="${currentMenuGroupImage.image}" alt="${currentMenuGroupImage.alt}"><h3>${currentMenuTitle}</h3>`;

  menuGroup.forEach((menu, currentMenu) => {
    menuList += `
      <div class="menu_item">
        <div class="menu_item_text">
          <h4>${menu.name}</h4>
          <p>${menu.description}</p>
          <span>${menu.price.toFixed(2)}€</span>
        </div>
        <div title="FÜge ${currentMenu.name} dem Warenkorb hinzu" class="menu_item_button" data-index="${currentMenu}">+</div>
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
          <button name="Entferne 1 mal ${currentItem.name}aus dem Warenkorb" onclick="changeQuantity(${quantity}, -1)">-</button>
          <span>${currentItem.quantity}</span>
          <button name="Füge ${currentItem.name} 1 mal hinzu" onclick="changeQuantity(${quantity}, 1)">+</button>
          <button name="${currentItem.name} aus dem Warenkorb entfernen" class="cart_trash_button" data-index="${quantity}">🗑️</button>
        </div>
      </div>`;
  });
  
  if (subtotal === 0) {
    cartListItem = `<span>Der Warenkorb ist leer</span>`;
  }

  cartListRef.innerHTML = cartListItem;

  trashButtonEvent();
  calculateEndPrice(subtotal);
}

function renderCartDialog() {
  let cartDialogRef = document.getElementById(`cart-dialog`);
  cartDialogRef.innerHTML = `
    <button name="Schließe den Dialog" id="close-cart-dialog-button" class="close_cart_dialog_button button_style">x</button
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
  
    closeCardDialogEvent();
}
