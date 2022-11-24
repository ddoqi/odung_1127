export const openModal = () => {
  const modal = document.querySelector(".modal");

  const OpenBtn = document.querySelector(".open_modal");
  console.log(modal);
  modal.classList.remove("hidden");
};

export const closeModal = () => {
  const modal = document.querySelector(".modal");
  const closeBtn = modal.querySelector(".close_modal");
  const overlay = modal.querySelector(".modal_overlay");
  modal.classList.add("hidden");
};
// dropdown

export const dropdown = () => {
  let v = document.querySelector(".dropdown-content");
  let dropbtn = document.querySelector(".dropbtn");

  v.classList.toggle("show");
  dropbtn.style.borderColor = "rgb(94, 94, 94)";
};

export const showMenu = (value) => {
  const dropbtn_icon = document.querySelector(".dropbtn_icon");
  const dropbtn_content = document.querySelector(".dropbtn_content");
  const dropbtn_click = document.querySelector(".dropbtn_click");
  const dropbtn = document.querySelector(".dropbtn");
  let v = document.querySelector(".dropdown-content");

  dropbtn_icon.innerText = "";
  dropbtn_content.innerText = value;
  dropbtn_content.style.color = "#252525";
  dropbtn.style.borderColor = "#ffa920";
  v.classList.remove("show");
};
