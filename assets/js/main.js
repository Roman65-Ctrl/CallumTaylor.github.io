console.log("Scroll animation script loaded.");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-section').forEach(section => {
  observer.observe(section);
});
