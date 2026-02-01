const aside = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
  aside.classList.toggle("active");
});

document.querySelectorAll("aside a").forEach(link => {
  link.addEventListener("click", () => {
    aside.classList.remove("active");
  });
});

