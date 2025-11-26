// ===========================
// HERO SLIDESHOW
// ===========================
const heroSlides = document.querySelectorAll('.hero-slide');
let currentHero = 0;

if (heroSlides.length > 0) {
  heroSlides[currentHero].classList.add('active');

  setInterval(() => {
    heroSlides[currentHero].classList.remove('active');
    currentHero = (currentHero + 1) % heroSlides.length;
    heroSlides[currentHero].classList.add('active');
  }, 4000);
}

// ===========================
// FADE-IN ON SCROLL
// ===========================
const faders = document.querySelectorAll('.fade-in');

function scrollFade() {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', scrollFade);
window.addEventListener('load', scrollFade);

// ===========================
// MOBILE SLIDERS (WHY CHOOSE US & CLIENT REVIEWS)
// ===========================
(function() {
  const sliders = [
    document.querySelector('.review-slider'),
    document.querySelector('.why-slider')
  ];

  sliders.forEach(slider => {
    if (!slider) return;

    // Enable scroll-snap behavior
    slider.style.scrollSnapType = 'x mandatory';
    const cards = slider.querySelectorAll('.col-10');
    cards.forEach(card => {
      card.style.scrollSnapAlign = 'start';
      card.style.flex = '0 0 auto';
    });

    // Auto-scroll only on mobile
    let scrollAmount = 0;
    if (cards.length === 0) return;

    const step = cards[0].offsetWidth + parseInt(getComputedStyle(slider).gap || 16);

    setInterval(() => {
      if (window.innerWidth < 768) { // mobile only
        scrollAmount += step;
        if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
          scrollAmount = 0;
        }
        slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3500);
  });
})();
