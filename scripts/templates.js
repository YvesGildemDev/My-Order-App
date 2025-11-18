function renderMenu() {
  let menuList = document.getElementById("menu-list");
  menuList.innerHTML = `
    <img src="">
    <h3>Hauptgerichte</h3>`;

  for (let index = 0; index < MAINDISHES.length; index++) {
    let dish = MAINDISHES[index];

    if (dish.price > 0) {
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
    }
  }
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
