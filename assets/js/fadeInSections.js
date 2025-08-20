document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-section');

  if (!sections.length) return; // nothing to do

  // Helper: reveal element
  const reveal = el => el.classList.add('visible');

  // Helper: check which sections are already visible
  const revealVisibleSections = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal(section);
      }
    });
  };

  // If page isn't tall enough to scroll → reveal immediately
  if (document.documentElement.scrollHeight <= window.innerHeight) {
    revealVisibleSections();
    return;
  }

  // Otherwise, observe scroll into view
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

  sections.forEach(section => observer.observe(section));

  // Safety check: reveal anything already in view on load
  revealVisibleSections();
});

