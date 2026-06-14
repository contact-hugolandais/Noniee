const header = document.getElementById('header');
const navToggle = document.querySelector('.nav-toggle');
const navDrawer = document.querySelector('.nav-drawer');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

navToggle.addEventListener('click', () => {
  const isOpen = navDrawer.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
  navDrawer.setAttribute('aria-hidden', !isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navDrawer.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navDrawer.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    navDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

const revealTargets = document.querySelectorAll(
  '.story-layout, .creations-layout, .nonna-inner, .services-layout, .contact-layout'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
);

revealTargets.forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

const form = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
  form.reset();
  const btn = form.querySelector('.btn-submit');
  btn.textContent = 'Envoyé ✓';
  btn.classList.add('sent');
  setTimeout(() => {
    formNote.hidden = true;
    btn.textContent = 'Envoyer';
    btn.classList.remove('sent');
  }, 5000);
});
