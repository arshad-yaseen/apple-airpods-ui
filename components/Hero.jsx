import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
import HeroImage from "../components/HeroImage";
import DancingVideo from "../public/videos/dancing.mp4";
import {MdOutlinePlayCircleOutline} from "react-icons/md";

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
    gsap.to(".hero-buttons", {
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
          if (self.progress === 1) {
            gsap.to(".hero-second-title", {
              scrollTrigger: {
                trigger: ".hero-sub",
                scrub: true,
                start: "bottom bottom",
              },
              duration: 2,
              keyframes: [
                { opacity: 1, scale: 1.13 },
                { opacity: 0, scale: 1.13 },
              ],
            });
          }
        },
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
      className="h-[285vh] w-full flex relative flex-col items-center justify-center"
    >
      <div className="h-screen hero-sub  fixed top-0 w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl hero-content font-medium text-green hero-desc">All-new</h1>
        <div className="h-screen   fixed top-0 w-full flex flex-col items-center justify-center">
          <video
            src={DancingVideo}
            loop
            autoPlay
            muted
            className="h-screen min-w-screen scale-[1.05] z-10 opacity-0 dancing-video object-cover "
          />
        </div>
        <div className="h-screen   fixed top-0 w-full flex flex-col items-center justify-center">
          <h1 className="lg:text-[6rem] text-4xl text-center opacity-0 hero-second-title font-bold -mt-6 ">
            Rebuilt from the <br className="lg:hidden" /> sound up.
          </h1>
        </div>

        <h1 className="xl:text-[13rem] lg:text-[10rem] text-5xl hero-content hero-title font-bold lg:-mt-6 mt-2 ">
          AirPods Pro
        </h1>
        <div className="absolute lg:bottom-10 lg:mt-0 mt-60 hero-buttons z-[100]  w-full h-32 flex lg:flex-row flex-col items-center justify-center " >
          <a href="https://youtu.be/fVW8-px4Ufw" target="_blank" className="text-2xl flex items-center cursor-pointer hover:underline" >Watch Quiet the noise <MdOutlinePlayCircleOutline className="ml-2" /></a>
          <a href="https://youtu.be/TBTgQbjRsqg" target="_blank" className="text-2xl flex items-center cursor-pointer lg:ml-10 lg:mt-0 mt-2 hover:underline" >Watch the film <MdOutlinePlayCircleOutline className="ml-2" /></a>
        </div>
        <div className="absolute lg:top-16 top-24 flex items-center justify-center">
          <HeroImage />
        </div>
      </div>

      

    </div>
  );
}

export default Hero;
