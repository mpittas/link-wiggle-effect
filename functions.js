gsap.to(".word_inner", {
  y: 2,
  stagger: { // wrap advanced options in an object
    each: 0.1,
    grid: "auto",
    ease: "power2.inOut",
  }
});