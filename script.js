function initMenuStart() {
  loadCurrentMenuTab(`starter`);
  initEventListeners();
}

window.addEventListener("load", updateTabIndicatorBar);
window.addEventListener("resize", updateTabIndicatorBar);

// <----- Menu -----> //
function loadCurrentMenuTab(currentTab) {
  let currentMenuGroup = "starter";
  currentMenuGroup = currentTab;

  switch (currentTab) {
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

  currentMenuTab(currentTab);
  renderMenuList(currentMenuGroup);
  renderCart();
}

function initEventListeners() {
  basicEvents();
  cartEvents();
}
