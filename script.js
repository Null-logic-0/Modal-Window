"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".close-modal");
const openButtonModal = document.querySelectorAll(".show-modal");

const open = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < openButtonModal.length; i++) {
  openButtonModal[i].addEventListener("click", open);

  closeModalButton.addEventListener("click", close);
  overlay.addEventListener("click", close);
}

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    close();
  }
});
