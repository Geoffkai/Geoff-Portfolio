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

  // Work: only where the projects pin (wide and tall enough windows).
  media.add('(min-width: 960px) and (min-height: 701px)', () => {
    // As the next project slides over, the pinned one sinks back.
    const cases = gsap.utils.toArray('.case');
    cases.forEach((item, i) => {
      const next = cases[i + 1];
      if (!next) return;
      gsap.to(item.querySelector('.case__inner'), {
        scale: 0.94,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: { trigger: next, start: 'top 72%', end: 'top top', scrub: true },
      });
    });
  });

  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}
