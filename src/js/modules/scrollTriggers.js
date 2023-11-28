const toTopButton = document.getElementById("to-top-btn");
const mainHeader = document.getElementById("main-header");

const offset = 900;
const headerOffset = 70;

function scroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > offset && !toTopButton.classList.contains("is-visible")) {
    toTopButton.classList.add("is-visible");
  } else if (scrollTop < offset && toTopButton.classList.contains("is-visible")) {
    toTopButton.classList.remove("is-visible");
  }

  if (scrollTop > headerOffset && !mainHeader.classList.contains("is-active")) {
    mainHeader.classList.add("is-active");
  } else if (scrollTop < headerOffset && mainHeader.classList.contains("is-active")) {
    mainHeader.classList.remove("is-active");
  }
}
scroll();

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

toTopButton.addEventListener("click", toTop);
window.addEventListener("scroll", scroll);
