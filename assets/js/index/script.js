document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const sections = gsap.utils.toArray(".trick-section");

  sections.forEach((section, index) => {
    if (index === 0) return; // section đầu không cần

    // Pin section trước để section sau clip đè lên
    ScrollTrigger.create({
      trigger: sections[index - 1],
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
    });

    // Animate clip-path từ inset(100%) → inset(0%)
    gsap.to(section, {
      clipPath: "inset(0% 0 0 0)",
      ease: "none",
      scrollTrigger: {
        trigger: sections[index - 1],
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    });
  });
});
