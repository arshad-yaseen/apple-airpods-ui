import React, { useEffect, useState } from "react";
import Image from "next/image";
import XrayImageMain from "../public/images/airpordsthreehalf.jpeg";
import XrayHalfImage from "../public/images/airpordshalf.jpeg";
import AirpodsImage from "../public/images/airpords1.jpeg";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import NoiseVideo from "../public/videos/beatparticles.mp4";

function XraySection() {
  let [xrayImage, setXrayImage] = useState(XrayImageMain);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".xray-image", {
      scrollTrigger: {
        trigger: ".xray-image",
        scrub: true,
        start: "bottom bottom",
        onUpdate: (self) => {
          if (self.progress > 0.8 && self.progress < 1) {
            setXrayImage(XrayHalfImage);
          } else if (self.progress === 1) {
            setXrayImage(AirpodsImage);
          } else {
            setXrayImage(XrayImageMain);
          }
        },
      },
      scale: 0.8,
      duration: 2,
      ease: "none",
    });

    gsap.to(".xray-desc-1", {
      scrollTrigger: {
        trigger: ".xray-desc-1",
        scrub: 1,
        start: "top 50%",
        end: "top center",
      },
      keyframes: [{ opacity: 1 }, { opacity: 0 }],
      duration: 2,
      ease: "none",
    });
    gsap.to(".xray-desc-2", {
      scrollTrigger: {
        trigger: ".xray-desc-2",
        scrub: 1,
        start: "top 50%",
        end: "top center",
      },
      keyframes: [{ opacity: 1 }, { opacity: 0 }],
      duration: 2,
      ease: "none",
    });
    gsap.to(".noise-video", {
      scrollTrigger: {
        trigger: "#XraySection",
        scrub: true,
        start: "top -70%",
        end: "top -200%",
      },
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    });

    const xraySection = document.getElementById("XraySection");

    window.addEventListener("scroll", function () {
      if (
        window.innerHeight + window.pageYOffset >=
        xraySection.offsetTop + xraySection.offsetHeight - 600
      ) {
        xraySection.style.opacity = 0;
      } else {
        xraySection.style.opacity = 1;
      }
    });
  }, []);

  return (
    <div
      id="XraySection"
      className="w-full  h-[350vh] transition-opacity duration-700  flex  relative "
    >
      <video
        loop
        autoPlay
        muted
        src={NoiseVideo}
        className="w-full h-full fixed top-0 opacity-0 noise-video z-[-1] lg:object-scale-down object-cover "
      ></video>
      <div className="w-full lg:flex hidden  pl-56 pt-[600px] flex-col  items-end">
        <h1 className="text-xl font-medium text-[#626369] opacity-0 xray-desc-1">
          The chip uses powerful{" "}
          <span className="text-white">new adaptation algorithms</span> to
          process sound more quickly, tuning audio at the precise moment you
          hear it. Every detail is rendered for your specific ear shape,
          immersing you in
          <span className="text-green">higher-fidelity sound</span>
        </h1>
      </div>
      <div className="h-screen sticky top-0 w-full flex justify-center">
        <div className="w-[90%]  flex  z-10 sticky top-0 items-center justify-center ">
          <Image
            src={xrayImage}
            alt="xray image"
            className="h-80% xray-image z-10 "
          />
        </div>
      </div>
      <div className="w-full lg:flex hidden  pr-56  pt-[900px] justify-start">
        <h1 className="text-xl font-medium text-[#626369]  opacity-0 xray-desc-2">
          <span className="text-white">
            A custom-built driver and amplifier
          </span>{" "}
          work with the <span className="text-green">H2 chip</span> to provide
          lower distortion during playback, so you&apos;ll hear deeper bass and
          crisper highs — across all volume levels.
        </h1>
      </div>
    </div>
  );
}

export default XraySection;
