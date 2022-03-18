const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const quantity = document.querySelector(".quantity");
const selectionCoffee = document.querySelectorAll(".selection-coffee");
const coffeePrice = document.querySelector(".coffee-price");
const selectionGram = document.querySelectorAll(".selection-gram");
const halfKilo = document.querySelector(".half-kilo");
const quarterKilo = document.querySelector(".quarter-kilo");
const oneKilo = document.querySelector(".one-kilo");

selectionCoffee.forEach((item) => {
  item.addEventListener("click", () => {
    selectionCoffee.forEach((item) => {
      item.classList.remove("orange-border");
    });
    item.classList.toggle("orange-border");
  });
});

selectionGram.forEach((item) => {
  item.addEventListener("click", () => {
    selectionGram.forEach((item) => {
      item.classList.remove("orange-border");
    });
    item.classList.toggle("orange-border");
    if (halfKilo.classList.contains("orange-border")) {
      coffeePrice.textContent = "$39.99";
    } else if (quarterKilo.classList.contains("orange-border")) {
      coffeePrice.textContent = "$24.99";
    } else if (oneKilo.classList.contains("orange-border")) {
      coffeePrice.textContent = "$74.99";
    }
  });
});

minusBtn.addEventListener("click", () => {
  if (+quantity.textContent > 1) quantity.innerHTML = +quantity.textContent - 1;
});

plusBtn.addEventListener("click", () => {
  quantity.innerHTML = 1 + +quantity.textContent;
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////////////////////////////////////////////
// Make mobile navigation work

const navbarLinks = document.getElementsByClassName("main-nav")[0];
const closeButton = document.querySelector(".icon-mobile-nav-close");
const openButton = document.querySelector(".icon-mobile-nav");
openButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  openButton.style.display = "none";
  closeButton.style.display = "block";
});

closeButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  closeButton.style.display = "none";
  openButton.style.display = "block";
});

//////////////////////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      closeButton.style.display = "none";
      openButton.style.display = "block";
      navbarLinks.classList.toggle("active");
    }
  });
});

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
