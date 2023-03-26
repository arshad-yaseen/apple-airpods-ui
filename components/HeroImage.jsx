import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// Import all PNG images from airpodframes folder
import Frame1 from "../public/airpodframes/heroairpod_3.png";
import Frame2 from "../public/airpodframes/heroairpod_4.png";
import Frame3 from "../public/airpodframes/heroairpod_5.png";
import Frame4 from "../public/airpodframes/heroairpod_6.png";
import Frame5 from "../public/airpodframes/heroairpod_7.png";
import Frame6 from "../public/airpodframes/heroairpod_8.png";
import Frame7 from "../public/airpodframes/heroairpod_9.png";
import Frame8 from "../public/airpodframes/heroairpod_10.png";
import Frame9 from "../public/airpodframes/heroairpod_11.png";
import Frame10 from "../public/airpodframes/heroairpod_12.png";
import Frame11 from "../public/airpodframes/heroairpod_13.png";
import Frame12 from "../public/airpodframes/heroairpod_14.png";
import Frame13 from "../public/airpodframes/heroairpod_15.png";
import Frame14 from "../public/airpodframes/heroairpod_16.png";
import Frame15 from "../public/airpodframes/heroairpod_17.png";
import Frame16 from "../public/airpodframes/heroairpod_18.png";
import Frame17 from "../public/airpodframes/heroairpod_19.png";
import Frame18 from "../public/airpodframes/heroairpod_20.png";
import Frame19 from "../public/airpodframes/heroairpod_21.png";
import Frame20 from "../public/airpodframes/heroairpod_22.png";
import Frame21 from "../public/airpodframes/heroairpod_23.png";
import Frame22 from "../public/airpodframes/heroairpod_24.png";
import Frame23 from "../public/airpodframes/heroairpod_25.png";
import Frame24 from "../public/airpodframes/heroairpod_26.png";
import Frame25 from "../public/airpodframes/heroairpod_27.png";
import Frame26 from "../public/airpodframes/heroairpod_28.png";
import Frame27 from "../public/airpodframes/heroairpod_29.png";
import Frame28 from "../public/airpodframes/heroairpod_30.png";
import Frame29 from "../public/airpodframes/heroairpod_31.png";
import Frame30 from "../public/airpodframes/heroairpod_32.png";
import Frame31 from "../public/airpodframes/heroairpod_34.png";
import Frame32 from "../public/airpodframes/heroairpod_36.png";

function HeroImage() {

    let [frame, setFrame] = useState(Frame1);

  useEffect(() => {
         // This code is used for the scrolling animation in the index page
      // The mapRange function is used to map the range of the scroll value
      // to the correct index for the animation
      // The scroll_index variable is used to determine which image to display
      // The scroll_index variable is used to determine which image to display
      // The scrolling is done in 32 frames
      // The window.onscroll function is called whenever the window is scrolled
      // The window.onscroll function calls the mapRange function, which maps
      // the range of the scroll value to the correct index for the animation
      // The mapRange function takes in the current scroll value, the old min
      // and max, and the new min and max

 window.onscroll = (e) => {

  let hero = document.getElementById('hero');
  let dancingSection = document.getElementById('dancingSection');

 // get the current scroll position
 const currentScrollPosition = window.scrollY || window.pageYOffset;

 // check if the current scroll position is greater than or equal to the maximum scroll position
 if (currentScrollPosition >= hero.scrollHeight - window.innerHeight) {
   // the scroll has ended
   document.querySelector('.dancing-video').classList.replace('opacity-0', 'opacity-100')
 }else{
    document.querySelector('.dancing-video').classList.replace('opacity-100', 'opacity-0')
 }

  let hero_airpords_image = document.getElementById('hero-airpords-image');

      const scroll_index = Math.floor(
        mapRange(
          window.scrollY,
          0,
          document.getElementById('hero').clientHeight - window.innerHeight,
          1,
          32
        )
      );

      function mapRange(value, oldMin, oldMax, newMin, newMax) {
        return (
          ((value - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin
        );
      }

      if(scroll_index > 31) {
        hero_airpords_image.classList.add("opacity-0")
      }else{
        hero_airpords_image.classList.remove("opacity-0")
      }

      switch (scroll_index) {
        case 1:
          setFrame(Frame1);
          break;
        case 2:
          setFrame(Frame2);
          break;
        case 3:
          setFrame(Frame3);
          break;
        case 4:
          setFrame(Frame4);
          break;
        case 5:
          setFrame(Frame5);
          break;
        case 6:
          setFrame(Frame6);
          break;
        case 7:
          setFrame(Frame7);
          break;
        case 8:
          setFrame(Frame8);
          break;
        case 9:
          setFrame(Frame9);
          break;
        case 10:
          setFrame(Frame10);
          break;
        case 11:
          setFrame(Frame11);
          break;
        case 12:
          setFrame(Frame12);
          break;
        case 13:
          setFrame(Frame13);
          break;

        case 14:
          setFrame(Frame14);
          break;
        case 15:
          setFrame(Frame15);
          break;
        case 16:
          setFrame(Frame16);
          break;
        case 17:
          setFrame(Frame17);
          break;
        case 18:
          setFrame(Frame18);
          break;
        case 19:
          setFrame(Frame19);
          break;
        case 20:
          setFrame(Frame20);
          break;
        case 21:
          setFrame(Frame21);
          break;
        case 22:
          setFrame(Frame22);
          break;
        case 23:
          setFrame(Frame23);
          break;
        case 24:
          setFrame(Frame24);
          break;
        case 25:
          setFrame(Frame25);
          break;
        case 26:
          setFrame(Frame26);
          break;
        case 27:
          setFrame(Frame27);
          break;
        case 28:
          setFrame(Frame28);
          break;
        case 29:
          setFrame(Frame29);
          break;
        case 30:
          setFrame(Frame30);
          break;
        case 31:
          setFrame(Frame31);
          break;
        case 32:
          setFrame(Frame32);
          break;
    
      }
    };
  }, []);

  return (
    <Image priority={true} id='hero-airpords-image' src={frame} alt="airpods-frame-1" height={1000} className="transition-opacity duration-300 " />
  )
}

export default HeroImage