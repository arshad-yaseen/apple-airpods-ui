import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
import HeroImage from "../components/HeroImage";

function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".hero-desc", {
      scrollTrigger: {
        trigger: ".hero-sub",
        scrub: true,
        start: "bottom bottom",
      },
      opacity: 0,
      duration: 2,
      ease: "none",
    });

    // Animates the hero title to scale and fade out when the trigger is scrolled to the top of the viewport
    gsap.to(".hero-title", {
      scrollTrigger: {
        trigger: ".hero-sub",
        scrub: true,
        start: "bottom bottom",
        onUpdate: (self) => {
          if(self.progress === 1) {
            gsap.to(".hero-second-title", {
              scrollTrigger: {
                trigger: ".hero-sub",
                scrub: 1,
                start: "bottom bottom",
              },
              duration: 2,
              ease: "none",
              keyframes: [
                { opacity: 1, scale: 1.130 },
                { opacity: 0,scale: 1.130 }
              ]
            });
          }
        }
      },
      scale: 1.2,
      opacity: 0,
      display: "none",
      duration: 2,
      ease: "none",
    });

    

  }, []);

  return (
    <div
      id="hero"
      className="h-[300vh] w-full flex flex-col items-center justify-center"
    >
      <div className="h-screen hero-sub  fixed top-0 w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium text-green hero-desc">All-new</h1>
        <div className="h-screen   fixed top-0 w-full flex flex-col items-center justify-center">
        <h1 className="text-[6rem] opacity-0 hero-second-title font-bold -mt-6 ">
          Rebuilt from the sound up.
        </h1>
        </div>
        
        <h1 className="text-[13rem] hero-title font-bold -mt-6 ">
          AirPods Pro
        </h1>
        <div className="absolute top-16 flex items-center justify-center">
          <HeroImage />
        </div>
      </div>
    </div>
  );
}

export default Hero;
