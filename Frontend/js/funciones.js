document.addEventListener("DOMContentLoaded", () => {
  const horarioButtons = document.querySelectorAll(".horario-btn");

  horarioButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      horarioButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
