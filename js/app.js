window.onload = () => {
  const button = document.querySelector(".btn");
  const close = document.querySelector(".card .close");
  const card = document.querySelector(".card");
  button.addEventListener("click", () => {
    // button.classList.add("hidden");
    card.style.display = "block";
    card.classList.remove("hidden");
  });
  close.addEventListener("click", () => {
    card.classList.add("hidden");
    // button.classList.remove("hidden");
    setTimeout(() => {
      card.style.display = "none";
    }, 1000);
  });
};
