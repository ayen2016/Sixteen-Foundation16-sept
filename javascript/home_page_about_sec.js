  
(function () {
  const slider = document.getElementById('abt_sec_slider');
  const slidesWrapper = slider.querySelector('.abt_sec_slides');
  const slides = Array.from(slidesWrapper.children);
  const prevBtn = slider.querySelector('.abt_sec_prev');
  const nextBtn = slider.querySelector('.abt_sec_next');
  const dotsContainer = slider.querySelector('.abt_sec_dots');
  if (!slider || slides.length === 0) return;

  let current = 0;
  const total = slides.length;
  const transitionMs = 600;
  let isAnimating = false;
  let autoPlayTimer = null;
  const autoPlayDelay = 4000;

  // Create dots
  for (let i = 0; i < total; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
    btn.setAttribute('data-index', i);
    btn.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
    btn.addEventListener('click', () => {
      goToSlide(i);
      restartAutoplay();
    });
    dotsContainer.appendChild(btn);
  }

  function updateDots() {
    Array.from(dotsContainer.children).forEach((d, idx) => {
      d.setAttribute('aria-pressed', idx === current ? 'true' : 'false');
    });
  }

  function setTranslateX(index) {
    slidesWrapper.style.transform = `translateX(${-index * 100}%)`;
  }

  function goToSlide(index) {
    if (isAnimating || index === current) return;
    isAnimating = true;
    current = (index + total) % total;
    setTranslateX(current);
    updateDots();
    setTimeout(() => { isAnimating = false; }, transitionMs + 10);
  }

  function next() { goToSlide(current + 1); }
  function prev() { goToSlide(current - 1); }

  prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
  nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { prev(); restartAutoplay(); }
    else if (e.key === 'ArrowRight') { next(); restartAutoplay(); }
  });

  function startAutoplay() {
    if (autoPlayTimer || total <= 1) return;
    autoPlayTimer = setInterval(next, autoPlayDelay);
  }

  function stopAutoplay() { clearInterval(autoPlayTimer); autoPlayTimer = null; }
  function restartAutoplay() { stopAutoplay(); startAutoplay(); }

  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);
  slider.addEventListener('touchstart', stopAutoplay, {passive:true});
  slider.addEventListener('touchend', startAutoplay, {passive:true});

  setTranslateX(0);
  updateDots();
  startAutoplay();
})();