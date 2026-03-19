document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const sections = gsap.utils.toArray(".trick-section");

  sections.forEach((section, index) => {
    const container = section.querySelector(".container-sec");

    // Giữ nguyên animation container của bạn
    if (index > 0) {
      gsap.set(section, { clipPath: "inset(100% 0 0 0)" });

      gsap.to(section, {
        clipPath: "inset(0% 0 0 0)",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    }

    if (index < sections.length - 1) {
      ScrollTrigger.create({
        trigger: section,
        start: "bottom bottom",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });
    }
  });
});
