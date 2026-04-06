// JS para animaciones y métricas
(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animatedSelectors = ".service-card, .metric-card, .process-card, .quality-card, .material-card, .gallery-card, .feature-list article, .contact-form, .location-card, .financing-card";
  const animatedItems = document.querySelectorAll(animatedSelectors);

  animatedItems.forEach((item) => item.classList.add("js-animate"));

  const metricValues = document.querySelectorAll(".metric-value");
  const runCounters = () => {
    metricValues.forEach((el) => {
      const target = Number(el.dataset.target || 0);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const start = performance.now();
      const duration = 1300;

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        el.textContent = `${prefix}${current}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    });
  };

  if (prefersReducedMotion) {
    animatedItems.forEach((item) => item.classList.add("in-view"));
    metricValues.forEach((el) => {
      const target = Number(el.dataset.target || 0);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      el.textContent = `${prefix}${target}${suffix}`;
    });
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  animatedItems.forEach((item) => revealObserver.observe(item));

  const metricsSection = document.querySelector(".metrics-strip");
  if (metricsSection) {
    const metricsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          runCounters();
          metricsObserver.disconnect();
        });
      },
      { threshold: 0.35 }
    );

    metricsObserver.observe(metricsSection);
  }
})();
