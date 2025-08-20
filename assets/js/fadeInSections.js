document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-section');
  if (!sections.length) return;

  // Reveal helper
  const reveal = el => el.classList.add('visible');

  // Reveal any sections already in view
  const revealVisibleSections = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal(section);
      }
    });
  };

  // Set up IntersectionObserver for scroll-triggered reveals
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        reveal(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  // Observe all fade-section elements
  sections.forEach(section => observer.observe(section));

  // Reveal anything already visible on load
  revealVisibleSections();
});
