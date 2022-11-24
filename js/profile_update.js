export const pu_openModal = () => {
  const modal = document.querySelector(".pu_modal");
  modal.classList.remove("pu_hidden");
};

export const pu_closeModal = () => {
  const modal = document.querySelector(".pu_modal");
  modal.classList.add("pu_hidden");
};
