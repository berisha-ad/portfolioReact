import gsap from "gsap";

const tl = gsap.timeline();

const isMobile = window.innerWidth < 768;
const duration = isMobile ? 0.7 : 1.3;

tl.to({}, { duration: 0.5 });

tl.fromTo(
  ".loading-logo",
  { opacity: 0 },
  { opacity: 1, duration: 0.5, ease: "power2.out" }
);
tl.to(".loading-logo", {
  opacity: 0,
  delay: 1,
  duration: 0.5,
  ease: "power2.out",
});

tl.to(".loading-screen", {
  width: 0,
  duration: duration,
  ease: "power2.out",
});
