// Smooth scrolling
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Reveal Animation on scroll
const revealElements = document.querySelectorAll('.section');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('reveal');
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Random floating animation effect
setInterval(() => {
  const cards = document.querySelectorAll('.project-card');
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  randomCard.classList.add('float');
  setTimeout(() => randomCard.classList.remove('float'), 1000);
}, 2000);
