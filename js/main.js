document
  .querySelector("#appetizerButton")
  .addEventListener("click", showAppetizers);
document.querySelector("#entreeButton").addEventListener("click", showEntrees);
document
  .querySelector("#dessertButton")
  .addEventListener("click", showDesserts);
document.querySelector("#saladButton").addEventListener("click", showSalads);
document.querySelector(".onlineOrder").addEventListener("click", orderOnline);

// Function to remove all classes
function removeClasses() {
  let images = document.querySelectorAll(".menuItemImg");

  images.forEach((image) => image.classList.remove("hidden"));
}

function hideDesserts() {
  let desserts = document.querySelectorAll(".dessertItem");

  desserts.forEach((dessert) => {
    dessert.classList.add("hidden");
  });
}

function hideAppetizers() {
  let appetizers = document.querySelectorAll(".appetizerItem");

  appetizers.forEach((appetizer) => {
    appetizer.classList.add("hidden");
  });
}

function hideEntrees() {
  let entrees = document.querySelectorAll(".entreeItem");

  entrees.forEach((entree) => {
    entree.classList.add("hidden");
  });
}
function hideSalads() {
  let salads = document.querySelectorAll(".saladItem");

  salads.forEach((salad) => {
    salad.classList.add("hidden");
  });
}

function showEntrees() {
  hideAppetizers();
  hideDesserts();
  hideSalads();
  let entrees = document.querySelectorAll(".entreeItem");

  // Loop through the elements.
  entrees.forEach((entree) => {
    entree.classList.remove("hidden");
  });
}

function showAppetizers() {
  hideDesserts();
  hideEntrees();
  hideSalads();
  let appetizers = document.querySelectorAll(".appetizerItem");

  // Loop through the elements.
  appetizers.forEach((appetizer) => {
    appetizer.classList.remove("hidden");
  });
}
function showDesserts() {
  hideAppetizers();
  hideEntrees();
  hideSalads();
  let desserts = document.querySelectorAll(".dessertItem");

  // Loop through the elements.
  desserts.forEach((dessert) => {
    dessert.classList.remove("hidden");
  });
}

function showSalads() {
  hideAppetizers();
  hideDesserts();
  hideEntrees();
  let salads = document.querySelectorAll(".saladItem");

  salads.forEach((salad) => {
    salad.classList.remove("hidden");
  });
}

const actionOnPx = 300;

// Hide header upon page scroll
let headerEl = document.querySelector("header");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > actionOnPx) {
    headerEl.classList.add("navDown");
  } else {
    headerEl.classList.remove("navDown");
  }
};

const backToTopBtn = document.querySelector(".backToTop");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  scrollContainer().scrollTop > actionOnPx
    ? backToTopBtn.classList.add("active")
    : backToTopBtn.classList.remove("active");
});

//Scroll to top when "Back to top" button is clicked

const scrollToTop = () => {
  document.body.scrollIntoView();
};

backToTopBtn.addEventListener("click", scrollToTop);

function orderOnline() {
  const url = "https://www.grubhub.com/";
  window.open(url, "_blank").focus();
}
