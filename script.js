/* ═══════════════════════════════════════════════════════════
   Yaya Codes Portfolio - script.js
   Interactions:
     1. Hamburger / full-screen mobile nav
     2. Scroll-progressive timeline fill
     3. Active nav link on scroll
     4. Header shadow on scroll
     5. Fade-up card animations
     6. Typewriter effect for hero name (slowed)
     7. Count-up animation for About stats
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── 1. Hamburger / mobile nav ──────────────────────────── */
(function initHamburger() {
  var hamburger = document.getElementById('hamburger');
  var mainNav   = document.getElementById('main-nav');
  if (!hamburger || !mainNav) return;

  function openNav() {
    mainNav.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation menu');
    document.body.style.overflow = 'hidden';
    var firstLink = mainNav.querySelector('.nav-link');
    if (firstLink) firstLink.focus();
  }

  function closeNav() {
    mainNav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    mainNav.classList.contains('is-open') ? closeNav() : openNav();
  });

  mainNav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      closeNav();
      hamburger.focus();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
      closeNav();
      hamburger.focus();
    }
  });
})();


/* ── 2. Scroll-progressive timeline fill ────────────────── */
(function initTimelineFill() {
  var timeline = document.getElementById('timeline');
  var fill     = document.getElementById('timeline-fill');
  if (!timeline || !fill) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    fill.style.height = '100%';
    return;
  }

  function updateFill() {
    var rect     = timeline.getBoundingClientRect();
    var viewH    = window.innerHeight;
    var progress = Math.min(Math.max((viewH - rect.top) / (rect.height + viewH), 0), 1);
    fill.style.height = (progress * 100) + '%';
  }

  window.addEventListener('scroll', updateFill, { passive: true });
  window.addEventListener('resize', updateFill, { passive: true });
  updateFill();
})();


/* ── 3. Active nav link on scroll ───────────────────────── */
(function initActiveNav() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (l) { l.classList.remove('nav-link--active'); });
        var active = document.querySelector('.nav-link[href="#' + entry.target.id + '"]');
        if (active) active.classList.add('nav-link--active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

  sections.forEach(function (s) { observer.observe(s); });
})();


/* ── 4. Header shadow on scroll ─────────────────────────── */
(function initHeaderScroll() {
  var header = document.querySelector('.site-header');
  if (!header) return;

  function check() {
    header.classList.toggle('header--scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', check, { passive: true });
  check();
})();


/* ── 5. Fade-up entrance animations ─────────────────────── */
(function initFadeIn() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var targets = document.querySelectorAll(
    '.project-card, .achievement-card, .edu-card, .stat-card, .skill-category, .timeline-entry'
  );
  if (!targets.length) return;

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

  targets.forEach(function (el) {
    el.classList.add('fade-up');
    observer.observe(el);
  });
})();


/* ── 6. Typewriter effect for hero name (relaxed pace) ─── */
(function initTypewriter() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var target = document.getElementById('typewriter-target');
  var cursor = document.querySelector('.hero-cursor');
  if (!target) return;

  var fullText = target.textContent.trim();
  target.textContent = '';

  var i = 0;
  /* 110ms per character — relaxed, readable pace */
  var speed = 110;

  function type() {
    if (i < fullText.length) {
      target.textContent += fullText.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      /* Hide blinking cursor 1.5s after name completes */
      setTimeout(function () {
        if (cursor) cursor.style.display = 'none';
      }, 1500);
    }
  }

  /* Short delay so page has settled before animation starts */
  setTimeout(type, 500);
})();


/* ── 7. Count-up animation for About stats ──────────────── */
(function initCountUp() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* Only targets elements with data-count attribute */
  var counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;

  var duration = 1200; /* ms for the full count */

  function animateCounter(el) {
    var target  = parseInt(el.getAttribute('data-count'), 10);
    var start   = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed  = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      /* Ease-out: decelerates toward the end */
      var eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target); /* run only once */
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (el) {
    /* Start display at 0 until visible */
    el.textContent = '0';
    observer.observe(el);
  });
})();


/* ── 8. Yaya Assistant panel ─────────────────────────────
   Launcher toggles panel open/close.
   Suggested questions populate input and send.
   Send button / Enter key send a message.
   Until the RAG knowledge base is connected, unknown
   questions get an honest holding response.
   No paid API is called.
──────────────────────────────────────────────────────── */
(function initYayaAssistant() {
  var launcher     = document.getElementById('yaya-launcher');
  var panel        = document.getElementById('yaya-panel');
  var closeBtn     = document.getElementById('yaya-panel-close');
  var input        = document.getElementById('yaya-input');
  var sendBtn      = document.getElementById('yaya-send');
  var messages     = document.getElementById('yaya-messages');
  var suggestions  = document.getElementById('yaya-suggestions');

  if (!launcher || !panel || !closeBtn || !input || !sendBtn || !messages) return;

  /* ── Open / close ── */
  function openPanel() {
    panel.hidden = false;
    launcher.setAttribute('aria-expanded', 'true');
    /* Focus first focusable element in panel */
    var firstFocus = panel.querySelector('button, input');
    if (firstFocus) firstFocus.focus();
  }

  function closePanel() {
    panel.hidden = true;
    launcher.setAttribute('aria-expanded', 'false');
    launcher.focus();
  }

  launcher.addEventListener('click', function () {
    panel.hidden ? openPanel() : closePanel();
  });

  closeBtn.addEventListener('click', closePanel);

  /* Close on Escape */
  panel.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePanel();
  });

  /* ── Add a message bubble ── */
  function addMessage(text, role) {
    var div = document.createElement('div');
    div.className = 'yaya-message yaya-message--' + role;
    var p = document.createElement('p');
    p.textContent = text;
    div.appendChild(p);
    messages.appendChild(div);
    /* Scroll to latest */
    messages.scrollTop = messages.scrollHeight;
  }

  /* ── Holding response (no RAG yet) ── */
  var holdingResponse =
    "My full knowledge base isn't connected yet - " +
    "I'll be able to answer your questions in detail once it is. " +
    "In the meantime, feel free to browse my portfolio or reach out via email or LinkedIn.";

  /* ── Handle sending a message ── */
  function sendMessage() {
    var text = input.value.trim();
    if (!text) return;

    /* Hide suggestions once a message is sent */
    if (suggestions) suggestions.classList.add('is-hidden');

    addMessage(text, 'user');
    input.value = '';

    /* Simulate a short typing pause then respond */
    setTimeout(function () {
      addMessage(holdingResponse, 'assistant');
    }, 700);
  }

  sendBtn.addEventListener('click', sendMessage);

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  /* ── Suggested question buttons ── */
  if (suggestions) {
    suggestions.querySelectorAll('.yaya-suggestion').forEach(function (btn) {
      btn.addEventListener('click', function () {
        input.value = btn.textContent;
        input.focus();
        sendMessage();
      });
    });
  }
})();
