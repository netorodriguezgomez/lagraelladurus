const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-5');
      }
    });
  },
  { threshold: 0.15 },
);

revealElements.forEach((element) => {
  element.classList.add('opacity-0', 'translate-y-5', 'transition', 'duration-700');
  observer.observe(element);
});
