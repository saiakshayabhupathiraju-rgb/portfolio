/* ===== Mobile menu toggle ===== */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.classList.toggle('toggle');
  burger.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('toggle');
    burger.setAttribute('aria-expanded', 'false');
  })
);

/* ===== Typing effect in hero ===== */
const roles = ['Entry-Level Fresher', 'C Programming', 'MySQL', 'MS Office', 'Digital Marketing'];
const typedEl = document.getElementById('typed');
let ri = 0, ci = 0, deleting = false;

(function type() {
  const word = roles[ri];
  typedEl.textContent = word.slice(0, ci);
  if (!deleting) {
    ci++;
    if (ci === word.length) { deleting = true; return setTimeout(type, 1700); }
    setTimeout(type, 110);
  } else {
    ci--;
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    setTimeout(type, 45);
  }
})();

/* ===== Reveal on scroll ===== */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ===== Navbar shadow + active link on scroll ===== */
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

function onScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 160) current = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ===== Footer year ===== */
document.getElementById('year').textContent = new Date().getFullYear();
