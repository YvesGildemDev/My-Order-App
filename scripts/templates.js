// <-------------------- Basic Render Templates --------------------> //
// <----- Menu -----> //
function renderMenuList() {
  let menuListRef = document.getElementById("menu-list");
  let html = "";
  menuGroup.forEach((dish, index) => {
    html += `
      <div class="menu_item">
        <div class="menu_item_text">
          <h4>${dish.name}</h4>
          <p>${dish.description}</p>
          <span>${dish.price.toFixed(2)}€</span>
        </div>
        <div class="menu_item_button" data-index="${index}">+</div>
      </div>`;
  });
  menuListRef.innerHTML = html;
}

// <----- Cart -----> //
function renderCart() {
  let cartListRef = document.getElementById("cart-list");
  let listHtml = "";
  let subtotal = 0;

  if (cart.length === 0) {
    cartListRef.innerHTML = "";
    calculateEndPrice();   // optional → setzt Preis auf 0
    return;
  }
  cart.forEach((currentItem, quantity) => {
    let quantityPrice = currentItem.quantity * currentItem.price;
    subtotal += quantity;
    listHtml += `
      <div class="cart-item">
        <div class="cart_item_description">
          <strong>${currentItem.name}</strong>
          <span>${quantityPrice.toFixed(2)}€</span>
        </div>
        <div class="trash_nh_price">
          <button onclick="changeQuantity(${quantity}, -1)">-</button>
          <span>${currentItem.quantity}</span>
          <button onclick="changeQuantity(${quantity}, 1)">+</button>
          <button class="cart_trash_button" data-index="${quantity}">🗑️</button>
        </div>
      </div>`;
  });

  cartListRef.innerHTML = listHtml;
  let cartTrashButton = document.querySelectorAll(".cart_trash_button");
    cartTrashButton.forEach((trashButton) => {
      trashButton.addEventListener("click", () => {
        let currentItem = trashButton.dataset.index;
        deleteCartItem(currentItem);
      })
  });
  calculateEndPrice(subtotal);

};

 

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
