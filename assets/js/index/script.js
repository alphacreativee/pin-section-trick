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
    if (index > 0) {
      gsap.to(container, {
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top 25%",
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
