(() => {
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const visible = new Set();
  const update = () => {
    const current = sections.find(section => visible.has(section.id));
    if (!current) return;
    for (const link of links) {
      const active = link.hash === `#${current.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) visible.add(entry.target.id);
      else visible.delete(entry.target.id);
    }
    update();
  }, { rootMargin: '-5% 0px -35% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
})();
