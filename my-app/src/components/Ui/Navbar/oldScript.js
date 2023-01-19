// ---------------------------------------------- Main Menu ------------------- //
// -------- STEP 1 -------- //
const _tabs = document.querySelectorAll("[data-tab]");
const _content = document.getElementsByClassName("active");
const _sideBar = document.querySelector(".sideBar");
const _navBarOverlay = document.querySelector(".navBarOverlay");

// -------- STEP 3 -------- //
const toggleContent = function () {
  // Part One
  if (!this.classList.contains("active")) {
    Array.from(_content).forEach((item) => {
      item.classList.remove("active");
    });

    Array.from(_subContent).forEach((item) => {
      item.classList.remove("subActive");
    });

    this.classList.add("active");

    _sideBar.classList.add("active");
    _navBarOverlay.classList.add("active");

    // Part Two
    let currentTab = this.getAttribute("data-tab"),
      _tabContent = document.getElementById(currentTab);
    _tabContent.classList.add("active");
  }
};

// -------- STEP 2 -------- //
Array.from(_tabs).forEach((item) => {
  item.addEventListener("click", toggleContent);
});

// ---------------------------------------------- Sub Menu ------------------- //
// -------- STEP 1 -------- //
const _subTabs = document.querySelectorAll("[data-subtab]");
const _subContent = document.getElementsByClassName("subActive");

// -------- STEP 3 -------- //
const toggleSubContent = function () {
  // Part One
  if (!this.classList.contains("subActive")) {
    Array.from(_subContent).forEach((item) => {
      item.classList.remove("subActive");
    });

    this.classList.add("subActive");

    // Part Two
    let currentSubTab = this.getAttribute("data-subtab"),
      _tabSubContent = document.getElementById(currentSubTab);
    _tabSubContent.classList.add("subActive");
  }
};

// -------- STEP 2 -------- //
Array.from(_subTabs).forEach((item) => {
  item.addEventListener("click", toggleSubContent);
});

// ------------------------------------------------------------ Close menu -----------//
const sideBarClose = document.querySelector(".sideBarClose");
const closeSideBar = document.querySelector(".closeSideBar");

function closeMenu() {
  _sideBar.classList.remove("active");
  _navBarOverlay.classList.remove("active");

  Array.from(_content).forEach((item) => {
    item.classList.remove("active");
  });
  Array.from(_subContent).forEach((item) => {
    item.classList.remove("active");
  });
}

sideBarClose.addEventListener("click", closeMenu);
closeSideBar.addEventListener("click", closeMenu);

// const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
// const hamburger= document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleMenu);
