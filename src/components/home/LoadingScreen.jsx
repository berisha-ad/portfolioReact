import { useEffect } from "react";
import gsap from "gsap";

const LoadingScreen = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    const isMobile = window.innerWidth < 768;
    const duration = isMobile ? 0.7 : 1.3;

    tl.fromTo(
      ".loading-logo",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    )
      .to(".loading-logo", {
        opacity: 0,
        delay: 1,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(".loading-screen", {
        width: 0,
        duration: duration,
        ease: "power2.out",
      });

    return () => {
      tl.kill(); // Stoppt die Animation, wenn die Komponente unmounted wird
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-logo">Adrian Berisha</div>
    </div>
  );
};

export default LoadingScreen;
