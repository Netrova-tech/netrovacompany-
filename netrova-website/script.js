// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ============ HAMBURGER MENU ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ============ CONTACT FORM ============
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    formSuccess.style.display = 'block';
    form.reset();
    btn.textContent = 'Send Message 🚀';
    btn.disabled = false;
    setTimeout(() => formSuccess.style.display = 'none', 5000);
  }, 1200);
});

// ============ SCROLL REVEAL ============
const revealEls = document.querySelectorAll('.service-card, .about-card, .section-title, .section-desc');

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

revealEls.forEach(el => {
  el.classList.add('reveal-init');
  observer.observe(el);
});
