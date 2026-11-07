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
      const eased = 1 - Math.pow(2, -10 * t);
      el.textContent = fmt.format(Math.round(from + (to - from) * (t === 1 ? 1 : eased)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.chart').forEach((c) => c.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (el.classList.contains('figures')) {
        if (!reduced) el.querySelectorAll('.num').forEach(settle);
      } else {
        el.classList.add('is-in');
      }
      io.unobserve(el);
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('.figures, .chart').forEach((el) => io.observe(el));
})();
