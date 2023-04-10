import "../js/main.js";
import "../scss/styles.scss";

const myButton = document.querySelector(".btn");
myButton.addEventListener("click", function () {
  alert("Button clicked!");
});

document.querySelector(".modal__close").addEventListener("click", function () {
  document.querySelector(".gray_mask").style.display = "none";
  document.querySelector(".modal").style.display = "none";
});

const modalOpen = document.querySelectorAll(".modal-open");
modalOpen.forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelector(".gray_mask").style.display = "block";
    document.querySelector(".modal").style.display = "block";
  });
});
