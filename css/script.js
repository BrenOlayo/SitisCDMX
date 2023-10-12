document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementElement;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }