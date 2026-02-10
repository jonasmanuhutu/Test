const cursor = document.querySelector('.cursor');
const hoverTargets = document.querySelectorAll('a, button, .project-card');
const revealItems = document.querySelectorAll('.reveal');
const menuButton = document.querySelector('.menu-button');
const menuOverlay = document.querySelector('.menu-overlay');

const moveCursor = (event) => {
  if (!cursor) return;
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
};

const setCursorActive = (active) => {
  if (!cursor) return;
  cursor.classList.toggle('active', active);
};

hoverTargets.forEach((target) => {
  target.addEventListener('mouseenter', () => setCursorActive(true));
  target.addEventListener('mouseleave', () => setCursorActive(false));
});

window.addEventListener('mousemove', moveCursor);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuOverlay.classList.toggle('open', !expanded);
  menuOverlay.setAttribute('aria-hidden', String(expanded));
  document.body.style.overflow = expanded ? '' : 'hidden';
});

menuOverlay?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuOverlay.classList.remove('open');
    menuOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

const cards = document.querySelectorAll('.project-card');
cards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    const rotY = px * 8;
    const rotX = -py * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });
});
