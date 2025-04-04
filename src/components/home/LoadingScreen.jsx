import { useEffect } from "react";
import gsap from "gsap";

const LoadingScreen = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();
    const isMobile = window.innerWidth < 768;
    const duration = isMobile ? 0.7 : 1.3;

    tl.fromTo(
      ".loading-logo",
      { opacity: 0 },
      { opacity: 1, delay: 0.5, duration: 0.5, ease: "power2.out" }
    )
      .to(".loading-logo", {
        opacity: 0,
        delay: 0.6,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(".loading-screen", {
        width: 0,
        duration: duration,
        ease: "power2.out",
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      });

    return () => {
      tl.kill();
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-logo">Adrian Berisha</div>
    </div>
  );
};

export default LoadingScreen;
