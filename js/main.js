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

  const desktopNav = window.matchMedia('(min-width: 1101px)');
  const header = document.querySelector('.site-header');
  if (header && desktopNav) {
    let lock = null;
    let lockedY = 0;
    let settling = false;

    const setSplit = (split) => header.classList.toggle('is-split', split);

    const resetSplit = () => {
      setSplit(false);
      lock = null;
      settling = false;
      lockedY = window.scrollY;
    };

    const onScroll = () => {
      if (!desktopNav.matches) return;
      const y = window.scrollY;
      if (y <= 4) {
        resetSplit();
        return;
      }
      if (lock === 'split') return;
      if (lock === 'normal') {
        if (settling || Math.abs(y - lockedY) < 2) return;
        lock = null;
      }
      if (y > 80) {
        setSplit(true);
        lock = 'split';
      } else {
        setSplit(false);
      }
    };

    header.addEventListener('click', (event) => {
      if (!desktopNav.matches || !header.classList.contains('is-split')) return;
      if (event.target.closest('.site-header, .brand, .site-nav, .header-cta')) event.preventDefault();
      setSplit(false);
      lock = 'normal';
      settling = true;
      lockedY = window.scrollY;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          lockedY = window.scrollY;
          settling = false;
        });
      });
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    desktopNav.addEventListener('change', () => {
      resetSplit();
      if (desktopNav.matches) onScroll();
    });
    onScroll();
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const lightbox = document.getElementById('package-lightbox');
  const lightboxPanel = lightbox && lightbox.querySelector('.lightbox-panel');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxInfo = document.getElementById('lightbox-info');
  const lightboxKicker = document.getElementById('lightbox-kicker');
  const lightboxHeading = document.getElementById('lightbox-heading');
  const lightboxText = document.getElementById('lightbox-text');
  const lightboxWa = document.getElementById('lightbox-wa');
  const cateringWaHref = document.querySelector('#menu-catering [data-catering-wa]')?.getAttribute('href') || '';

  if (lightbox && lightboxPanel && lightboxImage && lightboxClose) {
    let lastTrigger = null;
    let previousOverflow = '';

    const infoFor = (img) => {
      const card = img.closest('.package-card');
      if (card) {
        const title = card.querySelector('h3')?.textContent.trim() || img.alt;
        const parts = [
          card.querySelector('.package-tag')?.textContent.trim(),
          card.querySelector('.package-tagline')?.textContent.trim(),
          card.querySelector('.package-meta')?.textContent.trim(),
        ].filter(Boolean);
        return {
          kicker: 'Paket',
          title,
          heading: title,
          text: parts.join(' · '),
          waHref: card.querySelector('.btn')?.getAttribute('href') || '',
          waLabel: 'Tanyakan terkait paket ini',
        };
      }
      const cateringFigure = img.closest('#menu-catering figure');
      if (cateringFigure) {
        const caption = cateringFigure.querySelector('figcaption')?.textContent.trim() || img.alt;
        return {
          kicker: 'Menu Catering',
          title: caption,
          heading: caption,
          text: '',
          waHref: cateringWaHref,
          waLabel: 'Tanya Terkait Menu Catering',
        };
      }
      const figure = img.closest('.gallery-grid figure');
      if (figure) {
        const caption = figure.querySelector('figcaption')?.textContent.trim() || img.alt;
        return {
          kicker: 'Galeri',
          title: caption,
          heading: caption,
          text: '',
          waHref: `https://wa.me/6287896102009?text=${encodeURIComponent(`Halo Garasi Aqiqah, saya ingin bertanya terkait foto ${caption}.`)}`,
          waLabel: 'Tanyakan terkait foto ini',
        };
      }
      return { kicker: '', title: img.alt || 'Gambar', heading: '', text: '', waHref: '', waLabel: '' };
    };

    const openLightbox = (trigger, img, focusTarget = trigger, imageSrc = '', altText = '') => {
      lastTrigger = focusTarget;
      const info = imageSrc ? {} : infoFor(img);
      lightboxImage.src = imageSrc || img.dataset.fullImage || img.currentSrc || img.src;
      lightboxImage.alt = altText || img.alt;
      lightboxTitle.textContent = info.title || '';
      lightboxKicker.textContent = info.kicker || '';
      lightboxHeading.textContent = info.heading || '';
      lightboxText.textContent = info.text || '';
      const hasInfo = Boolean(info.kicker);
      lightboxInfo.hidden = !hasInfo;
      lightboxPanel.classList.toggle('has-info', hasInfo);
      if (hasInfo) {
        lightboxWa.href = info.waHref;
        lightboxWa.textContent = info.waLabel;
      }
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

    document.querySelectorAll('main img').forEach((img) => {
      if (img.closest('a') || img.closest('.lightbox')) return;
      let trigger = img.closest('button');
      if (!trigger) {
        trigger = document.createElement('button');
        trigger.type = 'button';
        trigger.className = 'image-zoom';
        img.before(trigger);
        trigger.appendChild(img);
      } else {
        trigger.classList.add('image-zoom');
      }
      trigger.setAttribute('aria-label', img.alt ? `Perbesar ${img.alt}` : 'Perbesar gambar');
      trigger.addEventListener('click', () => openLightbox(trigger, img));
    });

    document.querySelectorAll('[data-detail-target]').forEach((card) => {
      const target = document.querySelector(card.dataset.detailTarget);
      const img = target && target.querySelector('img');
      if (!img) return;
      const heading = card.querySelector('h4')?.textContent.trim() || 'detail ini';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-haspopup', 'dialog');
      card.setAttribute('aria-controls', 'package-lightbox');
      card.setAttribute('aria-label', `Lihat detail ${heading}`);
      const previewSrc = card.dataset.lightboxImage;
      const open = () => {
        if (previewSrc) {
          openLightbox(card, img, card, previewSrc, heading);
          return;
        }
        openLightbox(img.closest('button') || card, img, card);
      };
      card.addEventListener('click', open);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open();
        }
      });
    });

    document.querySelectorAll('[data-scroll-target]').forEach((card) => {
      const target = document.querySelector(card.dataset.scrollTarget);
      if (!target) return;
      const heading = card.querySelector('h4')?.textContent.trim() || 'bagian ini';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Lihat ${heading}`);
      const go = () => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      };
      card.addEventListener('click', go);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          go();
        }
      });
    });

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
        return;
      }
      if (event.key !== 'Tab') return;
      const focusables = [...lightbox.querySelectorAll('button, a[href]')].filter((element) => !element.hidden && element.offsetParent !== null);
      if (!focusables.length) {
        event.preventDefault();
        event.stopImmediatePropagation();
        lightboxClose.focus();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!lightbox.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
      event.stopImmediatePropagation();
    });
  }

  document.querySelectorAll('[data-coverflow]').forEach((root) => {
    const viewport = root.querySelector('.coverflow-viewport');
    const items = [...root.querySelectorAll('.coverflow-track > *')];
    const prev = root.querySelector('[data-coverflow-prev]');
    const next = root.querySelector('[data-coverflow-next]');
    const counter = root.querySelector('[data-youtube-position], [data-carousel-position]');
    if (!viewport || items.length < 2) return;

    root.setAttribute('role', 'group');
    root.setAttribute('aria-roledescription', 'carousel');
    root.setAttribute('aria-label', root.closest('section')?.querySelector('h2')?.textContent.trim() || 'Carousel');
    items.forEach((item, i) => {
      item.classList.add('coverflow-item');
      item.setAttribute('role', 'group');
      item.setAttribute('aria-roledescription', 'slide');
      item.setAttribute('aria-label', `${i + 1} dari ${items.length}`);
    });

    let index = root.closest('#menu-catering') ? 0 : Math.floor((items.length - 1) / 2);
    let frame = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setActive = (nextIndex) => {
      index = Math.max(0, Math.min(items.length - 1, nextIndex));
      items.forEach((item, i) => {
        item.classList.toggle('is-active', i === index);
        item.classList.toggle('is-neighbor', Math.abs(i - index) === 1);
        if (i === index) item.setAttribute('aria-current', 'true');
        else item.removeAttribute('aria-current');
      });
      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index === items.length - 1;
      if (counter) counter.textContent = `${index + 1} / ${items.length}`;
    };

    const itemCenter = (item) => item.offsetLeft - viewport.offsetLeft + item.offsetWidth / 2;

    const centerOn = (nextIndex, smooth) => {
      setActive(nextIndex);
      const item = items[index];
      const left = itemCenter(item) - viewport.clientWidth / 2;
      viewport.scrollTo({ left, behavior: smooth && !reduceMotion ? 'smooth' : 'auto' });
    };

    const nearest = () => {
      const center = viewport.scrollLeft + viewport.clientWidth / 2;
      return items.reduce((best, item, i) => {
        const distance = Math.abs(itemCenter(item) - center);
        return distance < best.distance ? { i, distance } : best;
      }, { i: index, distance: Infinity }).i;
    };

    viewport.addEventListener('scroll', () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActive(nearest()));
    }, { passive: true });
    if (prev) prev.addEventListener('click', () => centerOn(index - 1, true));
    if (next) next.addEventListener('click', () => centerOn(index + 1, true));
    viewport.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        centerOn(index + 1, true);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        centerOn(index - 1, true);
      }
    });
    window.addEventListener('resize', () => centerOn(index, false));
    setActive(index);
    centerOn(index, false);
    requestAnimationFrame(() => centerOn(index, false));
  });

  const youtubeCards = [...document.querySelectorAll('.youtube-card')];
  const syncYoutubeDescriptions = () => {
    youtubeCards.forEach((card) => {
      const description = card.querySelector('.youtube-description');
      const toggle = card.querySelector('.youtube-toggle');
      if (!description || !toggle || description.classList.contains('is-expanded')) return;
      const truncated = description.scrollHeight > description.clientHeight + 1;
      toggle.hidden = !truncated;
      if (!truncated) {
        toggle.textContent = 'Lihat lebih banyak';
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  };
  youtubeCards.forEach((card) => {
    const description = card.querySelector('.youtube-description');
    const toggle = card.querySelector('.youtube-toggle');
    if (!description || !toggle) return;
    toggle.addEventListener('click', () => {
      const expanded = description.classList.toggle('is-expanded');
      toggle.textContent = expanded ? 'Lihat lebih sedikit' : 'Lihat lebih banyak';
      toggle.setAttribute('aria-expanded', String(expanded));
      if (!expanded) requestAnimationFrame(syncYoutubeDescriptions);
    });
  });
  if (youtubeCards.length) {
    requestAnimationFrame(syncYoutubeDescriptions);
    window.addEventListener('resize', syncYoutubeDescriptions);
  }

  const reviewCards = [...document.querySelectorAll('.review-card')];
  const syncReviewTexts = () => {
    reviewCards.forEach((card) => {
      const text = card.querySelector('.review-text');
      const toggle = card.querySelector('.review-toggle');
      if (!text || !toggle || text.classList.contains('is-expanded')) return;
      const truncated = text.scrollHeight > text.clientHeight + 1;
      toggle.hidden = !truncated;
      if (!truncated) {
        text.classList.remove('is-clamped');
        toggle.textContent = 'Baca selengkapnya';
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  };
  reviewCards.forEach((card) => {
    const text = card.querySelector('.review-text');
    const toggle = card.querySelector('.review-toggle');
    if (!text || !toggle) return;
    text.classList.add('is-clamped');
    toggle.addEventListener('click', () => {
      const expanded = !text.classList.contains('is-expanded');
      text.classList.toggle('is-expanded', expanded);
      toggle.textContent = expanded ? 'Tampilkan lebih sedikit' : 'Baca selengkapnya';
      toggle.setAttribute('aria-expanded', String(expanded));
      if (!expanded) requestAnimationFrame(syncReviewTexts);
    });
  });
  if (reviewCards.length) {
    requestAnimationFrame(syncReviewTexts);
    window.addEventListener('resize', syncReviewTexts);
  }

  const promo = document.getElementById('promo-modal');
  const promoClose = document.getElementById('promo-close');
  const promoAnnouncement = document.getElementById('promo-announcement');
  if (!promo || !promoClose) return;

  const storageKey = 'ga_promo_dismissed';
  const wasDismissed = () => {
    try { return sessionStorage.getItem(storageKey) === '1'; } catch { return false; }
  };
  const dismiss = () => {
    try { sessionStorage.setItem(storageKey, '1'); } catch { return; }
  };

  let focusBeforePromo = null;
  let hadPromoInteraction = false;
  const rememberFocus = (previous) => {
    if (hadPromoInteraction) return;
    hadPromoInteraction = true;
    focusBeforePromo = previous && previous !== document.body && document.contains(previous) ? previous : null;
  };
  const restoreFocus = () => {
    if (!hadPromoInteraction || !focusBeforePromo) return;
    const active = document.activeElement;
    if (
      active && active !== document.body && active !== document.documentElement &&
      !promo.contains(active) && document.contains(active) &&
      !active.closest('[hidden]') && active.getClientRects().length
    ) return;
    if (promo.contains(focusBeforePromo) || !document.contains(focusBeforePromo)) return;
    if (focusBeforePromo.closest('[hidden]') || !focusBeforePromo.getClientRects().length) return;
    focusBeforePromo.focus();
  };

  promo.addEventListener('focusin', (event) => rememberFocus(event.relatedTarget));
  promo.addEventListener('pointerdown', () => rememberFocus(document.activeElement), true);
  promo.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab' || promo.hidden) return;
    const focusable = Array.from(promo.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
      .filter((el) => !el.closest('[hidden]') && el.getClientRects().length);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && (active === first || !promo.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !promo.contains(active))) {
      event.preventDefault();
      first.focus();
    }
  });

  window.setTimeout(() => {
    if (wasDismissed() || document.hidden) return;
    rememberFocus(document.activeElement);
    promo.hidden = false;
    if (promoAnnouncement) {
      const kicker = promo.querySelector('.promo-kicker')?.textContent.trim();
      const title = document.getElementById(promo.getAttribute('aria-labelledby'))?.textContent.trim();
      promoAnnouncement.textContent = [kicker, title].filter(Boolean).join('. ');
    }
    requestAnimationFrame(() => {
      promo.classList.add('is-visible');
      promoClose.focus({ preventScroll: true });
    });
  }, 2200);

  promoClose.addEventListener('click', () => {
    promo.classList.remove('is-visible');
    dismiss();
    window.setTimeout(() => {
      promo.hidden = true;
      restoreFocus();
    }, 450);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !promo.hidden) promoClose.click();
  });
})();
