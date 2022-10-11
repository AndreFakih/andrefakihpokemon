console.log("Starting tweaks");
const product1 = document.getElementById("product1");
const wrapper = document.getElementById("wrapper");
const newBox = document.getElementById("newBox");
const productBox1 = document.getElementById("productBox1");
const productBox2 = document.getElementById("productBox2");

function getDetail(nomor) {
  console.log("product: ", nomor);
  newBox.style.display = "block";
  wrapper.style.display = "none";

  if (nomor === 1) {
    productBox1.style.display = "flex";
  } else if (nomor === 2) productBox2.style.display = "flex";
}

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-nav-toggle");
navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
