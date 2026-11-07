(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fmt = new Intl.NumberFormat('en-US');

  // Key figures settle once: digits run from just below the real value up to it.
  const settle = (el) => {
    const to = Number(el.dataset.to);
    const from = Math.round(to * 0.9);
    const dur = 900;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      el.textContent = fmt.format(Math.round(from + (to - from) * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const figures = document.querySelector('.figures');
  if (figures && !reduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      figures.querySelectorAll('.num').forEach(settle);
      io.disconnect();
    }, { threshold: 0.35 });
    io.observe(figures);
  }

  // Installable app: cache the site for offline use.
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }
})();
