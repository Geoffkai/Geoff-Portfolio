import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const root = document.documentElement;
// ?still turns all motion off, the same as the reduced-motion system setting.
const still =
  matchMedia('(prefers-reduced-motion: reduce)').matches ||
  new URLSearchParams(location.search).has('still');
root.classList.toggle('still', still);

setupCopyEmail();
setupWork();
if (!still) setupMotion();

function setupCopyEmail() {
  const button = document.getElementById('copy');
  const status = document.getElementById('copy-status');
  if (!button || !status) return;
  let timer;
  button.addEventListener('click', async () => {
    const email = button.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = 'Email copied.';
    } catch {
      status.textContent = `Copying is blocked here. The address is ${email}.`;
    }
    clearTimeout(timer);
    timer = setTimeout(() => { status.textContent = ''; }, 5000);
  });
}

// A link to a project (the hero index, or an address ending in #project) opens that project's row.
function setupWork() {
  const stack = document.querySelector('.stack');
  if (!stack) return;
  const open = (hash) => {
    const row = hash.length > 1 && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!row || !row.matches('details.case') || row.open) return;
    // Open at once, without the height animation, so the page scrolls to where the row really is.
    stack.classList.add('jump');
    row.open = true;
    stack.offsetHeight;
    requestAnimationFrame(() => stack.classList.remove('jump'));
  };
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => open(link.getAttribute('href')));
  });
  open(location.hash);
}

function setupMotion() {
  root.classList.add('motion');
  gsap.registerPlugin(ScrollTrigger);

  // Smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync.
  const lenis = new Lenis({ lerp: 0.1, anchors: true });
  lenis.on('scroll', ScrollTrigger.update);

  // The navigation steps aside while scrolling down and returns on the way up.
  const nav = document.querySelector('.nav');
  lenis.on('scroll', ({ scroll, direction }) => {
    if (direction === 1 && scroll > 300) nav.classList.add('is-hidden');
    else if (direction === -1 || scroll <= 300) nav.classList.remove('is-hidden');
  });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Headings slide up from behind a mask the first time they enter the screen.
  const seen = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in');
      seen.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -12% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => seen.observe(el));

  // Groups marked data-rise: their entries fade up in a stagger, once.
  // The value is a selector for the entries; without one, the direct children rise.
  const rising = new IntersectionObserver((entries) => {
    for (const { isIntersecting, target } of entries) {
      if (!isIntersecting) continue;
      rising.unobserve(target);
      target.classList.add('in');
      // Afterwards the helper class goes, so each entry gets its own hover timing back.
      const items = target.querySelectorAll('.rise');
      setTimeout(() => items.forEach((el) => el.classList.remove('rise')), 1100 + items.length * 55);
    }
  }, { rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('[data-rise]').forEach((group) => {
    const items = group.dataset.rise ? group.querySelectorAll(group.dataset.rise) : group.children;
    [...items].forEach((el, i) => {
      el.classList.add('rise');
      el.style.setProperty('--i', i);
    });
    rising.observe(group);
  });

  // About statement: words brighten as the paragraph scrolls through.
  const statement = document.querySelector('[data-words]');
  if (statement) {
    const text = statement.textContent.trim();
    const words = text.split(/\s+/).map((word) => `<span class="w">${word}</span>`).join(' ');
    statement.innerHTML = `<span class="sr-only">${text}</span><span aria-hidden="true">${words}</span>`;
    gsap.to(statement.querySelectorAll('.w'), {
      opacity: 1,
      ease: 'none',
      stagger: 0.08,
      scrollTrigger: { trigger: statement, start: 'top 82%', end: 'bottom 55%', scrub: true },
    });
  }

  const media = gsap.matchMedia();
  media.add('(min-width: 960px)', () => {
    // Hero: the portrait drifts and dims while the name rises through it.
    const hero = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true };
    gsap.to('.hero__portrait', { yPercent: 9, scale: 1.04, opacity: 0.5, ease: 'none', scrollTrigger: hero });
    gsap.to('.hero__name', { yPercent: -70, ease: 'none', scrollTrigger: hero });
    gsap.fromTo('.hero__intro, .hero__index, .hero__foot', { opacity: 1 }, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: '40% top', scrub: true },
    });

  });

  // Opening or closing a project changes the page height, so scroll positions are measured again.
  document.querySelectorAll('details.case').forEach((row) => {
    row.addEventListener('toggle', () => setTimeout(() => ScrollTrigger.refresh(), 750));
  });

  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}
