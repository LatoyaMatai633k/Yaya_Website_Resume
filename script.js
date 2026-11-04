/* ═══════════════════════════════════════════════════════════
   Yaya Codes Portfolio — script.js
   Interactions:
     1. Hamburger / full-screen mobile nav
     2. Scroll-progressive timeline fill
     3. Active nav link on scroll
     4. Header shadow on scroll
     5. Fade-up card animations
     6. Typewriter effect for hero name
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── 1. Hamburger / mobile nav ──────────────────────────── */
(function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mainNav   = document.getElementById('main-nav');

  if (!hamburger || !mainNav) return;

  function openNav() {
    mainNav.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation menu');
    document.body.style.overflow = 'hidden'; // prevent scroll behind overlay
    const firstLink = mainNav.querySelector('.nav-link');
    if (firstLink) firstLink.focus();
  }

  function closeNav() {
    mainNav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function() {
    mainNav.classList.contains('is-open') ? closeNav() : openNav();
  });

  // Close when a nav link is clicked
  mainNav.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      closeNav();
      hamburger.focus();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
      closeNav();
      hamburger.focus();
    }
  });
})();


/* ── 2. Scroll-progressive timeline fill ────────────────── */
(function initTimelineFill() {
  const timeline = document.getElementById('timeline');
  const fill     = document.getElementById('timeline-fill');
  if (!timeline || !fill) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    fill.style.height = '100%';
    return;
  }

  function updateFill() {
    const rect       = timeline.getBoundingClientRect();
    const viewH      = window.innerHeight;
    const progress   = Math.min(Math.max((viewH - rect.top) / (rect.height + viewH), 0), 1);
    fill.style.height = (progress * 100) + '%';
  }

  window.addEventListener('scroll', updateFill, { passive: true });
  window.addEventListener('resize', updateFill, { passive: true });
  updateFill();
})();


/* ── 3. Active nav link on scroll ───────────────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function(l) { l.classList.remove('nav-link--active'); });
          const active = document.querySelector('.nav-link[href="#' + entry.target.id + '"]');
          if (active) active.classList.add('nav-link--active');
        }
      });
    },
    { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
  );

  sections.forEach(function(s) { observer.observe(s); });
})();


/* ── 4. Header shadow on scroll ─────────────────────────── */
(function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function check() {
    header.classList.toggle('header--scrolled', window.scrollY > 24);
  }

  window.addEventListener('scroll', check, { passive: true });
  check();
})();


/* ── 5. Fade-up entrance animations ─────────────────────── */
(function initFadeIn() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = document.querySelectorAll(
    '.project-card, .achievement-card, .edu-card, .stat-card, .skill-category, .timeline-entry'
  );
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );

  targets.forEach(function(el) {
    el.classList.add('fade-up');
    observer.observe(el);
  });
})();


/* ── 6. Typewriter effect for hero name ─────────────────── */
(function initTypewriter() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const target = document.getElementById('typewriter-target');
  const cursor = document.querySelector('.hero-cursor');
  if (!target) return;

  const fullText = target.textContent.trim();
  target.textContent = '';

  let i = 0;
  const speed = 65; // ms per character

  function type() {
    if (i < fullText.length) {
      target.textContent += fullText.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Stop blinking cursor after name is done
      setTimeout(function() {
        if (cursor) cursor.style.display = 'none';
      }, 1800);
    }
  }

  // Small delay before starting, so page load settles
  setTimeout(type, 400);
})();
