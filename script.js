// Handle mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav when clicking a link (on mobile)
  navLinks.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'a') {
      navLinks.classList.remove('open');
    }
  });
}

// Smooth scroll (for older browsers that don't support CSS scroll-behavior well)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    e.preventDefault();
    window.scrollTo({
      top: targetElement.offsetTop - 72,
      behavior: 'smooth',
    });
  });
});

// Update active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  const scrollPos = window.scrollY;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const offsetTop = scrollPos + rect.top;
    const offsetBottom = offsetTop + rect.height;
    const id = section.getAttribute('id');

    if (scrollPos + 100 >= offsetTop && scrollPos + 100 < offsetBottom) {
      navAnchors.forEach((a) => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// Set current year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

