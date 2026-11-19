(() => {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  if (toggle && nav) {
    const setMenu = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
      nav.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const lightbox = document.getElementById('package-lightbox');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxTrigger = document.querySelector('[data-lightbox-trigger]');
  if (lightbox && lightboxClose && lightboxTrigger) {
    let lastTrigger = null;
    let previousOverflow = '';
    const openLightbox = () => {
      lastTrigger = lightboxTrigger;
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      lightbox.hidden = false;
      lightboxClose.focus();
    };
    const closeLightbox = () => {
      lightbox.hidden = true;
      document.body.style.overflow = previousOverflow;
      if (lastTrigger) lastTrigger.focus();
    };
    lightboxTrigger.addEventListener('click', openLightbox);
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.querySelectorAll('[data-lightbox-close]').forEach((element) => {
      element.addEventListener('click', closeLightbox);
    });
    document.addEventListener('keydown', (event) => {
      if (lightbox.hidden) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopImmediatePropagation();
        closeLightbox();
      } else if (event.key === 'Tab') {
        event.preventDefault();
        event.stopImmediatePropagation();
        lightboxClose.focus();
      }
    });
  }

  const promo = document.getElementById('promo-modal');
  const promoClose = document.getElementById('promo-close');
  if (!promo || !promoClose) return;

  const storageKey = 'ga_promo_dismissed';
  const wasDismissed = () => {
    try { return sessionStorage.getItem(storageKey) === '1'; } catch { return false; }
  };
  const dismiss = () => {
    try { sessionStorage.setItem(storageKey, '1'); } catch { return; }
  };

  window.setTimeout(() => {
    if (wasDismissed() || document.hidden) return;
    promo.hidden = false;
    requestAnimationFrame(() => promo.classList.add('is-visible'));
  }, 2200);

  promoClose.addEventListener('click', () => {
    promo.classList.remove('is-visible');
    dismiss();
    window.setTimeout(() => { promo.hidden = true; }, 450);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !promo.hidden) promoClose.click();
  });
})();
