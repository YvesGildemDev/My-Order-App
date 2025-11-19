// <-------------------- Basic Functions --------------------> //
// <----- Init Function -----> //
function initMenuStart() {
  loadCurrentMenuTab(`starter`);
}

window.addEventListener("load", updateTabIndicator);
window.addEventListener("resize", updateTabIndicator);

// <----- Menu -----> //
function loadCurrentMenuTab(currentTab) {
  let menuListRef = document.getElementById("menu-list");
  menuListRef.innerHTML = `<img src=""><h3>Hauptgerichte</h3>`;

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
  menuTabEvent();
  renderMenuList();
}