import Image from "next/image";
import React, { useEffect } from "react";
import NoiseParticleImage from "../public/images/noiceparticle.jpeg";
import AirpodBigImage from "../public/images/airpords2.jpeg";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

function NoiseOverviewSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".airpod-big-image", {
      scrollTrigger: {
        trigger: ".noice-overview-section-3-title",
        scrub: 1,
        start: "bottom bottom",
        end: "top 70%",
      },
      translateY: 0,
      opacity: 1,
      duration: 2,
      ease: "none",
    });
    gsap.to(".noise-point-line", {
      scrollTrigger: {
        trigger: ".noice-overview-section-3-title",
        scrub: 1,
        start: "bottom bottom",
        end: "top 70%",
      },
      height: "100%",
      duration: 2,
      ease: "none",
    });
  });

  return (
    <div className="w-full lg:h-[110vh] h-[180vh] relative border-y border-y-[#424344] flex lg:flex-row flex-col noise-cancellation-overview-section">
      <div className="lg:w-1/2 w-full lg:py-0  h-full flex flex-col border-r border-r-[#424344]">
        <div className="w-full lg:h-1/2 h-full relative flex items-center justify-center">
          <Image
            src={NoiseParticleImage}
            alt="Noise Particle"
            className="w-full h-full absolute object-cover top-0 left-0 z-10"
          />
          <div className="z-50 relative w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-xl text-white text-center">Up to</h1>
            <h1 className="text-[7rem] leading-[1] text-white text-center font-bold">
              2x
            </h1>
            <h1 className="text-2xl text-white text-center">
              <span className="text-green">more</span> Active
            </h1>
            <h1 className="text-2xl flex text-white text-center">
              Noise Cancellation <div className="span text-xs">1</div>
            </h1>
          </div>
        </div>
        <div className="w-full lg:h-1/2 full flex items-center justify-center lg:border-t border-y lg:px-28 px-4 lg:py-0 py-12 lg:border-t-[#424344] border-y-[#424344] ">
          <h1 className="lg:text-3xl text-lg text-[#6E6F72] font-medium ">
            A new driver and improved acoustic algorithms help{" "}
            <span className="text-white noice-overview-section-3-title">
              Active Noise Cancellation
            </span>{" "}
            reduce more unwanted noise, so nothing interrupts listening during
            your commute and when you need to{" "}
            <span className="text-green">focus</span>.
          </h1>
        </div>
      </div>
      <div className="lg:w-1/2 w-full h-full flex justify-center  items-center overflow-hidden relative lg:p-20 p-6">
        <div className="w-[60%] h-full flex">
          <p className="text-xl font-medium text-[#6E6F72]">
            <span className="text-white">Noise-cancelling microphones</span> and
            a rear vent are optimally placed to quickly detect sound coming in,
            working together to <span className="text-green">counter</span>{" "}
            noise before it reaches your ear.
          </p>
        </div>
        <div className="w-[40%] h-full flex  z-50 pl-4 relative">
          <div className="noise-point-line h-36">
            <div className="w-[0.05rem] h-[65%] bg-[#6E6F72]"></div>
            <div className="w-2 h-2 bg-[#6E6F72] rounded-full absolute -mt-1 -ml-[0.15rem]"></div>
          </div>
        </div>
        <Image
          src={AirpodBigImage}
          alt="Airpod big image"
          className="lg:h-[750px] w-fit z-10 absolute lg:-bottom-[200px] -bottom-[40px] opacity-0 translate-y-[100px] airpod-big-image"
        />
      </div>
    </div>
  );
}

export default NoiseOverviewSection;
