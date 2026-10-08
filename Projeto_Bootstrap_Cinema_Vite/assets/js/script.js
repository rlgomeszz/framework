
document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const search = document.querySelector("#globalSearch");
  const cards = document.querySelectorAll("[data-searchable]");
  if (search && cards.length) {
    search.addEventListener("input", () => {
      const term = search.value.toLowerCase().trim();
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.closest(".col")?.classList.toggle("d-none", term && !text.includes(term));
      });
    });
  }

  document.querySelectorAll(".demo-form").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const alertBox = form.querySelector(".form-feedback");
      if (alertBox) {
        alertBox.classList.remove("d-none");
        alertBox.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Cadastro simulado realizado com sucesso! (Projeto demonstrativo)';
      }
    });
  });
});
