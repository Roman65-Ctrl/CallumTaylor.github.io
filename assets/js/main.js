console.log("Scroll animation script loaded.");

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Optional: stop observing once visible
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
});


