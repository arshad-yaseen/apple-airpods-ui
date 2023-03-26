import gsap from 'gsap';
import CustomEase from 'gsap/dist/CustomEase';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react'

function DancingSection() {

  useEffect(()=> {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".dancing-title-1", {
      scrollTrigger: {
        trigger: ".dancing-title-1",
        scrub: 1,
        start: "bottom bottom",
        end: "top 50%",
      },
      opacity: 0.1,
      duration: 2,
      ease: "none",
    });
    gsap.to(".dancing-title-2", {
      scrollTrigger: {
        trigger: ".dancing-title-1",
        scrub: 1,
        start: "top 50%",
        end: "top 20%",
      },
      keyframes:[
        {opacity: 1},
        {opacity: 0.1},
      ],
      duration: 2,
      ease: "none",
    });
    gsap.to(".dancing-title-3", {
      scrollTrigger: {
        trigger: ".dancing-title-1",
        scrub: 1,
        start: "top 30%",
        end: "top 5%",
      },
      keyframes:[
        {opacity: 1},
        {opacity: 0.1},
      ],
      duration: 2,
      ease: "none",
    });
    gsap.to(".dancing-title-4", {
      scrollTrigger: {
        trigger: ".dancing-title-1",
        scrub: 1,
        start: "top 5%",
        end: "top -40%",
      },
      keyframes:[
        {opacity: 1},
        {opacity: 0.1},
      ],
      duration: 2,
      ease: "none",
    });
   gsap.to(".dancing-video", {
      scrollTrigger: {
        trigger: "#dancingSection",
        scrub: true,
        start: "top 145%",
        end: "top -100%",

      },
      keyframes:[
        {opacity: 1},
        {opacity: 0},
      ],
      duration: 2,
      ease: "none",
    });
  },[])

  return (
    <div id='dancingSection' className='w-full h-[200vh] z-50  relative lg:p-56 p-6' >
        <h1 className='text-white lg:text-[3.2rem] text-3xl font-bold lg:w-[850px] w-full leading-[1.2]' >
        <span className='opacity-100 dancing-title-1' >Up to 2x more Active Noise Cancellation than the previous generation.</span> <span className='opacity-10 dancing-title-2' >Spatial Audio takes immersion to a remarkably personal level.</span> <span className='opacity-10 dancing-title-3' >Touch control lets you adjust volume with a swipe.</span> <span className='opacity-10 dancing-title-4' >And a leap in power delivers 6 hours of battery life from a single charge.</span>
        </h1>
    </div>
  )
}

export default DancingSection